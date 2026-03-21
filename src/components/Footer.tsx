import { Instagram, Facebook, Phone } from 'lucide-react'

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
  const scrollTo = (href: string) => {
    if (href.startsWith('#')) {
      const el = document.querySelector(href)
      el?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="border-t border-[#334155] bg-[#0B1120]">
      <div className="mx-auto max-w-7xl px-4 py-12 md:px-8">
        <div className="flex flex-col items-center gap-8 md:flex-row md:justify-between">
          {/* Logo */}
          <a href="#" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <img src="/logo.svg" alt="KZ Rekonstrukce" className="h-8" />
          </a>

          {/* Nav */}
          <div className="flex gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className="text-sm text-[#94A3B8] transition-colors hover:text-[#F8FAFC]"
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
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#334155] text-[#94A3B8] transition-all hover:border-[#3B82F6] hover:text-[#3B82F6]"
                >
                  <Icon className="h-4 w-4" />
                </a>
              )
            })}
          </div>
        </div>

        <div className="mt-8 border-t border-[#334155] pt-8 text-center text-sm text-[#94A3B8]">
          &copy; {new Date().getFullYear()} KZ Rekonstrukce. Všechna práva vyhrazena.
        </div>
      </div>
    </footer>
  )
}
