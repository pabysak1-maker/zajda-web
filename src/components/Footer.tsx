import { Instagram, Facebook, Phone } from 'lucide-react'
import { scrollToSection, smoothScroll } from '@/lib/smoothScroll'

const navLinks = [
  { label: 'Služby', href: '#sluzby' },
  { label: 'Reference', href: '#reference' },
  { label: 'Kontakt', href: '#kontakt' },
]

const socialLinks = [
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Phone, href: 'tel:+420123456789', label: 'Telefon' },
]

export default function Footer() {
  return (
    <footer className="border-t border-[rgba(255,255,255,0.08)] bg-[#1E1A16]">
      <div className="mx-auto max-w-7xl px-4 py-12 md:px-8">
        <div className="flex flex-col items-center gap-8 md:flex-row md:justify-between">
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault()
              smoothScroll(0)
            }}
          >
            <img src="/logo.svg" alt="KZ Rekonstrukce" className="h-10 md:h-12 w-auto" />
          </a>

          {/* Nav */}
          <div className="flex gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="text-sm font-medium text-[#9C9080] transition-colors hover:text-white"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Social */}
          <div className="flex gap-4">
            {socialLinks.map((social) => {
              const Icon = social.icon
              return (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-[rgba(255,255,255,0.12)] text-[#9C9080] transition-all hover:border-[#C4602A] hover:text-[#C4602A]"
                >
                  <Icon className="h-4 w-4" />
                </a>
              )
            })}
          </div>
        </div>

        <div className="mt-8 border-t border-[rgba(255,255,255,0.08)] pt-8 text-center text-sm text-[#9C9080]">
          &copy; {new Date().getFullYear()} KZ Rekonstrukce. Všechna práva vyhrazena.
        </div>
      </div>
    </footer>
  )
}
