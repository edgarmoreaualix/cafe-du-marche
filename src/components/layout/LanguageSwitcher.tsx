'use client'

import { useRouter, usePathname } from '@/i18n/navigation'
import { useLocale } from 'next-intl'

export default function LanguageSwitcher() {
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()

  const otherLocale = locale === 'fr' ? 'en' : 'fr'

  function switchLocale() {
    router.replace(pathname, { locale: otherLocale })
  }

  return (
    <button
      onClick={switchLocale}
      className="rounded border border-cream/30 px-2 py-1 text-xs transition-colors hover:bg-cream/10"
      aria-label={`Switch to ${otherLocale === 'fr' ? 'Français' : 'English'}`}
    >
      {otherLocale.toUpperCase()}
    </button>
  )
}
