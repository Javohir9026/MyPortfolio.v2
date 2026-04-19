import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Download, Coffee, MapPin, Briefcase } from "lucide-react";

const stats = [
  { value: "1.5+", label: "Yillik Tajriba" },
  { value: "10+", label: "Loyihalar" },
  { value: "12", label: "Ochiq Manba Repolar" },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="section-label">Men Haqimda</p>
          <div className="section-line" />

          <div className="grid md:grid-cols-5 gap-12 items-start">
            {/* Text content */}
            <div className="md:col-span-3 space-y-5">
              <h2 className="section-title">
                Foydalanuvchi uchun{" "}
                <span className="text-accent italic">qulay va yoqimli</span>{" "}
                interfeyslar yarataman.
              </h2>
              <p className="text-ink-500 dark:text-cream-200/60 leading-relaxed">
                Men Frontend dasturchiman. 1.5+ yillik tajribam bilan murakkab
                muammolarni sodda va intuitiv web ilovalarga aylantiraman.
                Detallar men uchun muhim — silliq foydalanuvchi tajribasi, hamma
                uchun qulay tuzilma va sifatli, o'qilishi yoqimli kod.
              </p>
              <p className="text-ink-500 dark:text-cream-200/60 leading-relaxed">
                Men pixel-perfect UI komponentlar yaratishdan tortib API
                integratsiyalari va real vaqtli foydalanuvchi interfeyslarini
                ishlab chiqishgacha bo'lgan tajribaga egaman. Hozirda to'liq
                stavkali ish va freelance loyihalar uchun tayyorman.
              </p>

              <div className="flex flex-wrap gap-4 pt-2">
                <div className="flex items-center gap-2 text-sm text-ink-500 dark:text-cream-200/50">
                  <MapPin size={14} className="text-accent" />
                  Uzbekistan, Xorazm
                </div>
                <div className="flex items-center gap-2 text-sm text-ink-500 dark:text-cream-200/50">
                  <Briefcase size={14} className="text-accent" />
                  Hamkorlikga Tayyorman
                </div>
                <div className="flex items-center gap-2 text-sm text-ink-500 dark:text-cream-200/50">
                  <Coffee size={14} className="text-accent" />
                  Espresso kuchi bilan
                </div>
              </div>

              <div className="pt-2">
                <a
                  href="/Amanbayev_Javohir_Resume.pdf"
                  className="btn-outline"
                  download
                >
                  <Download size={14} />
                  CV Yuklab olish
                </a>
              </div>
            </div>

            {/* Stats */}
            <div className="md:col-span-2 space-y-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
                  className="card p-6"
                >
                  <p className="text-4xl font-bold text-ink-900 dark:text-cream-100 mb-1">
                    {stat.value}
                  </p>
                  <p className="font-mono text-xs text-ink-400 dark:text-cream-200/40 tracking-wide uppercase">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
