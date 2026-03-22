import { motion } from 'framer-motion'
import { CheckCircle, Lightbulb, Award } from 'lucide-react'

const benefits = [
  {
    icon: CheckCircle,
    title: 'Kvalita bez kompromisů',
    description: 'Každý projekt provedeme s maximální péčí a přesností. Používáme ověřené materiály a moderní techniky.'
  },
  {
    icon: Lightbulb,
    title: 'Inovativní řešení',
    description: 'Kombinujeme tradici s moderním přístupem. Nasloucháme vašim potřebám a nabízíme kreativní řešení.'
  },
  {
    icon: Award,
    title: 'Ověřená zkušenost',
    description: 'Více než 15 let stavebních prací. Naši tým se skládá z kvalifikovaných profesionálů.'
  }
]

export default function WhyUs() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: 20 },
    show: { opacity: 1, x: 0 },
  }

  return (
    <section className="py-20 md:py-32 bg-[#FAF7F2]">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left side - Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: '-100px' }}
            className="relative rounded-3xl overflow-hidden aspect-square"
          >
            <img
              src="https://picsum.photos/id/1012/600/600"
              alt="Tým"
              className="w-full h-full object-cover"
            />
            {/* Floating review card */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -bottom-8 -left-8 bg-[#FFFDF9] rounded-2xl p-5 shadow-lg border border-[#E8E0D2] max-w-xs"
            >
              <div className="flex gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-[#C4602A] text-lg">★</span>
                ))}
              </div>
              <p className="text-xs leading-relaxed text-[#1E1A16] mb-2">
                "Profesionální přístup a čistota na stavbě."
              </p>
              <p className="text-xs font-bold text-[#1E1A16]">Jana Nováková</p>
            </motion.div>
          </motion.div>

          {/* Right side - Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-100px' }}
            className="space-y-8"
          >
            {/* Section tag */}
            <motion.div variants={itemVariants}>
              <div className="inline-flex items-center gap-2">
                <div className="w-6 h-0.5 bg-[#C4602A] rounded-full"></div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#C4602A]">
                  Proč MY
                </span>
              </div>
            </motion.div>

            {/* Heading */}
            <motion.h2
              variants={itemVariants}
              className="text-4xl md:text-5xl font-black tracking-tighter text-[#1E1A16]"
            >
              Partneři vaší stavby
            </motion.h2>

            {/* Benefits */}
            <motion.div variants={containerVariants} className="space-y-6">
              {benefits.map((benefit, idx) => {
                const Icon = benefit.icon
                return (
                  <motion.div
                    key={idx}
                    variants={itemVariants}
                    className="flex gap-4"
                  >
                    <div className="flex-shrink-0">
                      <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${
                        idx === 0 ? 'bg-[#F0D5C4]' : idx === 1 ? 'bg-[#D4E5D8]' : 'bg-[#E8E0D2]'
                      }`}>
                        <Icon size={24} className={
                          idx === 0 ? 'text-[#C4602A]' : idx === 1 ? 'text-[#3A5240]' : 'text-[#C4B89A]'
                        } />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-[#1E1A16] mb-1">
                        {benefit.title}
                      </h3>
                      <p className="text-sm leading-relaxed text-[#5A5046]">
                        {benefit.description}
                      </p>
                    </div>
                  </motion.div>
                )
              })}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
