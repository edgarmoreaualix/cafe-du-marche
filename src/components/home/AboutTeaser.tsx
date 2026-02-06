import { useTranslations } from 'next-intl'
import ScrollReveal from '@/components/ui/ScrollReveal'
import Container from '@/components/ui/Container'
import Button from '@/components/ui/Button'

export default function AboutTeaser() {
  const t = useTranslations('home')

  return (
    <section className="py-16 sm:py-20">
      <Container>
        <div className="grid items-center gap-10 md:grid-cols-2">
          {/* Placeholder image — gradient until real photos arrive */}
          <ScrollReveal>
            <div className="aspect-[4/3] rounded-[var(--radius-card)] bg-gradient-to-br from-olive-light/30 to-cream" />
          </ScrollReveal>

          <ScrollReveal>
            <h2 className="text-olive-deep text-[length:var(--text-section)] font-normal">
              {t('aboutTitle')}
            </h2>
            <p className="mt-4 text-[length:var(--text-body-lg)] leading-relaxed text-wood-medium">
              {t('aboutText')}
            </p>
            <div className="mt-6">
              <Button href="/a-propos" variant="outline">
                {t('aboutLink')}
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </Container>
    </section>
  )
}
