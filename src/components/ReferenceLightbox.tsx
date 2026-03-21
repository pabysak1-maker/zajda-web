import { useState } from 'react'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import type { Project } from '@/data/projects'

interface ReferenceLightboxProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  project: Project | null
}

export default function ReferenceLightbox({ open, onOpenChange, project }: ReferenceLightboxProps) {
  const [activeIndex, setActiveIndex] = useState(0)

  if (!project) return null

  const prev = () =>
    setActiveIndex((i) => (i === 0 ? project.images.length - 1 : i - 1))
  const next = () =>
    setActiveIndex((i) => (i === project.images.length - 1 ? 0 : i + 1))

  return (
    <Dialog
      open={open}
      onOpenChange={(v) => {
        onOpenChange(v)
        if (!v) setActiveIndex(0)
      }}
    >
      <DialogContent className="max-h-[90vh] overflow-y-auto border-[#334155] bg-[#1E293B] text-[#F8FAFC] sm:max-w-3xl">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-3 text-xl text-[#F8FAFC]">
            {project.title}
            <Badge className="bg-[#1D4ED8]/20 text-[#3B82F6]">{project.year}</Badge>
          </DialogTitle>
        </DialogHeader>

        {/* Main image */}
        <div className="relative overflow-hidden rounded-xl">
          <img
            src={project.images[activeIndex].url}
            alt={`${project.title} - foto ${activeIndex + 1}`}
            className="aspect-[4/3] w-full object-cover"
          />
          <button
            onClick={prev}
            className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-[#0F172A]/70 p-2 text-white backdrop-blur-sm transition-colors hover:bg-[#0F172A]/90"
            aria-label="Předchozí"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={next}
            className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-[#0F172A]/70 p-2 text-white backdrop-blur-sm transition-colors hover:bg-[#0F172A]/90"
            aria-label="Další"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

        {/* Thumbnails */}
        <div className="flex gap-2 overflow-x-auto py-2">
          {project.images.map((img, i) => (
            <button
              key={img.id}
              onClick={() => setActiveIndex(i)}
              className={`flex-shrink-0 overflow-hidden rounded-lg border-2 transition-all ${
                i === activeIndex
                  ? 'border-[#3B82F6]'
                  : 'border-transparent opacity-60 hover:opacity-100'
              }`}
            >
              <img
                src={img.url}
                alt={`Thumbnail ${i + 1}`}
                className="h-16 w-24 object-cover"
              />
            </button>
          ))}
        </div>

        {/* Description */}
        <div className="space-y-3">
          <p className="text-[#94A3B8]">{project.description}</p>
          <div>
            <h4 className="mb-1 text-sm font-semibold text-[#F8FAFC]">Rozsah prací:</h4>
            <p className="text-sm text-[#94A3B8]">{project.scope}</p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
