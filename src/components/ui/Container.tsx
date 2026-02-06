import type { ReactNode } from 'react'

type Props = {
  children: ReactNode
  wide?: boolean
  className?: string
}

export default function Container({ children, wide, className = '' }: Props) {
  return (
    <div className={`mx-auto px-4 sm:px-6 ${wide ? 'max-w-7xl' : 'max-w-5xl'} ${className}`}>
      {children}
    </div>
  )
}
