import nodemailer from "nodemailer";
import dotenv from "dotenv";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/** Project root (…/server/api → two levels up) */
const projectRoot = path.resolve(__dirname, "..", "..");

function loadEnvLocal() {
  const candidates = [
    path.join(projectRoot, ".env.local"),
    path.join(process.cwd(), ".env.local"),
  ];
  for (const envPath of candidates) {
    if (fs.existsSync(envPath)) {
      dotenv.config({ path: envPath });
      console.log("[api/contact] Loaded env from:", envPath);
      return;
    }
  }
  console.log(
    "[api/contact] No .env.local on disk (normal on Vercel — use Project → Environment Variables)."
  );
}

loadEnvLocal();

function getSmtpConfig() {
  const SMTP_USER = (
    process.env.SMTP_USER ||
    process.env.GMAIL_USER ||
    ""
  ).trim();
  const SMTP_PASS = (
    process.env.SMTP_PASS ||
    process.env.SMTP_PASSWORD ||
    process.env.GMAIL_APP_PASSWORD ||
    ""
  ).trim();
  const CONTACT_TO = (process.env.CONTACT_TO || SMTP_USER || "").trim();
  const CONTACT_FROM = (process.env.CONTACT_FROM || SMTP_USER || "").trim();
  return { SMTP_USER, SMTP_PASS, CONTACT_TO, CONTACT_FROM };
}

function corsHeaders(req) {
  const allowOrigin =
    process.env.CORS_ORIGIN?.trim() || req.headers.origin || "*";
  return {
    "Access-Control-Allow-Origin": allowOrigin,
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Authorization",
    "Access-Control-Max-Age": "86400",
  };
}

function applyCors(req, res) {
  const h = corsHeaders(req);
  for (const [k, v] of Object.entries(h)) {
    res.setHeader(k, v);
  }
}

/**
 * Read JSON body (Vercel may pre-parse `req.body`; otherwise read the stream).
 */
async function readJsonBody(req) {
  if (req.body !== undefined && req.body !== null) {
    if (typeof req.body === "string") {
      try {
        return JSON.parse(req.body);
      } catch {
        return null;
      }
    }
    if (typeof req.body === "object" && !Buffer.isBuffer(req.body)) {
      return req.body;
    }
    if (Buffer.isBuffer(req.body)) {
      try {
        return JSON.parse(req.body.toString("utf8"));
      } catch {
        return null;
      }
    }
  }
  const chunks = [];
  for await (const chunk of req) {
    chunks.push(chunk);
  }
  const raw = Buffer.concat(chunks).toString("utf8");
  if (!raw.trim()) return {};
  try {
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

function json(res, status, payload) {
  res.statusCode = status;
  res.setHeader("Content-Type", "application/json; charset=utf-8");
  res.end(JSON.stringify(payload));
}

/**
 * Vercel Node.js serverless entry (default export).
 */
export default async function handler(req, res) {
  const rid = `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`;
  console.log("[api/contact] request", {
    rid,
    method: req.method,
    url: req.url,
    vercelId: process.env.VERCEL_ID,
    region: process.env.VERCEL_REGION,
  });

  applyCors(req, res);

  if (req.method === "OPTIONS") {
    console.log("[api/contact] OPTIONS preflight ok", { rid });
    res.statusCode = 204;
    return res.end();
  }

  if (req.method !== "POST") {
    console.warn("[api/contact] method not allowed", { rid, method: req.method });
    return json(res, 405, { ok: false, error: "Method not allowed." });
  }

  const { SMTP_USER, SMTP_PASS, CONTACT_TO, CONTACT_FROM } = getSmtpConfig();

  if (!SMTP_USER || !SMTP_PASS) {
    console.error("[api/contact] missing SMTP credentials", {
      rid,
      hasUser: Boolean(SMTP_USER),
      hasPass: Boolean(SMTP_PASS),
    });
    return json(res, 500, {
      ok: false,
      error:
        "Mail server is not configured. Set SMTP_USER and SMTP_PASS in Vercel project environment variables.",
    });
  }

  if (!CONTACT_TO || !CONTACT_FROM) {
    console.error("[api/contact] missing CONTACT_TO / CONTACT_FROM", { rid });
    return json(res, 500, {
      ok: false,
      error: "Mail routing is not configured. Set CONTACT_TO and CONTACT_FROM.",
    });
  }

  const body = await readJsonBody(req);
  if (body === null) {
    console.warn("[api/contact] invalid JSON", { rid });
    return json(res, 400, { ok: false, error: "Invalid JSON body." });
  }

  const { name, email, subject, message, phone } = body ?? {};
  const clean = {
    name: String(name || "").trim(),
    email: String(email || "").trim(),
    subject: String(subject || "").trim(),
    message: String(message || "").trim(),
    phone: String(phone || "").trim(),
  };

  console.log("[api/contact] parsed fields", {
    rid,
    hasName: Boolean(clean.name),
    hasEmail: Boolean(clean.email),
    hasSubject: Boolean(clean.subject),
    hasMessage: Boolean(clean.message),
    hasPhone: Boolean(clean.phone),
  });

  if (!clean.name || !clean.email || !clean.subject || !clean.message) {
    return json(res, 400, { ok: false, error: "All fields are required." });
  }

  if (!/^\S+@\S+\.\S+$/.test(clean.email)) {
    return json(res, 400, { ok: false, error: "Please enter a valid email." });
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  });

  const mailSubject = `Portfolio contact: ${clean.subject}`;
  const text = [
    "New contact form submission",
    "--------------------------",
    `Name: ${clean.name}`,
    `Email: ${clean.email}`,
    clean.phone ? `Phone: ${clean.phone}` : null,
    "",
    clean.message,
    "",
    `Sent at: ${new Date().toISOString()}`,
  ]
    .filter((x) => x != null)
    .join("\n");

  try {
    console.log("[api/contact] sending mail", { rid, to: CONTACT_TO });
    await transporter.sendMail({
      from: `${clean.name.replaceAll(/[\r\n<>"]/g, "").slice(0, 64)} <${CONTACT_FROM}>`,
      to: CONTACT_TO,
      replyTo: clean.email,
      subject: mailSubject,
      text,
    });
    console.log("[api/contact] send success", { rid });
    return json(res, 200, { ok: true });
  } catch (err) {
    console.error("[api/contact] send failed", {
      rid,
      message: err?.message,
      code: err?.code,
      command: err?.command,
      response: err?.response,
    });
    return json(res, 500, { ok: false, error: "Failed to send message." });
  }
}
