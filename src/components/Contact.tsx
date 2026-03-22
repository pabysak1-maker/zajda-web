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
    <section id="kontakt" className="relative py-20 md:py-32 bg-[#1E1A16]">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          {/* Section tag */}
          <div className="inline-flex items-center gap-2 mb-6">
            <div className="w-6 h-0.5 bg-[#C4602A] rounded-full"></div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#C4602A]">
              Kontakt
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-white">
            Kontaktujte nás
          </h2>
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
                <Label className="text-white font-bold text-sm">Jméno a příjmení *</Label>
                <Input
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="mt-2 border-[rgba(255,255,255,0.12)] bg-[rgba(255,255,255,0.06)] text-white placeholder:text-[rgba(255,255,255,0.25)]"
                  placeholder="Jan Novák"
                />
              </div>
              <div>
                <Label className="text-white font-bold text-sm">Email *</Label>
                <Input
                  required
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="mt-2 border-[rgba(255,255,255,0.12)] bg-[rgba(255,255,255,0.06)] text-white placeholder:text-[rgba(255,255,255,0.25)]"
                  placeholder="jan@email.cz"
                />
              </div>
            </div>

            <div>
              <Label className="text-white font-bold text-sm">Telefon *</Label>
              <Input
                required
                type="tel"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="mt-2 border-[rgba(255,255,255,0.12)] bg-[rgba(255,255,255,0.06)] text-white placeholder:text-[rgba(255,255,255,0.25)]"
                placeholder="+420 123 456 789"
              />
            </div>

            <div>
              <Label className="text-white font-bold text-sm">Zpráva</Label>
              <Textarea
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="mt-2 min-h-32 border-[rgba(255,255,255,0.12)] bg-[rgba(255,255,255,0.06)] text-white placeholder:text-[rgba(255,255,255,0.25)]"
                placeholder="Popište vaši představu, rozsah prací, termín..."
              />
            </div>

            <Button
              type="submit"
              size="lg"
              className="w-full sm:w-auto bg-[#C4602A] text-white font-bold hover:bg-[#8B3F18] transition-all hover:-translate-y-0.5"
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
            <div className="rounded-3xl border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.02)] p-8">
              <h3 className="mb-8 text-lg font-bold text-white">
                Kontaktní údaje
              </h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-[#F0D5C4]">
                    <Phone className="h-5 w-5 text-[#C4602A]" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-[#9C9080]">Telefon</p>
                    <p className="font-bold text-white mt-1">+420 123 456 789</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-[#F0D5C4]">
                    <Mail className="h-5 w-5 text-[#C4602A]" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-[#9C9080]">Email</p>
                    <p className="font-bold text-white mt-1">info@kzrekonstrukce.cz</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-[#F0D5C4]">
                    <MapPin className="h-5 w-5 text-[#C4602A]" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-[#9C9080]">Adresa</p>
                    <p className="font-bold text-white mt-1">Ulice 123, Praha</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-[#F0D5C4]">
                    <Building2 className="h-5 w-5 text-[#C4602A]" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-[#9C9080]">IČO</p>
                    <p className="font-bold text-white mt-1">12345678</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-[#D4E5D8]">
                    <Instagram className="h-5 w-5 text-[#3A5240]" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-[#9C9080]">Instagram</p>
                    <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" className="font-bold text-white hover:text-[#C4602A] transition-colors mt-1 block">@kzrekonstrukce</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-[#D4E5D8]">
                    <Facebook className="h-5 w-5 text-[#3A5240]" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-[#9C9080]">Facebook</p>
                    <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer" className="font-bold text-white hover:text-[#C4602A] transition-colors mt-1 block">KZ Rekonstrukce</a>
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
