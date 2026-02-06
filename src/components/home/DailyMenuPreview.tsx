import { useTranslations } from 'next-intl'
import ScrollReveal from '@/components/ui/ScrollReveal'
import SectionHeading from '@/components/ui/SectionHeading'
import Card from '@/components/ui/Card'
import Container from '@/components/ui/Container'
import Button from '@/components/ui/Button'

const placeholderMenu = {
  starters: ['Terrine du chef maison', 'Salade de chèvre chaud'],
  mains: ['Filet de bar, beurre blanc', 'Joue de bœuf braisée'],
  desserts: ['Moelleux au chocolat', 'Crème brûlée vanille'],
}

export default function DailyMenuPreview() {
  const t = useTranslations()

  return (
    <section className="texture-paper relative bg-parchment py-16 sm:py-20">
      <Container className="relative z-10">
        <ScrollReveal>
          <SectionHeading
            title={t('home.menuTeaserTitle')}
            subtitle={t('home.menuTeaserSubtitle')}
          />
        </ScrollReveal>

        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {(['starters', 'mains', 'desserts'] as const).map((cat) => (
            <ScrollReveal key={cat}>
              <Card variant="cream" hover>
                <h3 className="text-olive-deep text-center text-[length:var(--text-card)] font-normal">
                  {t(`menu.${cat}`)}
                </h3>
                <ul className="mt-4 space-y-2 text-center text-wood-medium">
                  {placeholderMenu[cat].map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </Card>
            </ScrollReveal>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Button href="/menu" variant="secondary">
            {t('common.seeMenu')}
          </Button>
        </div>
      </Container>
    </section>
  )
}
