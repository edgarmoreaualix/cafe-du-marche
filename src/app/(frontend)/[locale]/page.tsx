import { setRequestLocale } from 'next-intl/server'
import Hero from '@/components/home/Hero'
import DailyMenuPreview from '@/components/home/DailyMenuPreview'
import AboutTeaser from '@/components/home/AboutTeaser'
import ReservationCTA from '@/components/home/ReservationCTA'
import GalleryStrip from '@/components/home/GalleryStrip'
import PracticalInfo from '@/components/home/PracticalInfo'

type Props = {
  params: Promise<{ locale: string }>
}

export default async function HomePage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale)

  return (
    <>
      <Hero />
      <DailyMenuPreview />
      <AboutTeaser />
      <ReservationCTA />
      <GalleryStrip />
      <PracticalInfo />
    </>
  )
}
