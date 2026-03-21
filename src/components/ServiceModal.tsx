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
      <DialogContent className="border-[#334155] bg-[#1E293B] text-[#F8FAFC] sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-xl text-[#F8FAFC]">Poptat službu</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label className="text-[#94A3B8]">Služba</Label>
            <Input
              value={serviceName}
              readOnly
              className="mt-1 border-[#334155] bg-[#0F172A] text-[#F8FAFC]"
            />
          </div>
          <div>
            <Label className="text-[#94A3B8]">Jméno a příjmení *</Label>
            <Input
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="mt-1 border-[#334155] bg-[#0F172A] text-[#F8FAFC]"
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
              className="mt-1 border-[#334155] bg-[#0F172A] text-[#F8FAFC]"
              placeholder="jan@email.cz"
            />
          </div>
          <div>
            <Label className="text-[#94A3B8]">Telefon *</Label>
            <Input
              required
              type="tel"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              className="mt-1 border-[#334155] bg-[#0F172A] text-[#F8FAFC]"
              placeholder="+420 123 456 789"
            />
          </div>
          <div>
            <Label className="text-[#94A3B8]">Popis zakázky</Label>
            <Textarea
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="mt-1 min-h-24 border-[#334155] bg-[#0F172A] text-[#F8FAFC]"
              placeholder="Popište vaši představu..."
            />
          </div>
          <Button
            type="submit"
            className="w-full bg-[#1D4ED8] text-white hover:bg-[#3B82F6]"
          >
            Odeslat poptávku
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}
