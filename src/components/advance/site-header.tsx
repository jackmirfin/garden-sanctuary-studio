import { useEffect, useRef, useState } from 'react'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import { Button } from '@/components/advance/ui/button'
import { brandAssets } from '@/lib/brand-assets'
import { heroOverlapsHeader } from '@/lib/hero-overlap'

const navItems = [
  { label: 'Our transformations', href: '#projects' },
  { label: 'Services', href: '#services' },
  { label: 'How we work', href: '#process' },
  { label: 'Reviews', href: '#reviews' },
]

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [overHero, setOverHero] = useState(true)
  const [hidden, setHidden] = useState(false)
  const headerRef = useRef<HTMLElement>(null)
  const navRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const hero = document.getElementById('top')
    const nav = navRef.current
    if (!hero || !nav) return
    let observer: IntersectionObserver | undefined
    let previousScrollY = window.scrollY
    const update = () => {
      const overlaps = heroOverlapsHeader(hero.getBoundingClientRect().bottom, nav.offsetHeight)
      setOverHero(overlaps)
      return overlaps
    }
    const observe = () => {
      observer?.disconnect()
      observer = new IntersectionObserver(update, { rootMargin: `-${nav.offsetHeight}px 0px 0px 0px`, threshold: 0 })
      observer.observe(hero)
      update()
    }
    const resize = new ResizeObserver(observe)
    resize.observe(nav)
    observe()
    const onScroll = () => {
      const overlaps = update()
      const delta = window.scrollY - previousScrollY
      if (overlaps || delta < -3) setHidden(false)
      else if (delta > 3) { setHidden(true); setMenuOpen(false) }
      previousScrollY = window.scrollY
    }
    const onKey = (event: KeyboardEvent) => { if (event.key === 'Escape') setMenuOpen(false) }
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('keydown', onKey)
    return () => { observer?.disconnect(); resize.disconnect(); window.removeEventListener('scroll', onScroll); window.removeEventListener('keydown', onKey) }
  }, [])

  const closeMenu = () => setMenuOpen(false)
  return (
    <header ref={headerRef} className="advance-header" data-over-hero={overHero} data-menu-open={menuOpen} data-hidden={hidden} inert={hidden}>
      <nav ref={navRef} aria-label="Primary navigation" className="advance-navigation">
        <a href="#top" aria-label="Advance Gardens home" onClick={closeMenu} className="advance-logo-link">
          <img src={brandAssets.logo} alt="Advance Gardens" width="480" height="160" className="advance-header-logo" />
        </a>
        <div className="advance-desktop-links">
          {navItems.map(item => <a key={item.href} href={item.href}>{item.label}</a>)}
        </div>
        <div className="advance-header-actions">
          <Button variant="headerCta" render={<a href="#planner" />} className="advance-header-cta">Book site visit <ArrowUpRight aria-hidden="true" /></Button>
          <Button variant="headerMenu" size="icon" className="advance-menu-toggle" aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'} aria-expanded={menuOpen} aria-controls="mobile-navigation" onClick={() => setMenuOpen(open => !open)}>
            {menuOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </nav>
      {menuOpen && <div id="mobile-navigation" className="advance-mobile-navigation">
        {navItems.map(item => <a key={item.href} href={item.href} onClick={closeMenu}>{item.label}</a>)}
        <Button variant="outline" render={<a href="#planner" onClick={closeMenu} />}>Book Your Site Consultation <ArrowUpRight aria-hidden="true" /></Button>
      </div>}
    </header>
  )
}