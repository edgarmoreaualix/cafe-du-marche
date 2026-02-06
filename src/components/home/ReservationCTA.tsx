import { useTranslations } from 'next-intl'
import ScrollReveal from '@/components/ui/ScrollReveal'
import Button from '@/components/ui/Button'

export default function ReservationCTA() {
  const t = useTranslations('home')

  return (
    <section className="texture-paper relative bg-wine-red py-16 sm:py-20">
      <div className="relative z-10 mx-auto max-w-2xl px-4 text-center sm:px-6">
        <ScrollReveal>
          <h2
            className="text-cream text-[length:var(--text-section)] font-normal"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            {t('reserveTitle')}
          </h2>
          <p className="mt-4 text-[length:var(--text-body-lg)] text-cream/80">
            {t('reserveText')}
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button href="/reservation" variant="secondary" size="lg">
              {t('reserveButton')}
            </Button>
            <a
              href="tel:+33240476350"
              className="text-sm text-cream/70 transition-colors hover:text-cream"
            >
              {t('orCallUs')} — 02 40 47 63 50
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
