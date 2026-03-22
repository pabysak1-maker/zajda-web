import { useState } from 'react'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'

interface ServiceModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  serviceName: string
}

export default function ServiceModal({ open, onOpenChange, serviceName }: ServiceModalProps) {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Service inquiry:', { service: serviceName, ...form })
    setForm({ name: '', email: '', phone: '', message: '' })
    onOpenChange(false)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="border-[#E8E0D2] bg-[#FFFDF9] text-[#1E1A16] sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-xl text-[#1E1A16]">Poptat službu</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label className="text-[#5A5046] font-bold">Služba</Label>
            <Input
              value={serviceName}
              readOnly
              className="mt-1 border-[#E8E0D2] bg-[#FAF7F2] text-[#1E1A16]"
            />
          </div>
          <div>
            <Label className="text-[#5A5046] font-bold">Jméno a příjmení *</Label>
            <Input
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="mt-1 border-[#E8E0D2] bg-white text-[#1E1A16] placeholder:text-[#C4B89A]"
              placeholder="Jan Novák"
            />
          </div>
          <div>
            <Label className="text-[#5A5046] font-bold">Email *</Label>
            <Input
              required
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="mt-1 border-[#E8E0D2] bg-white text-[#1E1A16] placeholder:text-[#C4B89A]"
              placeholder="jan@email.cz"
            />
          </div>
          <div>
            <Label className="text-[#5A5046] font-bold">Telefon *</Label>
            <Input
              required
              type="tel"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              className="mt-1 border-[#E8E0D2] bg-white text-[#1E1A16] placeholder:text-[#C4B89A]"
              placeholder="+420 123 456 789"
            />
          </div>
          <div>
            <Label className="text-[#5A5046] font-bold">Popis zakázky</Label>
            <Textarea
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="mt-1 min-h-24 border-[#E8E0D2] bg-white text-[#1E1A16] placeholder:text-[#C4B89A]"
              placeholder="Popište vaši představu..."
            />
          </div>
          <Button
            type="submit"
            className="w-full bg-[#C4602A] text-white font-bold hover:bg-[#8B3F18] transition-all hover:-translate-y-0.5"
          >
            Odeslat poptávku
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}
