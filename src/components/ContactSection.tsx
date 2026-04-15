import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, MapPin, GraduationCap, Briefcase, Send, Github, Linkedin } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";

const contactInfo = [
  { icon: Mail, label: "Email", value: "ateebawan80@gmail.com" },
  { icon: MapPin, label: "Location", value: "Pakistan" },
  { icon: GraduationCap, label: "Education", value: "BSCS Graduate" },
  { icon: Briefcase, label: "Available for", value: "Freelance, contract, and long-term roles" },
];

const ContactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "", phone: "" });
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [error, setError] = useState<string>("");
  const navigate = useNavigate();

  const validate = () => {
    const next: Record<string, string> = {};
    if (!form.name.trim()) next.name = "Name is required.";
    if (!form.email.trim()) next.email = "Email is required.";
    else if (!/^\S+@\S+\.\S+$/.test(form.email.trim())) next.email = "Please enter a valid email.";
    if (!form.subject.trim()) next.subject = "Subject is required.";
    if (!form.message.trim()) next.message = "Message is required.";
    setFieldErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus("sending");
    setError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = (await res.json().catch(() => ({}))) as { ok?: boolean; error?: string };

      if (!res.ok || !data.ok) {
        throw new Error(data.error || "Failed to send message.");
      }

      setStatus("sent");
      setForm({ name: "", email: "", subject: "", message: "", phone: "" });
      navigate("/thank-you");
    } catch (err) {
      setStatus("error");
      const isNetworkFailure =
        err instanceof TypeError ||
        (err instanceof Error &&
          (/failed to fetch/i.test(err.message) || /networkerror|load failed|fetch/i.test(err.message)));
      setError(
        isNetworkFailure
          ? "Could not reach the contact API (mail server). Use npm run dev (starts API + Vite) or run npm run dev:server in a second terminal while using npm run dev:client."
          : err instanceof Error
            ? err.message
            : "Failed to send message."
      );
    }
  };

  return (
    <section id="contact" className="relative z-10 section-padding-compact">
      <div className="container mx-auto min-w-0" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="mb-12 text-center md:mb-14"
        >
          <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.12em] text-primary">Contact</p>
          <h2 className="mb-3 font-heading text-2xl font-bold [text-wrap:balance] sm:text-3xl md:text-4xl">
            Let&apos;s talk about your <span className="gradient-text">next build</span>
          </h2>
          <p className="mx-auto max-w-xl text-sm text-muted-foreground">
            Share your scope, timeline, and goals. I will respond with a clear delivery path, realistic milestones, and a technical approach aligned with your product priorities.
          </p>
        </motion.div>

        <div className="grid gap-10 lg:grid-cols-2 lg:gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="space-y-4"
          >
            {contactInfo.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.1 }}
                className="glass-hover flex flex-col gap-3 rounded-xl p-4 sm:flex-row sm:items-center sm:gap-4 sm:p-5"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center self-start rounded-lg bg-primary/10 sm:self-center">
                  <item.icon className="text-primary" size={22} />
                </div>
                <div className="min-w-0">
                  <div className="text-sm text-muted-foreground">{item.label}</div>
                  <div className="break-words font-medium text-foreground">{item.value}</div>
                </div>
              </motion.div>
            ))}

            {/* Socials */}
            <div className="flex gap-4 pt-4">
              {[
                { icon: Github, href: "https://github.com" },
                { icon: Linkedin, href: "https://www.linkedin.com" },
                { icon: Mail, href: "mailto:ateebawan80@gmail.com" },
              ].map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="w-11 h-11 rounded-lg glass flex items-center justify-center text-muted-foreground hover:text-primary hover:glow-border transition-all duration-300"
                >
                  <s.icon size={20} />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            noValidate
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="glass-hover min-w-0 space-y-5 rounded-xl p-4 sm:p-6 md:p-8"
          >
            <div className="rounded-xl border border-primary/20 bg-primary/[0.06] px-4 py-3">
              <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-primary">What happens next</div>
              <div className="mt-1 text-sm text-muted-foreground">
                I review your requirements, send a practical action plan, and propose milestones with transparent delivery timelines.
              </div>
            </div>
            {status === "sent" && (
              <div className="rounded-xl border border-primary/25 bg-primary/10 px-4 py-3 text-sm text-primary">
                Message sent successfully. I will reply soon.
              </div>
            )}
            {status === "error" && (
              <div className="rounded-xl border border-rose-500/25 bg-rose-500/10 px-4 py-3 text-sm text-rose-700">
                {error || "Failed to send. Please try again."}
              </div>
            )}
            <div>
              <label className="text-sm text-muted-foreground mb-1.5 block">Name</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className={`w-full bg-muted/50 border rounded-lg px-4 py-3 text-foreground text-sm focus:outline-none transition-all ${
                  fieldErrors.name ? "border-rose-500/60 focus:border-rose-500/60 focus:ring-rose-500/20" : "border-border focus:border-primary/50 focus:ring-1 focus:ring-primary/30"
                }`}
              />
              {fieldErrors.name && <p className="mt-1 text-xs text-rose-600">{fieldErrors.name}</p>}
            </div>

            <div>
              <label className="text-sm text-muted-foreground mb-1.5 block">Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className={`w-full bg-muted/50 border rounded-lg px-4 py-3 text-foreground text-sm focus:outline-none transition-all ${
                  fieldErrors.email ? "border-rose-500/60 focus:border-rose-500/60 focus:ring-rose-500/20" : "border-border focus:border-primary/50 focus:ring-1 focus:ring-primary/30"
                }`}
              />
              {fieldErrors.email && <p className="mt-1 text-xs text-rose-600">{fieldErrors.email}</p>}
            </div>

            <div>
              <label className="text-sm text-muted-foreground mb-1.5 block">
                Phone <span className="text-xs text-muted-foreground/70">(optional)</span>
              </label>
              <PhoneInput
                defaultCountry="pk"
                value={form.phone}
                onChange={(phone) => setForm({ ...form, phone })}
                inputClassName="!w-full !bg-transparent !text-foreground"
                className="contact-phone w-full rounded-lg border border-border bg-muted/50 px-2 py-1.5 text-sm focus-within:border-primary/50 focus-within:ring-1 focus-within:ring-primary/30"
              />
            </div>

            <div>
              <label className="text-sm text-muted-foreground mb-1.5 block">Subject</label>
              <input
                type="text"
                name="subject"
                value={form.subject}
                onChange={(e) => setForm({ ...form, subject: e.target.value })}
                className={`w-full bg-muted/50 border rounded-lg px-4 py-3 text-foreground text-sm focus:outline-none transition-all ${
                  fieldErrors.subject ? "border-rose-500/60 focus:border-rose-500/60 focus:ring-rose-500/20" : "border-border focus:border-primary/50 focus:ring-1 focus:ring-primary/30"
                }`}
              />
              {fieldErrors.subject && <p className="mt-1 text-xs text-rose-600">{fieldErrors.subject}</p>}
            </div>

            <div>
              <label className="text-sm text-muted-foreground mb-1.5 block">Message</label>
              <textarea
                name="message"
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className={`w-full bg-muted/50 border rounded-lg px-4 py-3 text-foreground text-sm focus:outline-none transition-all resize-none ${
                  fieldErrors.message ? "border-rose-500/60 focus:border-rose-500/60 focus:ring-rose-500/20" : "border-border focus:border-primary/50 focus:ring-1 focus:ring-primary/30"
                }`}
              />
              {fieldErrors.message && <p className="mt-1 text-xs text-rose-600">{fieldErrors.message}</p>}
            </div>
            <button
              type="submit"
              disabled={status === "sending"}
              className="glow-button w-full py-3 rounded-lg font-semibold text-primary-foreground flex items-center justify-center gap-2 disabled:opacity-70"
            >
              <Send size={16} /> {status === "sending" ? "Sending..." : "Send Message"}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
