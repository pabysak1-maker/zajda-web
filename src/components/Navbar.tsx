import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { motion, AnimatePresence } from 'framer-motion'
import { smoothScroll, scrollToSection } from '@/lib/smoothScroll'

const navLinks = [
  { label: 'Služby', href: '#sluzby' },
  { label: 'Reference', href: '#reference' },
  { label: 'Kontakt', href: '#kontakt' },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  const scrollTo = (href: string) => {
    setMobileOpen(false)
    scrollToSection(href)
  }

  return (
    <nav className="sticky top-0 z-50 border-b border-[#334155] bg-[#0F172A]/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-8">
        <a href="#" onClick={(e) => { e.preventDefault(); smoothScroll(0) }}>
          <img src="/logo.svg" alt="KZ Rekonstrukce" className="h-10" />
        </a>

        {/* Desktop nav */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollTo(link.href)}
              className="text-sm font-medium text-[#94A3B8] transition-colors hover:text-[#F8FAFC]"
            >
              {link.label}
            </button>
          ))}
          <Button
            onClick={() => scrollTo('#kontakt')}
            className="bg-[#1D4ED8] text-white hover:bg-[#3B82F6]"
          >
            Nezávazná poptávka
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          className="text-[#F8FAFC] md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-[#334155] md:hidden"
          >
            <div className="flex flex-col gap-4 px-4 py-6">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className="text-left text-sm font-medium text-[#94A3B8] transition-colors hover:text-[#F8FAFC]"
                >
                  {link.label}
                </button>
              ))}
              <Button
                onClick={() => scrollTo('#kontakt')}
                className="w-full bg-[#1D4ED8] text-white hover:bg-[#3B82F6]"
              >
                Nezávazná poptávka
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
