import { useTranslations } from 'next-intl'
import { setRequestLocale } from 'next-intl/server'

type Props = {
  params: Promise<{ locale: string }>
}

export default async function AboutPage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale)
  return <AboutPageContent />
}

function AboutPageContent() {
  const t = useTranslations()

  return (
    <div className="space-y-8">
      <h1 className="text-olive-deep text-3xl font-bold">{t('about.title')}</h1>
      <p className="text-wood-medium text-lg">{t('about.subtitle')}</p>
      <div className="rounded-lg bg-parchment p-8 text-center">
        <p className="text-wood-medium">{t('common.phase2Note')}</p>
      </div>
    </div>
  )
}
