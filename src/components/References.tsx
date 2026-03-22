import { useState } from 'react'
import { motion } from 'framer-motion'
import { projects } from '@/data/projects'
import type { Project } from '@/data/projects'
import ReferenceLightbox from './ReferenceLightbox'

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function References() {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  const openLightbox = (project: Project) => {
    setSelectedProject(project)
    setLightboxOpen(true)
  }

  return (
    <section id="reference" className="relative py-20 md:py-32 bg-[#FAF7F2]">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          {/* Section tag */}
          <div className="inline-flex items-center gap-2 mb-6">
            <div className="w-6 h-0.5 bg-[#C4602A] rounded-full"></div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#C4602A]">
              Naše reference
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-[#1E1A16]">
            Realizované projekty
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              onClick={() => openLightbox(project)}
              className="group cursor-pointer overflow-hidden rounded-3xl border border-[#E8E0D2] bg-[#FFFDF9] transition-all duration-300 hover:border-[#C4602A] hover:-translate-y-1 hover:shadow-[0_20px_48px_rgba(196,96,42,0.12)]"
            >
              <div className="relative overflow-hidden aspect-[3/2]">
                <img
                  src={project.cover.url}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1E1A16]/40 via-transparent to-transparent" />
              </div>
              <div className="p-6">
                <div className="mb-3 flex items-center gap-2 flex-wrap">
                  <span className="inline-flex items-center gap-2 rounded-full bg-[#F0D5C4] px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#8B3F18]">
                    {project.type}
                  </span>
                  <span className="text-xs font-bold uppercase tracking-widest text-[#9C9080]">
                    {project.year}
                  </span>
                </div>
                <h3 className="mb-2 text-lg font-bold text-[#1E1A16] group-hover:text-[#C4602A] transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm leading-relaxed text-[#5A5046]">
                  {project.description}
                </p>
                {project.scope && (
                  <p className="text-xs text-[#9C9080] mt-3">
                    Rozsah: {project.scope}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <ReferenceLightbox
        open={lightboxOpen}
        onOpenChange={setLightboxOpen}
        project={selectedProject}
      />
    </section>
  )
}
