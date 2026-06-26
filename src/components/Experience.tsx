import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

interface TimelineItem {
  type: "work" | "education";
  title: string;
  org: string;
  period: string;
  location: string;
  bullets: string[];
}

const timeline: TimelineItem[] = [
  {
    type: "education",
    title: "Najot Ta'lim, Frontend Development Bootcamp",
    org: "Frontend Group",
    period: "2024 – 2025",
    location: "Uzbekistan, Xorazm",
    bullets: [
      "2024 yilda avval Foundatuon XN1 guruhida o'qidim va u yerda Kompyuter Savodxonligi, Dasturlash Tushunchasini O'rgandim.",
      "Foundationni tugatgach, Frontend XN1 guruhiga o'tdim va u yerda React, Next.js, TypeScript, va zamonaviy frontend texnologiyalarini chuqur o'rgandim.",
      "Frontend XN1 guruhini tugatgach, amaliyot bosqichiga o'tdim va real frontend loyihalarida ishlash orqali tajribamni oshirdim .",
      "2025 yil To'liq kursni muvaffaqiyatli tamomladim va sertifikat oldim, bu esa mening frontend sohasidagi bilimlarim va ko'nikmalarimni tasdiqlaydi.",
    ],
  },
  {
    type: "work",
    title: "Najot Ta'lim - START",
    org: "Remote Team",
    period: "2025 - 2026",
    location: "Remote",
    bullets: [
      "Najot ta'lim start loyihasiga topshirdim va 200 ta dasturchi orasidan tanlab olinib, 3 oylik intensiv amaliyot bosqichida qatnashdim.",
      "3 oy davomida real loyihada qatnashdim va frontend texnologiyalarini amalda qo'llash orqali tajribamni oshirdim.",
      "Yakunida Nasiya Savdo app uchun admin panel va landing page yaratdim, bu loyiha orqali React, Next.js, va TypeScript bo'yicha chuqur bilimlarga ega bo'ldim.",
    ],
  },
  {
    type: "work",
    title: "EduCationHub",
    org: "freelance",
    period: "2026 Yanvar – 2026 Iyul",
    location: "Uzbekistan, Xorazm",
    bullets: [
      "2026 yil boshidan yangi Start-up EducationHubda Junior Web Developer sifatida ishlay boshladim.",
      "Bu start-up ta'lim sohasida innovatsion yechimlar yaratishga qaratilgan va menning vazifam veb-sayt va interaktiv ta'lim platformasini ishlab chiqish va qo'llab-quvvatlashdir.",
      "Hozirda Bu loyihani Yakunlash bosqichida bo'lib, foydalanuvchilarga qulay va samarali ta'lim tajribasini taqdim etishga intilmoqdaman.",
    ],
  },
  {
    type: "work",
    title: "ProBest Soft",
    org: "Freelance",
    period: "2026 May – Hozirgi vaqtda",
    location: "Uzbekistan, Xorazm",
    bullets: [
      "2026 yil May oyida ProBest Softda Freelance sifatida ishlay boshladim.",
      "Bu kompaniyada menning vazifam veb-sayt va interaktiv dasturlar yaratish va qo'llab-quvvatlashdir.",
      "Hozirda Bu loyihani Yakunlash bosqichida bo'lib, foydalanuvchilarga qulay va samarali ta'lim tajribasini taqdim etishga intilmoqdaman.",
    ],
  },
];

const SHOW_COUNT = 3;

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [showAll, setShowAll] = useState(false);

  const displayed = showAll ? timeline : timeline.slice(0, SHOW_COUNT);

  return (
    <section
      id="experience"
      ref={ref}
      className="bg-cream-100 dark:bg-ink-800/40"
    >
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="section-label">Faoliyatim davomida</p>
          <div className="section-line" />
          <h2 className="section-title mb-14">Tajriba va ta'lim</h2>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-[7px] md:left-[11px] top-2 bottom-2 w-px bg-cream-200 dark:bg-ink-600" />

            <div className="space-y-10">
              {displayed.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -16 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="relative pl-8 md:pl-12"
                >
                  {/* Dot */}
                  <div
                    className={`absolute left-0 top-1.5 w-4 h-4 rounded-full border-2 flex items-center justify-center
                      ${
                        item.type === "work"
                          ? "border-accent bg-cream-50 dark:bg-ink-900"
                          : "border-ink-400 dark:border-ink-500 bg-cream-50 dark:bg-ink-900"
                      }`}
                  >
                    <div
                      className={`w-1.5 h-1.5 rounded-full ${
                        item.type === "work"
                          ? "bg-accent"
                          : "bg-ink-400 dark:bg-ink-500"
                      }`}
                    />
                  </div>

                  {/* Content */}
                  <div className="card p-6">
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                      <div>
                        <h3 className="font-bold text-ink-900 dark:text-cream-100">
                          {item.title}
                        </h3>
                        <p className="text-accent font-medium text-sm mt-0.5">
                          {item.org}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="font-mono text-xs text-ink-400 dark:text-cream-200/40">
                          {item.period}
                        </p>
                        <p className="font-mono text-xs text-ink-400 dark:text-cream-200/40 mt-0.5">
                          {item.location}
                        </p>
                      </div>
                    </div>

                    <ul className="space-y-2">
                      {item.bullets.map((bullet, j) => (
                        <li
                          key={j}
                          className="flex gap-3 text-sm text-ink-500 dark:text-cream-200/60 leading-relaxed"
                        >
                          <span className="text-accent mt-1.5 shrink-0">·</span>
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {timeline.length > SHOW_COUNT && (
            <div className="mt-10 text-center">
              <button
                onClick={() => setShowAll((prev) => !prev)}
                className="btn-outline"
              >
                
                {showAll
                  ? "Kamroq ko'rsatish"
                  : `Hammasini ko'rsatish (${timeline.length} ta)`}
              </button>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
