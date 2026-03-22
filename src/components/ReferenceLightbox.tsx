import { useState } from 'react'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { ChevronLeft, ChevronRight } from 'lucide-react'
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
      <DialogContent className="max-h-[90vh] overflow-y-auto border-[#E8E0D2] bg-[#FFFDF9] text-[#1E1A16] sm:max-w-3xl">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-3 text-xl text-[#1E1A16]">
            {project.title}
            <span className="inline-flex items-center gap-2 rounded-full bg-[#F0D5C4] px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#8B3F18]">
              {project.year}
            </span>
          </DialogTitle>
        </DialogHeader>

        {/* Main image */}
        <div className="relative overflow-hidden rounded-2xl">
          <img
            src={project.images[activeIndex].url}
            alt={`${project.title} - foto ${activeIndex + 1}`}
            className="aspect-[4/3] w-full object-cover"
          />
          <button
            onClick={prev}
            className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-[#1E1A16]/70 p-2 text-white backdrop-blur-sm transition-colors hover:bg-[#1E1A16]/90"
            aria-label="Předchozí"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={next}
            className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-[#1E1A16]/70 p-2 text-white backdrop-blur-sm transition-colors hover:bg-[#1E1A16]/90"
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
                  ? 'border-[#C4602A]'
                  : 'border-[#E8E0D2] opacity-60 hover:opacity-100'
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
        <div className="space-y-4">
          <p className="text-[#5A5046] leading-relaxed">{project.description}</p>
          <div>
            <h4 className="mb-2 text-sm font-bold uppercase tracking-widest text-[#C4602A]">Rozsah prací:</h4>
            <p className="text-sm text-[#5A5046]">{project.scope}</p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
