'use client'

import { useState } from 'react'
import { Link } from '@/i18n/navigation'
import { useTranslations } from 'next-intl'
import { navItems } from '@/lib/navigation'

export default function MobileMenu() {
  const [open, setOpen] = useState(false)
  const t = useTranslations('nav')

  return (
    <>
      {/* Hamburger button */}
      <button
        onClick={() => setOpen(!open)}
        className="relative z-50 flex h-8 w-8 flex-col items-center justify-center gap-1.5"
        aria-label={open ? 'Close menu' : 'Open menu'}
        aria-expanded={open}
      >
        <span
          className={`h-[2px] w-5 bg-cream transition-all duration-300 ${open ? 'translate-y-[7px] rotate-45' : ''}`}
        />
        <span
          className={`h-[2px] w-5 bg-cream transition-opacity duration-300 ${open ? 'opacity-0' : ''}`}
        />
        <span
          className={`h-[2px] w-5 bg-cream transition-all duration-300 ${open ? '-translate-y-[7px] -rotate-45' : ''}`}
        />
      </button>

      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-8 bg-olive-deep/98"
          onClick={() => setOpen(false)}
        >
          {navItems.map((item) => (
            <Link
              key={item.key}
              href={item.href}
              className="text-2xl text-cream transition-colors hover:text-gold"
              style={{ fontFamily: 'var(--font-heading)' }}
              onClick={() => setOpen(false)}
            >
              {t(item.key)}
            </Link>
          ))}
        </div>
      )}
    </>
  )
}
