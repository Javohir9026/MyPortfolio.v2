import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Send, Github, Linkedin, Mail, Phone } from "lucide-react";
import { UzPhoneInput } from "./UzphoneInput";

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

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const [form, setForm] = useState({ name: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const TOKEN = "8301059320:AAESNKdSwxs6i3bOOFeWhv5CNuzjdpGuzys"; // <-- shu yerga qo'yasan
    const CHAT_ID = "5653608874"; // <-- shu yerga qo'yasan

    const text = `
<b>📩 Yangi murojat</b>

<b>👤 Ism:</b> ${form.name}
<b>📞 Telefon Raqam:</b> ${form.phone}
<b>💬 Xabar:</b> ${form.message}
`;

    try {
      await fetch(`https://api.telegram.org/bot${TOKEN}/sendMessage`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: CHAT_ID,
          text,
          parse_mode: "HTML",
        }),
      });

      setSubmitted(true);
      setForm({ name: "", phone: "", message: "" });
    } catch (error) {
      alert("Xatolik yuz berdi 😢");
    } finally {
      setLoading(false);
    }
  };

  const inputClass =
    "w-full px-4 py-3 rounded-xl text-sm bg-cream-100 dark:bg-ink-700 " +
    "border border-cream-200 dark:border-ink-600 " +
    "text-ink-800 dark:text-cream-100 placeholder-ink-400 dark:placeholder-ink-500 " +
    "focus:outline-none focus:ring-2 focus:ring-accent/40 transition-all duration-200";

  return (
    <section id="contact" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="section-label">Men bilan Bog'laning</p>
          <div className="section-line" />
          <h2 className="section-title mb-4">Aloqaga chiqing</h2>
          <p className="text-ink-500 dark:text-cream-200/60 mb-12 max-w-md leading-relaxed">
            Yangi loyiha, savol yoki shunchaki suhbat uchun — bemalol
            bog'laning. Har doim javob berishga tayyorman.
          </p>

          <div className="grid md:grid-cols-5 gap-12">
            {/* Form */}
            <div className="md:col-span-3">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="card p-10 text-center"
                >
                  <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-4">
                    <Send size={20} className="text-accent" />
                  </div>
                  <h3 className="font-bold text-ink-900 dark:text-cream-100 mb-2">
                    Xabaringiz Yuborildi
                  </h3>
                  <p className="text-sm text-ink-500 dark:text-cream-200/60">
                    Bog'langaningiz uchun rahmat — 24 soat ichida sizga javob
                    beraman.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-mono text-xs tracking-wide text-ink-400 dark:text-cream-200/40 mb-2 uppercase">
                        Ismingiz
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Javohir Amanbayev"
                        required
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label className="block font-mono text-xs tracking-wide text-ink-400 dark:text-cream-200/40 mb-2 uppercase">
                        Emailingiz
                      </label>
                      <UzPhoneInput
                        name="phone"
                        value={form.phone}
                        onChange={(val) =>
                          setForm((prev) => ({ ...prev, phone: val }))
                        }
                        className={inputClass}
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block font-mono text-xs tracking-wide text-ink-400 dark:text-cream-200/40 mb-2 uppercase">
                      Xabaringiz
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Loyihangiz haqida yozing…"
                      required
                      rows={5}
                      className={inputClass + " resize-none"}
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-primary disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {loading ? (
                      <span className="flex items-center gap-2">
                        <svg
                          className="animate-spin w-3.5 h-3.5"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 100 16v-4l-3 3 3 3v-4a8 8 0 01-8-8z"
                          />
                        </svg>
                        Yuborilmoqda...
                      </span>
                    ) : (
                      <>
                        Yuborish
                        <Send size={14} />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* Social sidebar */}
            <div className="md:col-span-2 space-y-5">
              <div className="card p-6">
                <h3 className="font-mono text-xs tracking-widest uppercase text-accent mb-5">
                  Bo'glanish
                </h3>
                <div className="space-y-3">
                  {socials.map(({ icon: Icon, href, label }) => (
                    <a
                      key={label}
                      href={href}
                      target={label !== "Email" ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-3 rounded-xl
                                 text-ink-600 dark:text-cream-200/60
                                 hover:bg-cream-100 dark:hover:bg-ink-700
                                 hover:text-ink-900 dark:hover:text-cream-100
                                 transition-all duration-200 group"
                    >
                      <Icon size={16} className="text-accent shrink-0" />
                      <span className="text-sm font-medium">{label}</span>
                    </a>
                  ))}
                </div>
              </div>

              <div className="card p-6">
                <h3 className="font-mono text-xs tracking-widest uppercase text-accent mb-3">
                  Javob vaqti
                </h3>
                <p className="text-sm text-ink-500 dark:text-cream-200/60 leading-relaxed">
                  Odatda{" "}
                  <span className="text-ink-900 dark:text-cream-100 font-medium">
                    24 soat ichida
                  </span>{" "}
                  javob beraman. Shoshilinch murojaatlar uchun Qo'ngiroq eng
                  tezkor usul.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
