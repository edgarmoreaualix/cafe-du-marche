import { Link } from '@/i18n/navigation'
import type { ComponentProps, ReactNode } from 'react'

type Variant = 'primary' | 'secondary' | 'outline'
type Size = 'sm' | 'md' | 'lg'

type BaseProps = {
  variant?: Variant
  size?: Size
  children: ReactNode
  className?: string
}

type LinkProps = BaseProps & { href: string } & Omit<ComponentProps<typeof Link>, 'className'>
type ButtonProps = BaseProps & ComponentProps<'button'>

type Props = LinkProps | ButtonProps

const variantClasses: Record<Variant, string> = {
  primary: 'bg-wine-red text-white hover:bg-wine-light',
  secondary: 'bg-olive text-cream hover:bg-olive-deep',
  outline: 'border-2 border-olive text-olive hover:bg-olive hover:text-cream',
}

const sizeClasses: Record<Size, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-sm',
  lg: 'px-8 py-4 text-base',
}

function isLinkProps(props: Props): props is LinkProps {
  return 'href' in props
}

export default function Button(props: Props) {
  const { variant = 'primary', size = 'md', children, className = '' } = props
  const base = `inline-flex items-center justify-center font-semibold rounded-[var(--radius-button)] transition-colors duration-200 ${variantClasses[variant]} ${sizeClasses[size]} ${className}`

  if (isLinkProps(props)) {
    const { variant: _, size: __, className: ___, children: ____, ...rest } = props
    return (
      <Link {...rest} className={base}>
        {children}
      </Link>
    )
  }

  const { variant: _, size: __, className: ___, children: ____, ...rest } = props as ButtonProps
  return (
    <button {...rest} className={base}>
      {children}
    </button>
  )
}
