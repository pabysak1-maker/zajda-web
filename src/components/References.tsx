import { useState } from 'react'
import { motion } from 'framer-motion'
import { Badge } from '@/components/ui/badge'
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
    <section id="reference" className="relative py-20 md:py-28">
      {/* Gradient divider top */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#1D4ED8]/50 to-transparent" />

      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold text-[#F8FAFC] md:text-4xl">
            Naše <span className="text-[#3B82F6]">reference</span>
          </h2>
          <p className="mx-auto max-w-2xl text-[#94A3B8]">
            Přesvědčte se o kvalitě naší práce. Vybrané projekty z posledních let.
          </p>
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
              className="group cursor-pointer overflow-hidden rounded-2xl border border-[#334155] bg-[#1E293B] transition-all duration-300 hover:scale-[1.02] hover:border-[#1D4ED8]/50 hover:shadow-[0_0_30px_-5px_rgba(29,78,216,0.3)]"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.cover.url}
                  alt={project.title}
                  className="aspect-[3/2] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1E293B] via-transparent to-transparent" />
              </div>
              <div className="p-5">
                <div className="mb-2 flex items-center gap-2">
                  <Badge className="bg-[#1D4ED8]/20 text-[#3B82F6]">
                    {project.type}
                  </Badge>
                  <span className="text-xs text-[#94A3B8]">{project.year}</span>
                </div>
                <h3 className="mb-1 text-lg font-semibold text-[#F8FAFC]">
                  {project.title}
                </h3>
                <p className="text-sm text-[#94A3B8]">{project.description}</p>
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
