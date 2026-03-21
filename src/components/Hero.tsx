import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ArrowRight, Phone } from 'lucide-react'
import { scrollToSection } from '@/lib/smoothScroll'

export default function Hero() {

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          // TODO: nahradit reálnou fotkou
          backgroundImage: 'url(https://picsum.photos/id/1067/1920/1080)',
        }}
      />

      {/* Glassmorphism overlay */}
      <div className="absolute inset-0 bg-[#0F172A]/75 backdrop-blur-sm" />

      {/* Gradient bottom */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#0F172A] to-transparent" />

      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-6 text-4xl font-bold leading-tight tracking-tight text-[#F8FAFC] md:text-6xl lg:text-7xl"
        >
          Stavíme s{' '}
          <span className="text-[#3B82F6]">precizností</span>
          ,<br />
          rekonstruujeme s{' '}
          <span className="text-[#3B82F6]">vášní</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mx-auto mb-10 max-w-2xl text-lg text-[#94A3B8] md:text-xl"
        >
          Profesionální stavební práce a rekonstrukce. Od koupelen přes podlahy až po
          kompletní přestavby bytů — vše na klíč s důrazem na kvalitu.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Button
            size="lg"
            onClick={() => scrollToSection('#kontakt')}
            className="bg-[#1D4ED8] px-8 text-base text-white hover:bg-[#3B82F6]"
          >
            Nezávazná poptávka
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() => scrollToSection('#sluzby')}
            className="border-[#334155] px-8 text-base text-[#F8FAFC] hover:bg-[#1E293B]"
          >
            <Phone className="mr-2 h-4 w-4" />
            Naše služby
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
