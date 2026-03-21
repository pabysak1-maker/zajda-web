import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { services } from '@/data/services'
import ServiceModal from './ServiceModal'

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
    <section id="sluzby" className="relative py-20 md:py-28">
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
            Naše <span className="text-[#3B82F6]">služby</span>
          </h2>
          <p className="mx-auto max-w-2xl text-[#94A3B8]">
            Nabízíme široké spektrum stavebních a rekonstrukčních prací.
            Každý projekt realizujeme s maximální precizností.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {services.map((service) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.id}
                variants={cardVariants}
                onClick={() => openModal(service.title)}
                className="group cursor-pointer rounded-2xl border border-[#334155] bg-[#1E293B] p-6 transition-all duration-300 hover:scale-[1.02] hover:border-[#1D4ED8]/50 hover:shadow-[0_0_30px_-5px_rgba(29,78,216,0.3)]"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#1D4ED8]/10">
                  <Icon className="h-6 w-6 text-[#3B82F6]" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-[#F8FAFC]">
                  {service.title}
                </h3>
                <p className="mb-4 text-sm leading-relaxed text-[#94A3B8]">
                  {service.description}
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={(e) => {
                    e.stopPropagation()
                    openModal(service.title)
                  }}
                  className="border-[#334155] text-[#3B82F6] hover:border-[#3B82F6] hover:bg-[#1D4ED8]/10 hover:text-[#3B82F6]"
                >
                  Poptat službu
                </Button>
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
