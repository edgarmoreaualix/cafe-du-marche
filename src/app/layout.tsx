import type { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: 'Le Café du Marché — Brasserie à Nantes',
  description:
    'Cuisine du marché, fait maison, à deux pas de la Cité des Congrès. Réservez votre table.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return children
}
