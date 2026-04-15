import { Link } from "react-router-dom";
import { Github, Instagram, Linkedin, Mail } from "lucide-react";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About Me", path: "/about" },
  { label: "Services", path: "/#services-preview" },
  { label: "Projects", path: "/projects" },
  { label: "Contact", path: "/contact" },
];

const Footer = () => {
  return (
    <footer className="relative z-10 border-t border-white/10 bg-[#071634] py-10 pb-[max(2.5rem,env(safe-area-inset-bottom,0px))] pl-[max(0.75rem,env(safe-area-inset-left,0px))] pr-[max(0.75rem,env(safe-area-inset-right,0px))] sm:px-4 md:py-12 md:pb-12">
      <div className="mx-auto w-full min-w-0 max-w-6xl">
        <div className="grid gap-10 text-center sm:text-left md:grid-cols-3 md:text-left">
          <div>
            <Link to="/" className="inline-flex items-center justify-center gap-0.5 sm:justify-start">
              <img src="/ateeb-logo.png" alt="Ateeb Awan logo" className="h-11 w-auto object-contain md:h-12" />
              <span className="font-heading text-base font-medium md:text-lg">
                <span className="gradient-text">AteebAwan</span>
                <span className="text-white">.dev</span>
              </span>
            </Link>
            <p className="mt-4 max-w-sm text-sm font-normal leading-6 text-white/65">Full-Stack MERN + Next.js Developer | Product-Focused Engineering Partner</p>
            <p className="mt-3 max-w-sm text-sm font-normal leading-6 text-white/70">
              I build high-performance web products with clean architecture, clear delivery communication, and production-ready full-stack execution.
            </p>
          </div>

          <div className="flex flex-col items-center sm:items-start">
            <h3 className="text-lg font-medium text-white/90">Quick Links</h3>
            <div className="mt-3 flex flex-col gap-1.5">
              {navLinks.map((link) => (
                <Link key={link.path} to={link.path} className="text-sm font-normal text-white/70 transition hover:text-white">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="flex flex-col items-center sm:items-start">
            <h3 className="text-lg font-medium text-white/90">Get In Touch</h3>
            <div className="mt-3 space-y-1.5">
              <a href="mailto:ateebawan80@gmail.com" className="block break-all text-sm font-normal text-white/70 transition hover:text-white sm:break-words">
                ateebawan80@gmail.com
              </a>
              <a href="https://wa.me/923129619490" className="block text-sm font-normal text-white/70 transition hover:text-white">
                WhatsApp: +92 312 9619490
              </a>
            </div>
            <div className="mt-4 flex items-center justify-center gap-4 text-white/65 sm:justify-start">
              <a href="mailto:ateebawan80@gmail.com" aria-label="Email" className="transition hover:text-white"><Mail size={18} /></a>
              <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="transition hover:text-white"><Linkedin size={18} /></a>
              <a href="https://www.instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram" className="transition hover:text-white"><Instagram size={18} /></a>
              <a href="https://github.com" target="_blank" rel="noreferrer" aria-label="GitHub" className="transition hover:text-white"><Github size={18} /></a>
            </div>
          </div>
        </div>

        <div className="mt-8 h-px w-full bg-white/15" />
        <p className="mt-6 text-center text-sm font-normal text-white/70">
          © {new Date().getFullYear()} Muhammad Ateeb Awan. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
