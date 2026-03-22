import { useState } from 'react'
import { motion } from 'framer-motion'
import { services } from '@/data/services'
import ServiceModal from './ServiceModal'
import { ArrowRight } from 'lucide-react'

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function Services() {
  const [modalOpen, setModalOpen] = useState(false)
  const [selectedService, setSelectedService] = useState('')

  const openModal = (title: string) => {
    setSelectedService(title)
    setModalOpen(true)
  }

  return (
    <section id="sluzby" className="relative py-20 md:py-32 bg-[#FAF7F2]">
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
              Naše služby
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-[#1E1A16]">
            Kompletní řešení stavebních prací
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {services.map((service, idx) => {
            const Icon = service.icon
            const serviceNumber = String(idx + 1).padStart(2, '0')

            return (
              <motion.div
                key={service.id}
                variants={cardVariants}
                onClick={() => openModal(service.title)}
                className="group cursor-pointer rounded-3xl border border-[#E8E0D2] bg-[#FFFDF9] p-8 transition-all duration-300 hover:bg-[#C4602A] hover:border-[#C4602A] hover:-translate-y-1 hover:shadow-[0_20px_48px_rgba(196,96,42,0.12)]"
              >
                <div className="text-4xl font-black text-[#E8E0D2] group-hover:text-[#F0D5C4] mb-4">
                  {serviceNumber}
                </div>

                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F0D5C4] group-hover:bg-white/20 transition-colors">
                  <Icon className="h-6 w-6 text-[#C4602A] group-hover:text-white" />
                </div>

                <h3 className="mb-3 text-lg font-bold text-[#1E1A16] group-hover:text-white transition-colors">
                  {service.title}
                </h3>

                <p className="mb-6 text-sm leading-relaxed text-[#5A5046] group-hover:text-white/90 transition-colors">
                  {service.description}
                </p>

                <div className="flex items-center text-[#C4602A] group-hover:text-white font-bold text-sm transition-colors">
                  Zjistit více
                  <ArrowRight size={16} className="ml-2" />
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>

      <ServiceModal
        open={modalOpen}
        onOpenChange={setModalOpen}
        serviceName={selectedService}
      />
    </section>
  )
}
