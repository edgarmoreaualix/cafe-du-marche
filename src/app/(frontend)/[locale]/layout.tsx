import { NextIntlClientProvider, useMessages } from 'next-intl'
import { setRequestLocale } from 'next-intl/server'
import { notFound } from 'next/navigation'
import { routing } from '@/i18n/routing'
import React from 'react'
import '../globals.css'

type Props = {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params

  if (!routing.locales.includes(locale as 'fr' | 'en')) {
    notFound()
  }

  setRequestLocale(locale)

  let messages
  try {
    messages = (await import(`@/i18n/messages/${locale}.json`)).default
  } catch {
    notFound()
  }

  return (
    <html lang={locale}>
      <body className="bg-cream-light text-wood-dark min-h-screen">
        <NextIntlClientProvider messages={messages}>
          <Header locale={locale} />
          <main className="mx-auto max-w-5xl px-4 py-8">{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  )
}

function Header({ locale }: { locale: string }) {
  const otherLocale = locale === 'fr' ? 'en' : 'fr'
  return (
    <header className="bg-olive text-cream px-4 py-4">
      <div className="mx-auto flex max-w-5xl items-center justify-between">
        <a href={`/${locale}`} className="text-xl font-bold">
          Le Café du Marché
        </a>
        <nav className="flex items-center gap-4 text-sm">
          <a href={`/${locale}/menu`} className="hover:text-gold transition-colors">
            Menu
          </a>
          <a href={`/${locale}/vins`} className="hover:text-gold transition-colors">
            Vins
          </a>
          <a href={`/${locale}/reservation`} className="hover:text-gold transition-colors">
            Réserver
          </a>
          <a href={`/${locale}/groupe`} className="hover:text-gold transition-colors">
            Groupe
          </a>
          <a href={`/${locale}/a-propos`} className="hover:text-gold transition-colors">
            À Propos
          </a>
          <a
            href={`/${otherLocale}`}
            className="ml-2 rounded border border-cream/30 px-2 py-1 text-xs hover:bg-cream/10 transition-colors"
          >
            {otherLocale.toUpperCase()}
          </a>
        </nav>
      </div>
    </header>
  )
}

function Footer() {
  return (
    <footer className="bg-wood-dark text-cream/80 mt-16 px-4 py-8 text-sm">
      <div className="mx-auto max-w-5xl text-center">
        <p className="font-bold text-cream">Le Café du Marché</p>
        <p className="mt-1">Nantes — Près de la Cité des Congrès</p>
        <p className="mt-4 text-cream/50">&copy; {new Date().getFullYear()} Le Café du Marché</p>
      </div>
    </footer>
  )
}
