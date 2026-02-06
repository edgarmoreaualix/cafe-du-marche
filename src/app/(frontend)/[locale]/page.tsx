import { useTranslations } from 'next-intl'
import { setRequestLocale } from 'next-intl/server'

type Props = {
  params: Promise<{ locale: string }>
}

export default async function HomePage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale)
  return <HomePageContent />
}

function HomePageContent() {
  const t = useTranslations()

  return (
    <div className="space-y-12">
      {/* Hero */}
      <section className="rounded-lg bg-parchment px-8 py-16 text-center">
        <h1 className="text-olive-deep text-4xl font-bold">{t('home.hero')}</h1>
        <p className="text-wood-medium mt-4 text-lg">{t('home.subtitle')}</p>
        <div className="mt-8 flex justify-center gap-4">
          <a
            href="reservation"
            className="bg-wine-red hover:bg-wine-light rounded px-6 py-3 text-sm font-semibold text-white transition-colors"
          >
            {t('home.reserveCta')}
          </a>
          <a
            href="menu"
            className="border-olive text-olive hover:bg-olive hover:text-cream rounded border px-6 py-3 text-sm font-semibold transition-colors"
          >
            {t('common.seeMenu')}
          </a>
        </div>
      </section>

      {/* Menu teaser */}
      <section className="text-center">
        <h2 className="text-olive-deep text-2xl font-bold">{t('home.menuTeaser')}</h2>
        <p className="text-wood-medium mt-2">{t('common.phase2Note')}</p>
      </section>
    </div>
  )
}
