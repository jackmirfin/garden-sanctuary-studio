import { ArrowUpRight } from 'lucide-react'
import { brandAssets } from '@/lib/brand-assets'
import { Button } from '@/components/advance/ui/button'

export function HeroSection() {
  return (
    <section id="top" aria-labelledby="hero-title" className="advance-hero">
      <img src={brandAssets.hero} alt="A townhouse garden at blue hour, with illuminated stone steps, layered planting and a secluded seating terrace." loading="eager" fetchPriority="high" className="advance-hero-photo" />
      <div aria-hidden="true" className="advance-hero-shade" />
      <div className="advance-hero-inner">
        <div className="advance-hero-copy">
          <h1 id="hero-title" className="advance-hero-title">
            <span>Your favourite place.</span>
            <span><em>Just outside.</em></span>
          </h1>
          <p className="advance-hero-description">Beautiful planting, carefully built patios, and a garden you’ll love spending time in.</p>
          <div className="advance-hero-actions">
            <Button variant="hero" render={<a href="#planner" />}>Plan your garden <ArrowUpRight aria-hidden="true" /></Button>
            <Button variant="heroLink" render={<a href="#projects" />}>Explore our work <ArrowUpRight aria-hidden="true" /></Button>
          </div>
        </div>
      </div>
    </section>
  )
}