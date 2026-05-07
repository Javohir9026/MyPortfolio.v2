import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { projects } from "../data/projects";

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [showAll, setShowAll] = useState(false);

  const displayed = showAll ? projects : projects.slice(0, 3);

  return (
    <section id="projects" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="section-label">Qilgan Ishlarim</p>
          <div className="section-line" />
          <h2 className="section-title mb-12">Loyihalarim</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {displayed.map((project, i) => {
              const isGithubPrivate = project.githubAccess === "private";

              return (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="card overflow-hidden flex flex-col group"
                >
                  {project.image && (
                    <div className="relative h-44 overflow-hidden bg-ink-900">
                      <img
                        src={project.image}
                        alt=""
                        aria-hidden="true"
                        draggable={false}
                        className="h-full w-full object-cover pointer-events-none select-none transition-transform duration-500 ease-out group-hover:scale-110"
                      />
                      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white via-white/70 to-transparent dark:from-ink-800 dark:via-ink-800/75" />
                      <div className="absolute left-4 top-4 w-9 h-9 rounded-xl bg-white/90 dark:bg-ink-900/80 backdrop-blur flex items-center justify-center text-accent font-bold font-mono text-sm">
                        {String(i + 1).padStart(2, "0")}
                      </div>
                      <span
                        className={`absolute right-4 top-4 rounded-full px-3 py-1 text-[11px] font-mono font-semibold backdrop-blur ${
                          project.InProgress
                            ? "bg-amber-100/90 text-amber-800 dark:bg-amber-400/15 dark:text-amber-200"
                            : "bg-emerald-100/90 text-emerald-800 dark:bg-emerald-700/30 dark:text-emerald-200"
                        }`}
                      >
                        {project.InProgress ? "Jarayonda" : "Faol"}
                      </span>
                    </div>
                  )}

                  <div className="p-6 pt-4 flex flex-1 flex-col">
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <h3 className="font-bold text-ink-900 dark:text-cream-100 group-hover:text-accent transition-colors duration-200">
                        {project.title}
                      </h3>
                      <div className="flex shrink-0 items-center gap-2">
                        {isGithubPrivate ? (
                          <span
                            aria-label="GitHub private"
                            title="GitHub repository private"
                            className="w-8 h-8 flex items-center justify-center rounded-full text-ink-300 dark:text-cream-200/25 bg-cream-100 dark:bg-ink-700/50 cursor-not-allowed"
                          >
                            <Github size={15} />
                          </span>
                        ) : (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="GitHub"
                            className="w-8 h-8 flex items-center justify-center rounded-full text-ink-400 dark:text-cream-200/40 hover:text-ink-900 dark:hover:text-cream-100 hover:bg-cream-200 dark:hover:bg-ink-600 transition-all duration-200"
                          >
                            <Github size={15} />
                          </a>
                        )}
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="Live demo"
                          className="w-8 h-8 flex items-center justify-center rounded-full text-ink-400 dark:text-cream-200/40 hover:text-ink-900 dark:hover:text-cream-100 hover:bg-cream-200 dark:hover:bg-ink-600 transition-all duration-200"
                        >
                          <ExternalLink size={15} />
                        </a>
                      </div>
                    </div>

                    <p className="text-sm text-ink-500 dark:text-cream-200/50 leading-relaxed mb-5 flex-1">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5 mt-auto">
                      {project.tech.map((t) => (
                        <span key={t} className="tag text-[11px]">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <div className="mt-10 text-center">
            <button
              onClick={() => setShowAll((prev) => !prev)}
              className="btn-outline"
            >
              {showAll
                ? "Kamroq ko'rsatish"
                : `Hammasini ko'rsatish ${projects.length} loyihalar`}
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
