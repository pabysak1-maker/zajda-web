export interface ProjectImage {
  id: number
  url: string
}

export interface Project {
  id: string
  title: string
  type: string
  year: number
  description: string
  scope: string
  cover: ProjectImage
  images: ProjectImage[]
}

export const projects: Project[] = [
  {
    id: 'rekonstrukce-bytu-praha',
    title: 'Rekonstrukce bytu 3+1 Praha',
    type: 'Rekonstrukce bytu',
    year: 2024,
    description: 'Kompletní rekonstrukce bytu 3+1 v pražských Vinohradech včetně nových rozvodů.',
    scope: 'Bourací práce, nové rozvody elektro a vody, SDK podhledy, podlahy, obklady, malby.',
    // TODO: nahradit reálnou fotkou
    cover: { id: 1015, url: 'https://picsum.photos/id/1015/600/400' },
    images: [
      // TODO: nahradit reálnými fotkami
      { id: 1015, url: 'https://picsum.photos/id/1015/800/600' },
      { id: 1016, url: 'https://picsum.photos/id/1016/800/600' },
      { id: 1018, url: 'https://picsum.photos/id/1018/800/600' },
      { id: 1020, url: 'https://picsum.photos/id/1020/800/600' },
    ],
  },
  {
    id: 'koupelna-liberec',
    title: 'Koupelna v rodinném domě Liberec',
    type: 'Rekonstrukce koupelny',
    year: 2024,
    description: 'Moderní koupelna s walk-in sprchou a velkoplošnými obklady v rodinném domě.',
    scope: 'Demolice původní koupelny, hydroizolace, obklady 120×60, walk-in sprcha, podlahové topení.',
    // TODO: nahradit reálnou fotkou
    cover: { id: 1021, url: 'https://picsum.photos/id/1021/600/400' },
    images: [
      // TODO: nahradit reálnými fotkami
      { id: 1021, url: 'https://picsum.photos/id/1021/800/600' },
      { id: 1022, url: 'https://picsum.photos/id/1022/800/600' },
      { id: 1023, url: 'https://picsum.photos/id/1023/800/600' },
    ],
  },
  {
    id: 'terasa-dlazba',
    title: 'Terasa a venkovní dlažba',
    type: 'Terasy',
    year: 2023,
    description: 'Venkovní terasa s mrazuvzdornou dlažbou a okapovým chodníkem kolem domu.',
    scope: 'Příprava podloží, štěrkový podsyp, betonový základ, pokládka venkovní dlažby, spárování.',
    // TODO: nahradit reálnou fotkou
    cover: { id: 1029, url: 'https://picsum.photos/id/1029/600/400' },
    images: [
      // TODO: nahradit reálnými fotkami
      { id: 1029, url: 'https://picsum.photos/id/1029/800/600' },
      { id: 1031, url: 'https://picsum.photos/id/1031/800/600' },
      { id: 1033, url: 'https://picsum.photos/id/1033/800/600' },
      { id: 1035, url: 'https://picsum.photos/id/1035/800/600' },
    ],
  },
  {
    id: 'schodiste-obytny-dum',
    title: 'Schodiště obytný dům',
    type: 'Výstavba schodů',
    year: 2023,
    description: 'Železobetonové schodiště s obkladem z přírodního kamene v obytném domě.',
    scope: 'Bednění, armatura, betonáž, obklad stupňů přírodním kamenem, nerezové zábradlí.',
    // TODO: nahradit reálnou fotkou
    cover: { id: 1039, url: 'https://picsum.photos/id/1039/600/400' },
    images: [
      // TODO: nahradit reálnými fotkami
      { id: 1039, url: 'https://picsum.photos/id/1039/800/600' },
      { id: 1040, url: 'https://picsum.photos/id/1040/800/600' },
      { id: 1041, url: 'https://picsum.photos/id/1041/800/600' },
    ],
  },
  {
    id: 'rekonstrukce-kuchyne',
    title: 'Kompletní rekonstrukce kuchyně',
    type: 'Rekonstrukce',
    year: 2023,
    description: 'Kompletní přestavba kuchyně s novým rozvržením, obklady a podlahou.',
    scope: 'Bourání příčky, nové elektro a voda, obklady za linkou, vinylová podlaha, SDK podhled s LED.',
    // TODO: nahradit reálnou fotkou
    cover: { id: 1044, url: 'https://picsum.photos/id/1044/600/400' },
    images: [
      // TODO: nahradit reálnými fotkami
      { id: 1044, url: 'https://picsum.photos/id/1044/800/600' },
      { id: 1045, url: 'https://picsum.photos/id/1045/800/600' },
      { id: 1047, url: 'https://picsum.photos/id/1047/800/600' },
      { id: 1048, url: 'https://picsum.photos/id/1048/800/600' },
      { id: 1049, url: 'https://picsum.photos/id/1049/800/600' },
    ],
  },
  {
    id: 'podlahove-topeni-dlazba',
    title: 'Podlahové topení + dlažba',
    type: 'Podlahy',
    year: 2022,
    description: 'Instalace podlahového topení s velkoformátovou dlažbou v novostavbě.',
    scope: 'Pokládka topných rohoží, nivelace, velkoformátová dlažba 80×80, spárování.',
    // TODO: nahradit reálnou fotkou
    cover: { id: 1050, url: 'https://picsum.photos/id/1050/600/400' },
    images: [
      // TODO: nahradit reálnými fotkami
      { id: 1050, url: 'https://picsum.photos/id/1050/800/600' },
      { id: 1051, url: 'https://picsum.photos/id/1051/800/600' },
      { id: 1052, url: 'https://picsum.photos/id/1052/800/600' },
    ],
  },
]
