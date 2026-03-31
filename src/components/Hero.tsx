import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail, Send } from "lucide-react";

const socials = [
  { icon: Github, href: "https://github.com/Javohir9026", label: "GitHub" },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/javohir-amanbayev-87a677394/",
    label: "LinkedIn",
  },
  { icon: Send, href: "https://t.me/Javohir_Amanbayev", label: "Telegram" },
  { icon: Mail, href: "mailto:amanbayevjavohir94@gmail.com", label: "Email" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Subtle background grid */}
      <div
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.06]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #c8a96e 1px, transparent 1px),
            linear-gradient(to bottom, #c8a96e 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Accent blobs */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-accent/10 dark:bg-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3 pointer-events-none" />

      <div className="section-container relative z-10">
        {/* ── Two-column layout ── */}
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-16">
          {/* ── LEFT: Text content ── */}
          <motion.div
            className="flex-1 text-center lg:text-left px-4 sm:px-0"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="section-label mb-4 sm:mb-6">
              Ish va freelance loyihalarga tayyorman
            </p>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-ink-900 dark:text-cream-100 leading-tight tracking-tight mb-4 sm:mb-6">
              Javohir
              <br />
              <span className="text-accent">Amanbayev</span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-ink-500 dark:text-cream-200/60 font-mono max-w-md mx-auto lg:mx-0 mb-8 sm:mb-10 leading-relaxed">
              Zamonaviy, samarali va foydalanuvchi uchun qulay web loyihalarni
              yaratishga ixtisoslashgan Frontend dasturchi.
            </p>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 mb-10 sm:mb-12">
              <a href="#projects" className="btn-primary text-sm sm:text-base">
                Loyihalar bilan tanishish
                <ArrowDown size={14} />
              </a>
              <a href="#contact" className="btn-outline text-sm sm:text-base">
                Bog'lanish
              </a>
            </div>

            {/* Socials */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center rounded-full
                   text-ink-500 dark:text-cream-200/50
                   hover:text-ink-900 dark:hover:text-cream-100
                   hover:bg-cream-200 dark:hover:bg-ink-700
                   transition-all duration-200"
                >
                  <Icon size={14} />
                </a>
              ))}
              <span className="hidden sm:block w-px h-4 bg-ink-200 dark:bg-ink-600 mx-1" />
              <span className="font-mono text-[10px] sm:text-xs text-ink-400 dark:text-cream-200/40 tracking-wider break-all sm:break-normal text-center lg:text-left">
                +998 (97) 606-90-26
              </span>
            </div>
          </motion.div>
          {/* ── RIGHT: Profile image ── */}
          <motion.div
            className="shrink-0 flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.7,
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <div className="relative">
              <motion.div
                className="absolute rounded-full border border-dashed border-accent/30"
                style={{ inset: "-10px" }}
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              />

              <div className="absolute inset-0 rounded-full bg-accent/15 blur-2xl scale-110 pointer-events-none" />

              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.35 }}
                className="relative w-40 h-40 sm:w-52 sm:h-52 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-full"
              >
                <div className="absolute inset-0 rounded-full ring-2 ring-accent/60 ring-offset-4 ring-offset-cream-50 dark:ring-offset-ink-900 z-10" />

                <img
                  src="/profile.jpg"
                  alt="Javohir Amanbayev – Frontend Developer"
                  className="w-full h-full rounded-full object-cover object-top"
                />
              </motion.div>

              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="absolute z-10 -bottom-3 left-1/2 -translate-x-1/2 
                 px-3 py-1 rounded-full text-[10px] sm:text-xs font-mono
                 bg-cream-50 dark:bg-ink-800
                 border border-cream-200 dark:border-ink-600
                 shadow-md whitespace-nowrap flex items-center gap-1.5"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-ink-600 dark:text-cream-200/70">
                  Hamkorlikga Tayyorman
                </span>
              </motion.div>
            </div>
          </motion.div>{" "}
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
      >
        <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-ink-400 dark:text-cream-200/30">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-8 bg-gradient-to-b from-accent/60 to-transparent"
        />
      </motion.div>
    </section>
  );
}
