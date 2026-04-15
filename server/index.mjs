import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.join(__dirname, "..", ".env.local") });

const PORT = Number(process.env.PORT || 5050);

const SMTP_USER = process.env.SMTP_USER;
const SMTP_PASS = process.env.SMTP_PASS;
const CONTACT_TO = process.env.CONTACT_TO || SMTP_USER;
const CONTACT_FROM = process.env.CONTACT_FROM || SMTP_USER;

if (!SMTP_USER || !SMTP_PASS) {
  // eslint-disable-next-line no-console
  console.warn(
    "[mail] Missing SMTP_USER/SMTP_PASS. Add them to .env.local (see .env.example)."
  );
}

const app = express();
app.use(cors());
app.use(express.json({ limit: "200kb" }));

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: SMTP_USER && SMTP_PASS ? { user: SMTP_USER, pass: SMTP_PASS } : undefined,
});

app.get("/api/health", (_req, res) => {
  res.json({ ok: true });
});

app.post("/api/contact", async (req, res) => {
  try {
    const { name, email, subject, message, phone } = req.body ?? {};

    const clean = {
      name: String(name || "").trim(),
      email: String(email || "").trim(),
      subject: String(subject || "").trim(),
      message: String(message || "").trim(),
      phone: String(phone || "").trim(),
    };

    if (!SMTP_USER || !SMTP_PASS) {
      return res.status(500).json({
        ok: false,
        error: "Mail server is not configured. Missing SMTP credentials.",
      });
    }

    if (!clean.name || !clean.email || !clean.subject || !clean.message) {
      return res.status(400).json({ ok: false, error: "All fields are required." });
    }

    // very lightweight email validation
    if (!/^\S+@\S+\.\S+$/.test(clean.email)) {
      return res.status(400).json({ ok: false, error: "Please enter a valid email." });
    }

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

    await transporter.sendMail({
      from: `${clean.name.replaceAll(/[\r\n<>"]/g, "").slice(0, 64)} <${CONTACT_FROM}>`,
      to: CONTACT_TO,
      replyTo: clean.email,
      subject: mailSubject,
      text,
    });

    return res.json({ ok: true });
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error("[mail] send failed", err);
    return res.status(500).json({ ok: false, error: "Failed to send message." });
  }
});

const server = app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`[server] listening on http://localhost:${PORT}`);
});

server.on("error", (err) => {
  // eslint-disable-next-line no-console
  console.error("[server] listen error", err);
});

// Keep-alive for environments that may auto-exit idle processes.
process.stdin.resume();
setInterval(() => {}, 1 << 30);

