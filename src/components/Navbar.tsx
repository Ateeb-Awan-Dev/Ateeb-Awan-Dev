import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Services", path: "/#services-preview" },
  { label: "Projects", path: "/projects" },
  { label: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-white/72 via-slate-100/70 to-white/72 py-3 pt-[max(0.75rem,env(safe-area-inset-top,0px))] backdrop-blur-2xl border-b border-white/60 shadow-[0_10px_34px_rgba(15,23,42,0.16)] before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-white/90 before:to-transparent"
    >
      <div className="container mx-auto flex min-w-0 items-center justify-between gap-2 pl-[max(0.75rem,env(safe-area-inset-left,0px))] pr-[max(0.75rem,env(safe-area-inset-right,0px))] sm:px-4">
        <Link to="/" className="flex min-w-0 max-w-[min(100%,14rem)] items-center gap-0.5 sm:max-w-none">
          <img
            src="/ateeb-logo.png"
            alt="Ateeb Awan logo"
            className="h-9 w-auto shrink-0 object-contain sm:h-11 md:h-12"
          />
          <span className="truncate text-base font-bold font-heading sm:text-lg md:text-xl">
            <span className="gradient-text">AteebAwan</span>
            <span className="text-foreground">.dev</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-medium transition-colors duration-300 ${
                location.pathname === link.path ? "text-primary" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link to="/contact" className="glow-button px-5 py-2 rounded-lg text-sm font-semibold text-primary-foreground">
            Hire Me
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          type="button"
          className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-lg text-foreground touch-manipulation md:hidden"
          aria-expanded={isOpen}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="mx-3 mt-2 max-h-[min(70dvh,calc(100dvh-5.5rem))] overflow-y-auto overflow-x-hidden rounded-lg glass sm:mx-4 md:hidden"
          >
            <div className="flex flex-col gap-3 p-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`text-left text-sm py-2 px-3 rounded-md transition-colors ${
                    location.pathname === link.path ? "text-primary bg-muted" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link to="/contact" onClick={() => setIsOpen(false)} className="glow-button px-5 py-2.5 rounded-lg text-sm font-semibold text-primary-foreground text-center mt-2">
                Hire Me
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
