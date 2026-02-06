type Props = {
  title: string
  subtitle?: string
  light?: boolean
}

export default function SectionHeading({ title, subtitle, light }: Props) {
  return (
    <div className="text-center">
      <h2
        className={`text-[length:var(--text-section)] font-normal ${light ? 'text-cream' : 'text-olive-deep'}`}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-2 text-[length:var(--text-body-lg)] ${light ? 'text-cream/80' : 'text-wood-medium'}`}>
          {subtitle}
        </p>
      )}
      <div className="divider-ornament" aria-hidden="true">
        <span className="text-gold text-xs">&#x2766;</span>
      </div>
    </div>
  )
}
