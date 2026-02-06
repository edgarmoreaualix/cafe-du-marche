import { useTranslations } from 'next-intl'
import Button from '@/components/ui/Button'

export default function Hero() {
  const t = useTranslations('home')

  return (
    <section className="texture-paper relative flex min-h-[70vh] items-center justify-center bg-gradient-to-br from-olive-deep to-wood-dark">
      <div className="relative z-10 mx-auto max-w-3xl px-4 py-20 text-center sm:px-6">
        <h1
          className="text-cream text-4xl font-normal leading-tight sm:text-5xl md:text-[length:var(--text-hero)]"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          {t('heroTitle')}
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-[length:var(--text-body-lg)] text-cream/80">
          {t('heroSubtitle')}
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button href="/reservation" variant="primary" size="lg">
            {t('reserveButton')}
          </Button>
          <Button href="/menu" variant="outline" size="lg" className="border-cream/40 text-cream hover:bg-cream/10 hover:text-cream">
            {t('menuCta')}
          </Button>
        </div>
      </div>
    </section>
  )
}
