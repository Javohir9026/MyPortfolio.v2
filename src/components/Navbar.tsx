import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

interface NavbarProps {
  theme: "light" | "dark";
  onToggleTheme: () => void;
}

const NAV_LINKS = [
  { label: "Men haqimda", href: "#about" },
  { label: "Ko'nikmalarim", href: "#skills" },
  { label: "Loyihalarim", href: "#projects" },
  { label: "Tajribam", href: "#experience" },
  { label: "Bog'lanish", href: "#contact" },
];

export default function Navbar({ theme, onToggleTheme }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [mobileOpen, setMobileOpen] = useState(false);

  // 🔥 UNIVERSAL SCROLL FUNCTION (mobile + desktop stable)
  const scrollToSection = (href: string) => {
    const el = document.querySelector(href);
    if (!el) return;

    const yOffset = -80;
    const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({
      top: y,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      for (const link of NAV_LINKS) {
        const el = document.getElementById(link.href.replace("#", ""));
        if (!el) continue;

        const rect = el.getBoundingClientRect();

        if (rect.top <= 120 && rect.bottom >= 120) {
          setActiveSection(link.href);
          break;
        }
      }
    };

    
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    scrollToSection(href);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-cream-50/90 dark:bg-ink-900/90 backdrop-blur-md shadow-sm border-b border-cream-200 dark:border-ink-700"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="font-bold text-lg text-ink-900 dark:text-cream-100 tracking-tight hover:text-accent transition-colors"
        >
          AJ<span className="text-accent">.</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(link.href);
              }}
              className={`font-mono text-xs tracking-wide transition-colors duration-200 ${
                activeSection === link.href
                  ? "text-accent"
                  : "text-ink-500 dark:text-cream-200/60 hover:text-ink-900 dark:hover:text-cream-100"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-3">
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden w-9 h-9 flex items-center justify-center rounded-full
                       bg-cream-200 dark:bg-ink-700 text-ink-700 dark:text-cream-200"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-cream-50/95 dark:bg-ink-900/95 backdrop-blur-md border-b border-cream-200 dark:border-ink-700 overflow-hidden"
          >
            <nav className="flex flex-col px-6 py-4 gap-4">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className={`font-mono text-xs tracking-wide transition-colors duration-200 ${
                    activeSection === link.href
                      ? "text-accent"
                      : "text-ink-500 dark:text-cream-200/60 hover:text-ink-900 dark:hover:text-cream-100"
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
