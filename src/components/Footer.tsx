import { Github, Linkedin, Send, Mail, Phone } from "lucide-react";

const socials = [
  { icon: Github, href: "https://github.com/Javohir9026", label: "GitHub" },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/javohir-amanbayev-87a677394/",
    label: "LinkedIn",
  },
  { icon: Send, href: "https://t.me/Javohir_Amanbayev", label: "Telegram" },
  { icon: Mail, href: "mailto:amanbayevjavohir94@gmail.com", label: "Email" },
  { icon: Phone, href: "tel:+998976069026", label: "Phone" },
];

const navLinks = [
  { label: "Men haqimda", href: "#about" },
  { label: "Ko'nikmalarim", href: "#skills" },
  { label: "Loyihalarim", href: "#projects" },
  { label: "Tajribam", href: "#experience" },
  { label: "Bog'lanish", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-cream-200 dark:border-ink-700 bg-cream-50 dark:bg-ink-900">
      <div className="max-w-5xl mx-auto px-6 md:px-10 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Brand */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="font-bold text-xl text-ink-900 dark:text-cream-100 hover:text-accent transition-colors"
            >
              AJ<span className="text-accent">.</span>
            </a>
            <p className="font-mono text-xs text-ink-400 dark:text-cream-200/40 mt-1">
              Frontend Dasturchi
            </p>
          </div>

          {/* Nav links */}
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .querySelector(link.href)
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="font-mono text-xs text-ink-400 dark:text-cream-200/40
                           hover:text-ink-900 dark:hover:text-cream-100 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Socials */}
          <div className="flex items-center gap-3">
            {socials.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-8 h-8 flex items-center justify-center rounded-full
                           text-ink-400 dark:text-cream-200/40
                           hover:text-ink-900 dark:hover:text-cream-100
                           hover:bg-cream-200 dark:hover:bg-ink-700
                           transition-all duration-200"
              >
                <Icon size={15} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
