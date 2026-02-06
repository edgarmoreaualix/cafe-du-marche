import { NextIntlClientProvider } from 'next-intl'
import { getMessages, setRequestLocale } from 'next-intl/server'
import { notFound } from 'next/navigation'
import { routing } from '@/i18n/routing'
import { DM_Serif_Display, DM_Sans } from 'next/font/google'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import JsonLd from '@/components/layout/JsonLd'
import type { Metadata } from 'next'
import React from 'react'
import '../globals.css'

const dmSerifDisplay = DM_Serif_Display({
  weight: '400',
  subsets: ['latin', 'latin-ext'],
  variable: '--font-dm-serif-display',
  display: 'swap',
})

const dmSans = DM_Sans({
  weight: ['400', '500', '700'],
  subsets: ['latin', 'latin-ext'],
  variable: '--font-dm-sans',
  display: 'swap',
})

type Props = {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  const isFr = locale === 'fr'

  return {
    title: {
      default: isFr
        ? 'Le Café du Marché — Brasserie à Nantes'
        : 'Le Café du Marché — French Brasserie in Nantes',
      template: isFr ? '%s | Le Café du Marché' : '%s | Le Café du Marché',
    },
    description: isFr
      ? 'Cuisine du marché, fait maison, à deux pas de la Cité des Congrès. Réservez votre table au Café du Marché à Nantes.'
      : 'Market-fresh, homemade cuisine, steps from the Cité des Congrès. Book your table at Le Café du Marché in Nantes.',
    openGraph: {
      locale: isFr ? 'fr_FR' : 'en_GB',
      type: 'website',
      siteName: 'Le Café du Marché',
    },
  }
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params

  if (!routing.locales.includes(locale as 'fr' | 'en')) {
    notFound()
  }

  setRequestLocale(locale)

  const messages = await getMessages()

  return (
    <html lang={locale} className={`${dmSerifDisplay.variable} ${dmSans.variable}`}>
      <body className="flex min-h-screen flex-col bg-cream-light text-wood-dark">
        <NextIntlClientProvider messages={messages}>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </NextIntlClientProvider>
        <JsonLd />
      </body>
    </html>
  )
}
