import type { LucideIcon } from 'lucide-react'
import {
  Home,
  Bath,
  Layers,
  StepForward,
  TreePine,
  Grid3X3,
  BrickWall,
  Wrench,
} from 'lucide-react'

export interface Service {
  id: string
  title: string
  description: string
  icon: LucideIcon
}

export const services: Service[] = [
  {
    id: 'rekonstrukce-bytu',
    title: 'Rekonstrukce bytů',
    description:
      'Komplexní rekonstrukce bytových prostor na klíč. Od bourání přes nové rozvody až po finální povrchové úpravy.',
    icon: Home,
  },
  {
    id: 'rekonstrukce-koupelen',
    title: 'Rekonstrukce koupelen',
    description:
      'Obklady, dlažba, instalace sanity. Moderní koupelny s důrazem na kvalitu a detail.',
    icon: Bath,
  },
  {
    id: 'pokladani-podlah',
    title: 'Pokládání podlah',
    description:
      'Laminát, dlažba, vinyl, parkety. Precizní pokládka s přípravou podkladu a nivelací.',
    icon: Layers,
  },
  {
    id: 'vystavba-schodu',
    title: 'Výstavba schodů',
    description:
      'Betonové i obložené schodiště. Návrh, realizace a finální úprava schodišťových konstrukcí.',
    icon: StepForward,
  },
  {
    id: 'terasy-venkovni-plochy',
    title: 'Terasy a venkovní plochy',
    description:
      'Dlážděné terasy, okapové chodníky, venkovní dlažba. Odolné řešení pro exteriér.',
    icon: TreePine,
  },
  {
    id: 'obklady-dlazby',
    title: 'Obklady a dlažby',
    description:
      'Interiér i exteriér, vzory, spárování. Profesionální obkladačské práce s precizním provedením.',
    icon: Grid3X3,
  },
  {
    id: 'pricky-zdeni',
    title: 'Příčky a zdění',
    description:
      'SDK příčky, zděné dělící stěny, bourání. Úpravy dispozic a nosných konstrukcí.',
    icon: BrickWall,
  },
  {
    id: 'opravy-sanace',
    title: 'Opravy a sanace',
    description:
      'Trhliny, vlhkost, fasády, omítky. Diagnostika a odborná sanace stavebních závad.',
    icon: Wrench,
  },
]
