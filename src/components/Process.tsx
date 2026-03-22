import { motion } from 'framer-motion'

const steps = [
  {
    number: '01',
    title: 'Konzultace',
    description: 'Detailní rozhovor o vaších požadavcích, rozpočtu a časovém plánu.'
  },
  {
    number: '02',
    title: 'Návrh & plán',
    description: 'Vytvoříme návrh, rozpočet a podrobný harmonogram stavebních prací.'
  },
  {
    number: '03',
    title: 'Realizace',
    description: 'Provádíme stavební práce s maximální péčí a dodržováním kvality.'
  },
  {
    number: '04',
    title: 'Dokončení',
    description: 'Finální kontrola, vyřešení detailů a předání hotového projektu.'
  }
]

export default function Process() {
  return (
    <section className="py-20 md:py-32 bg-[#FAF7F2]">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: '-100px' }}
          className="text-center mb-16 md:mb-20"
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-6 h-0.5 bg-[#C4602A] rounded-full"></div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#C4602A]">
              Postup prací
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-[#1E1A16]">
            Jak probíhá naše práce
          </h2>
        </motion.div>

        {/* Steps grid */}
        <div className="relative grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-4">
          {/* Connection line (hidden on mobile) */}
          <div className="hidden md:block absolute top-16 left-0 right-0 h-0.5 bg-[#E8E0D2]" />

          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true, margin: '-100px' }}
              className="relative"
            >
              {/* Number circle */}
              <motion.div
                whileHover={{ backgroundColor: '#C4602A', color: '#FFFFFF' }}
                className="relative z-10 mx-auto mb-6 w-16 h-16 md:w-20 md:h-20 rounded-full bg-[#FFFDF9] border border-[#E8E0D2] flex items-center justify-center cursor-default transition-all"
              >
                <span className="text-2xl md:text-3xl font-black text-[#1E1A16]">
                  {step.number}
                </span>
              </motion.div>

              {/* Content */}
              <div className="text-center">
                <h3 className="font-bold text-lg md:text-xl text-[#1E1A16] mb-2">
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed text-[#5A5046]">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
