import { createFileRoute } from '@tanstack/react-router'
import { GardenPlanner } from '@/components/advance/garden-planner'
import { HeroSection } from '@/components/advance/hero-section'
import { ProcessSection } from '@/components/advance/process-section'
import { ProjectGallery } from '@/components/advance/project-gallery'
import { ServicesSection } from '@/components/advance/services-section'
import { SiteFooter } from '@/components/advance/site-footer'
import { SiteHeader } from '@/components/advance/site-header'
import { TrustSection } from '@/components/advance/trust-section'

export const Route = createFileRoute('/')({
  head: () => ({ meta: [
    { title: 'Advance Gardens | Thoughtful Garden Design & Landscaping' },
    { name: 'description', content: 'Advance Gardens creates thoughtful gardens, carefully built patios, and beautiful outdoor living spaces in Northamptonshire.' },
    { property: 'og:title', content: 'Advance Gardens | Your favourite place. Just outside.' },
    { property: 'og:description', content: 'Thoughtful garden design, landscaping, and outdoor living by Advance Gardens.' },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' },
  ] }),
  component: Index,
})

function Index() {
  return <><SiteHeader /><main id="main-content"><HeroSection /><ProjectGallery /><ProcessSection /><ServicesSection /><GardenPlanner /><TrustSection /></main><SiteFooter /></>
}
