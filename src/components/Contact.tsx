import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Phone, Mail, MapPin, Building2, Instagram, Facebook } from 'lucide-react'

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Contact form:', form)
    setForm({ name: '', email: '', phone: '', message: '' })
  }

  return (
    <section id="kontakt" className="relative py-20 md:py-28">
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
            <span className="text-[#3B82F6]">Kontaktujte</span> nás
          </h2>
          <p className="mx-auto max-w-2xl text-[#94A3B8]">
            Máte dotaz nebo chcete nezávaznou cenovou nabídku? Napište nám.
          </p>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-5">
          {/* Form */}
          <motion.form
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            onSubmit={handleSubmit}
            className="space-y-5 lg:col-span-3"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <Label className="text-[#94A3B8]">Jméno a příjmení *</Label>
                <Input
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="mt-1 border-[#334155] bg-[#1E293B] text-[#F8FAFC]"
                  placeholder="Jan Novák"
                />
              </div>
              <div>
                <Label className="text-[#94A3B8]">Email *</Label>
                <Input
                  required
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="mt-1 border-[#334155] bg-[#1E293B] text-[#F8FAFC]"
                  placeholder="jan@email.cz"
                />
              </div>
            </div>

            <div>
              <Label className="text-[#94A3B8]">Telefon *</Label>
              <Input
                required
                type="tel"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="mt-1 border-[#334155] bg-[#1E293B] text-[#F8FAFC]"
                placeholder="+420 123 456 789"
              />
            </div>

            <div>
              <Label className="text-[#94A3B8]">Zpráva</Label>
              <Textarea
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="mt-1 min-h-32 border-[#334155] bg-[#1E293B] text-[#F8FAFC]"
                placeholder="Popište vaši představu, rozsah prací, termín..."
              />
            </div>

            <Button
              type="submit"
              size="lg"
              className="w-full bg-[#1D4ED8] text-white hover:bg-[#3B82F6] sm:w-auto"
            >
              Odeslat zprávu
            </Button>
          </motion.form>

          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <div className="rounded-2xl border border-[#334155] bg-[#1E293B] p-8">
              <h3 className="mb-6 text-lg font-semibold text-[#F8FAFC]">
                Kontaktní údaje
              </h3>
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-[#1D4ED8]/10">
                    <Phone className="h-5 w-5 text-[#3B82F6]" />
                  </div>
                  <div>
                    <p className="text-sm text-[#94A3B8]">Telefon</p>
                    <p className="font-medium text-[#F8FAFC]">+420 123 456 789</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-[#1D4ED8]/10">
                    <Mail className="h-5 w-5 text-[#3B82F6]" />
                  </div>
                  <div>
                    <p className="text-sm text-[#94A3B8]">Email</p>
                    <p className="font-medium text-[#F8FAFC]">info@kzrekonstrukce.cz</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-[#1D4ED8]/10">
                    <MapPin className="h-5 w-5 text-[#3B82F6]" />
                  </div>
                  <div>
                    <p className="text-sm text-[#94A3B8]">Adresa</p>
                    <p className="font-medium text-[#F8FAFC]">Ulice 123, Praha</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-[#1D4ED8]/10">
                    <Building2 className="h-5 w-5 text-[#3B82F6]" />
                  </div>
                  <div>
                    <p className="text-sm text-[#94A3B8]">IČO</p>
                    <p className="font-medium text-[#F8FAFC]">12345678</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-[#1D4ED8]/10">
                    <Instagram className="h-5 w-5 text-[#3B82F6]" />
                  </div>
                  <div>
                    <p className="text-sm text-[#94A3B8]">Instagram</p>
                    <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" className="font-medium text-[#F8FAFC] hover:text-[#3B82F6] transition-colors">@kzrekonstrukce</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-[#1D4ED8]/10">
                    <Facebook className="h-5 w-5 text-[#3B82F6]" />
                  </div>
                  <div>
                    <p className="text-sm text-[#94A3B8]">Facebook</p>
                    <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer" className="font-medium text-[#F8FAFC] hover:text-[#3B82F6] transition-colors">KZ Rekonstrukce</a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
