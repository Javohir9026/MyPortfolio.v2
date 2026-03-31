import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { skillCategories } from "../data/skills";

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="skills" ref={ref} className="bg-cream-100 dark:bg-ink-800/40">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="section-label">Ishlaydigan texnologiyalarim</p>
          <div className="section-line" />
          <h2 className="section-title mb-12">Ko'nikmalar va Texnologiyalar</h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {skillCategories.map((category, i) => (
              <motion.div
                key={category.label}
                initial={{ opacity: 0, y: 16 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="card p-6"
              >
                <h3 className="font-mono text-xs tracking-widest uppercase text-accent mb-4">
                  {category.label}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span key={skill} className="tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
