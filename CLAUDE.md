# KZ Rekonstrukce - Portfolio Web

Portfolio web pro zedníka / stavební firmu.

## Tech stack
- Vite + React + TypeScript
- Tailwind CSS v4
- shadcn/ui (preset b1YnRGO2K)
- Framer Motion
- Lucide React icons

## Barevná paleta
- Primární: `#1D4ED8` (modrá)
- Pozadí: `#0F172A` (tmavý slate)
- Karta pozadí: `#1E293B`
- Accent / hover: `#3B82F6`
- Text primární: `#F8FAFC`
- Text sekundární: `#94A3B8`
- Border: `#334155`
- **Červená/coral accent NEPOUŽÍVAT** - jen modrá paleta

## Struktura komponent
```
src/
  components/
    ui/           # shadcn/ui komponenty (button, dialog, input, textarea, badge, label)
    Navbar.tsx    # Sticky navbar s logem, navigací a CTA
    Hero.tsx      # Fullscreen hero s overlay a 2 CTA tlačítky
    Services.tsx  # Grid 8 karet služeb se stagger animací
    ServiceModal.tsx  # Dialog s formulářem pro poptávku služby
    References.tsx    # Grid 6 referenčních projektů
    ReferenceLightbox.tsx  # Dialog s lightboxem (velká fotka + thumbnaily + popis)
    Contact.tsx   # Formulář + kontaktní info blok
    Footer.tsx    # Logo, navigace, sociální sítě
  data/
    services.ts   # Data 8 služeb s ikonami
    projects.ts   # Data 6 referenčních projektů s fotkami
  lib/
    utils.ts      # shadcn/ui utility (cn)
```

## Příkazy
```bash
npm run dev    # Dev server
npm run build  # Production build
```

## Poznámky
- Formuláře zatím jen console.log, backend se řeší later
- Obrázky z picsum.photos jako placeholdery - nahradit reálnými fotkami
- Logo: public/logo.svg (zdroj: brand_assets/logo.svg)
- Font: Inter (Google Fonts)
- Vždy dark mode, nepoužívat light mode
