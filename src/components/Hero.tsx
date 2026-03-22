import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import { scrollToSection } from '@/lib/smoothScroll'

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <section className="relative bg-[#FAF7F2] py-20 md:py-32">
      <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-12 items-center px-4 md:px-8">
        {/* Left side */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="space-y-8"
        >
          {/* Badge */}
          <motion.div variants={itemVariants} className="inline-block">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#F0D5C4] px-4 py-2">
              <span className="text-xs font-bold uppercase tracking-widest text-[#8B3F18]">
                Stavba na klíč
              </span>
            </div>
          </motion.div>

          {/* H1 */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-6xl lg:text-7xl font-black leading-[0.95] tracking-tighter text-[#1E1A16]"
          >
            Stavíme s{' '}
            <span className="text-[#C4602A]">precizností</span>,<br />
            rekonstruujeme s{' '}
            <span className="text-[#C4602A]">vášní</span>
          </motion.h1>

          {/* Perex */}
          <motion.p
            variants={itemVariants}
            className="text-lg leading-relaxed text-[#5A5046] max-w-xl"
          >
            Profesionální stavební práce a rekonstrukce. Od koupelen přes podlahy až po kompletní
            přestavby bytů — vše na klíč s důrazem na kvalitu.
          </motion.p>

          {/* Buttons */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              onClick={() => scrollToSection('#kontakt')}
              className="bg-[#C4602A] text-white font-bold hover:bg-[#8B3F18] transition-all hover:-translate-y-0.5"
            >
              Nezávazná poptávka
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection('#sluzby')}
              className="border border-[#E8E0D2] bg-transparent text-[#1E1A16] hover:bg-[#F0D5C4]"
            >
              Naše služby
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div variants={itemVariants} className="grid grid-cols-3 gap-6 pt-8 border-t border-[#E8E0D2]">
            <div>
              <div className="text-2xl md:text-3xl font-black text-[#1E1A16] tracking-tighter leading-none">
                250<span className="text-[#C4602A]">+</span>
              </div>
              <div className="text-xs font-bold uppercase tracking-widest text-[#9C9080] mt-2">
                Projektů
              </div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-black text-[#1E1A16] tracking-tighter leading-none">
                15
              </div>
              <div className="text-xs font-bold uppercase tracking-widest text-[#9C9080] mt-2">
                Let praxe
              </div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-black text-[#1E1A16] tracking-tighter leading-none">
                500<span className="text-[#C4602A]">+</span>
              </div>
              <div className="text-xs font-bold uppercase tracking-widest text-[#9C9080] mt-2">
                Klientů
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Right side - Image */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate="show"
          className="relative"
        >
          <div className="relative rounded-3xl overflow-hidden aspect-square md:aspect-auto md:h-[500px]">
            <img
              src="https://picsum.photos/id/1067/800/600"
              alt="Stavební práce"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1E1A16]/20 to-transparent" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
