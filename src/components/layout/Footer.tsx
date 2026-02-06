import { Link } from '@/i18n/navigation'
import { useTranslations } from 'next-intl'

export default function Footer() {
  const t = useTranslations('footer')

  return (
    <footer className="bg-wood-dark text-cream/80">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 md:grid-cols-4">
        {/* Col 1: Logo + Tagline */}
        <div>
          <p className="text-lg text-cream" style={{ fontFamily: 'var(--font-heading)' }}>
            Le Café du Marché
          </p>
          <p className="mt-2 text-sm text-cream/60">
            {t('tagline')}
          </p>
        </div>

        {/* Col 2: Address + Phone */}
        <div>
          <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-gold">
            {t('contactTitle')}
          </h3>
          <p className="text-sm">2 Rue de Mayence</p>
          <p className="text-sm">44000 Nantes</p>
          <a
            href="tel:+33240476350"
            className="mt-2 inline-block text-sm text-cream transition-colors hover:text-gold"
          >
            02 40 47 63 50
          </a>
        </div>

        {/* Col 3: Hours */}
        <div>
          <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-gold">
            {t('hoursTitle')}
          </h3>
          <p className="text-sm">
            <span className="text-cream">{t('lunchLabel')}</span>
            <br />
            {t('lunchDays')}
          </p>
          <p className="mt-2 text-sm">
            <span className="text-cream">{t('dinnerLabel')}</span>
            <br />
            {t('dinnerDays')}
          </p>
          <p className="mt-2 text-xs text-cream/50">{t('closedWeekend')}</p>
        </div>

        {/* Col 4: Socials + Reserve */}
        <div>
          <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-gold">
            {t('followTitle')}
          </h3>
          <a
            href="https://www.instagram.com/cafe_du_marche_nantes"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm transition-colors hover:text-gold"
          >
            Instagram
          </a>
          <div className="mt-4">
            <Link
              href="/reservation"
              className="inline-block rounded-[var(--radius-button)] bg-wine-red px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-wine-light"
            >
              {t('reserveLink')}
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-cream/10 px-4 py-4 sm:px-6">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 text-xs text-cream/40 sm:flex-row">
          <p>&copy; {new Date().getFullYear()} Le Café du Marché — {t('allRights')}</p>
          <Link href="/mentions-legales" className="transition-colors hover:text-cream/60">
            {t('legal')}
          </Link>
        </div>
      </div>
    </footer>
  )
}
