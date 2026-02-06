import type { ReactNode } from 'react'

type Variant = 'cream' | 'parchment' | 'outline'

type Props = {
  children: ReactNode
  variant?: Variant
  hover?: boolean
  className?: string
}

const variantClasses: Record<Variant, string> = {
  cream: 'bg-cream-light',
  parchment: 'bg-parchment',
  outline: 'border border-cream bg-white',
}

export default function Card({ children, variant = 'parchment', hover, className = '' }: Props) {
  return (
    <div
      className={`rounded-[var(--radius-card)] p-6 shadow-[var(--shadow-card)] ${variantClasses[variant]} ${hover ? 'transition-shadow duration-300 hover:shadow-[var(--shadow-card-hover)]' : ''} ${className}`}
    >
      {children}
    </div>
  )
}
