import { useTranslations } from 'next-intl'
import ScrollReveal from '@/components/ui/ScrollReveal'
import Card from '@/components/ui/Card'
import Container from '@/components/ui/Container'

export default function PracticalInfo() {
  const t = useTranslations('home')

  return (
    <section className="bg-cream-light py-16 sm:py-20">
      <Container>
        <div className="grid gap-6 sm:grid-cols-3">
          {/* Hours */}
          <ScrollReveal>
            <Card variant="parchment" hover>
              <h3 className="text-olive-deep text-center text-[length:var(--text-card)] font-normal">
                {t('hoursTitle')}
              </h3>
              <div className="mt-4 space-y-2 text-center text-sm text-wood-medium">
                <p>
                  <span className="font-semibold text-wood-dark">{t('lunchLabel')}</span>
                  <br />
                  {t('lunchSchedule')}
                </p>
                <p>
                  <span className="font-semibold text-wood-dark">{t('dinnerLabel')}</span>
                  <br />
                  {t('dinnerSchedule')}
                </p>
              </div>
            </Card>
          </ScrollReveal>

          {/* Address */}
          <ScrollReveal>
            <Card variant="parchment" hover>
              <h3 className="text-olive-deep text-center text-[length:var(--text-card)] font-normal">
                {t('addressTitle')}
              </h3>
              <div className="mt-4 text-center text-sm text-wood-medium">
                <p>2 Rue de Mayence</p>
                <p>44000 Nantes</p>
                <a
                  href="https://maps.google.com/?q=2+Rue+de+Mayence+44000+Nantes"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-block text-olive transition-colors hover:text-olive-deep"
                >
                  {t('viewMap')} &rarr;
                </a>
              </div>
            </Card>
          </ScrollReveal>

          {/* Phone */}
          <ScrollReveal>
            <Card variant="parchment" hover>
              <h3 className="text-olive-deep text-center text-[length:var(--text-card)] font-normal">
                {t('phoneTitle')}
              </h3>
              <div className="mt-4 text-center">
                <a
                  href="tel:+33240476350"
                  className="text-lg text-wood-dark transition-colors hover:text-olive"
                >
                  02 40 47 63 50
                </a>
              </div>
            </Card>
          </ScrollReveal>
        </div>
      </Container>
    </section>
  )
}
