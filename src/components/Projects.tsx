import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Github, ExternalLink } from 'lucide-react'
import { projects } from '../data/projects'

export default function Projects() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [showAll, setShowAll] = useState(false)

  const displayed = showAll ? projects : projects.filter(p => p.featured)

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
            {displayed.map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="card p-6 flex flex-col group"
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="w-9 h-9 rounded-xl bg-cream-200 dark:bg-ink-700 flex items-center justify-center text-accent font-bold font-mono text-sm">
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <div className="flex items-center gap-2">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="GitHub"
                      className="w-8 h-8 flex items-center justify-center rounded-full text-ink-400 dark:text-cream-200/40 hover:text-ink-900 dark:hover:text-cream-100 hover:bg-cream-200 dark:hover:bg-ink-600 transition-all duration-200"
                    >
                      <Github size={15} />
                    </a>
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

                {/* Content */}
                <h3 className="font-bold text-ink-900 dark:text-cream-100 mb-2 group-hover:text-accent transition-colors duration-200">
                  {project.title}
                </h3>
                <p className="text-sm text-ink-500 dark:text-cream-200/50 leading-relaxed mb-5 flex-1">
                  {project.description}
                </p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-1.5 mt-auto">
                  {project.tech.map(t => (
                    <span key={t} className="tag text-[11px]">
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Show more / less toggle */}
          <div className="mt-10 text-center">
            <button
              onClick={() => setShowAll(prev => !prev)}
              className="btn-outline"
            >
              {showAll ? "Kamroq ko'rsatish" : `Hammasini ko'rsatish ${projects.length} loyihalar`}
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
