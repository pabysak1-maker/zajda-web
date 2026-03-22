import { useState, useEffect } from 'react'
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
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTo = (href: string) => {
    setMobileOpen(false)
    scrollToSection(href)
  }

  return (
    <nav
      className={`sticky top-0 z-50 bg-[#FAF7F2]/92 backdrop-blur-[12px] transition-all ${
        scrolled ? 'border-b border-[#E8E0D2]' : 'border-b border-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-8">
        <a href="#" onClick={(e) => { e.preventDefault(); smoothScroll(0) }}>
          <img src="/logo.svg" alt="KZ Rekonstrukce" className="h-12 md:h-14 w-auto" />
        </a>

        {/* Desktop nav */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollTo(link.href)}
              className="text-sm font-medium text-[#5A5046] transition-colors hover:text-[#1E1A16]"
            >
              {link.label}
            </button>
          ))}
          <Button
            onClick={() => scrollTo('#kontakt')}
            className="bg-[#1E1A16] text-white font-bold hover:bg-[#C4602A] transition-colors"
          >
            Poptávka zdarma
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          className="text-[#1E1A16] md:hidden"
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
            className="overflow-hidden border-t border-[#E8E0D2] md:hidden"
          >
            <div className="flex flex-col gap-4 px-4 py-6 bg-[#FAF7F2]">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className="text-left text-sm font-medium text-[#5A5046] transition-colors hover:text-[#1E1A16]"
                >
                  {link.label}
                </button>
              ))}
              <Button
                onClick={() => scrollTo('#kontakt')}
                className="w-full bg-[#1E1A16] text-white font-bold hover:bg-[#C4602A]"
              >
                Poptávka zdarma
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
