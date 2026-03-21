export function smoothScroll(targetY: number, duration = 800) {
  const startY = window.scrollY
  const diff = targetY - startY
  let startTime: number | null = null

  function easeInOutCubic(t: number) {
    return t < 0.5 ? 4 * t * t * t : 1 - (-2 * t + 2) ** 3 / 2
  }

  function step(timestamp: number) {
    if (!startTime) startTime = timestamp
    const elapsed = timestamp - startTime
    const progress = Math.min(elapsed / duration, 1)
    window.scrollTo(0, startY + diff * easeInOutCubic(progress))
    if (progress < 1) requestAnimationFrame(step)
  }

  requestAnimationFrame(step)
}

export function scrollToSection(href: string) {
  const el = document.querySelector(href)
  if (!el) return
  const navHeight = document.querySelector('nav')?.offsetHeight ?? 0
  const top = el.getBoundingClientRect().top + window.scrollY - navHeight
  smoothScroll(top)
}
