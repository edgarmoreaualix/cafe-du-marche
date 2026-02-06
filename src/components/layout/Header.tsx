import { Link } from '@/i18n/navigation'
import { useTranslations } from 'next-intl'
import { navItems } from '@/lib/navigation'
import LanguageSwitcher from './LanguageSwitcher'
import MobileMenu from './MobileMenu'

export default function Header() {
  const t = useTranslations('nav')

  return (
    <header className="sticky top-0 z-50 bg-olive/95 text-cream backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
        <Link href="/" className="text-xl font-normal" style={{ fontFamily: 'var(--font-heading)' }}>
          Le Café du Marché
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 text-sm md:flex">
          {navItems.map((item) => (
            <Link
              key={item.key}
              href={item.href}
              className="relative py-1 transition-colors hover:text-gold after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-gold after:transition-all after:duration-300 hover:after:w-full"
            >
              {t(item.key)}
            </Link>
          ))}
          <LanguageSwitcher />
        </nav>

        {/* Mobile */}
        <div className="flex items-center gap-3 md:hidden">
          <LanguageSwitcher />
          <MobileMenu />
        </div>
      </div>
    </header>
  )
}
