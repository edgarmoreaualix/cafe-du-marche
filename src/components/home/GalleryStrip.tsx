import { useTranslations } from 'next-intl'
import ScrollReveal from '@/components/ui/ScrollReveal'
import SectionHeading from '@/components/ui/SectionHeading'
import Container from '@/components/ui/Container'

const placeholders = [
  'from-olive/20 to-cream',
  'from-wood-medium/20 to-parchment',
  'from-wine-red/15 to-cream-light',
  'from-gold/15 to-parchment',
  'from-olive-deep/20 to-cream',
  'from-wood-dark/15 to-cream-light',
]

export default function GalleryStrip() {
  const t = useTranslations('home')

  return (
    <section className="py-16 sm:py-20">
      <Container>
        <ScrollReveal>
          <SectionHeading title={t('galleryTitle')} />
        </ScrollReveal>
      </Container>

      <div className="scrollbar-hide mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 sm:px-6">
        {placeholders.map((gradient, i) => (
          <div
            key={i}
            className={`aspect-[3/2] w-72 flex-shrink-0 snap-center rounded-[var(--radius-card)] bg-gradient-to-br ${gradient}`}
            aria-label={t('photoPlaceholder')}
          />
        ))}
      </div>
    </section>
  )
}
