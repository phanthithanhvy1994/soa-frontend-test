'use client'
import { useApplicationContext } from '@/shareComponents/ApplicationContext'

import BannerSection from '@/shareComponents/BannerSection'
import BusyCalendar from '@/shareComponents/BusyCalendar'
import CarouselComponent from '@/shareComponents/CarouselComponent'
import CaseGrid from '@/shareComponents/CaseGrid'
import ExperienceSection from '@/shareComponents/ExperienceSection'
import FullScreenHeroWithImageSlider from '@/shareComponents/FullScreenHeroWithImageSlider'
import MapComponenLoading from '@/shareComponents/MapComponenLoading'
import TitleComponentWithMockData from '@/shareComponents/TitleComponent'
import { Box } from '@mui/material'
import dynamic from 'next/dynamic'

const DynamicMap = dynamic(() => import('@/shareComponents/MapComponent'), {
  ssr: false,
  loading: () => <MapComponenLoading />
})

const HomeComponent = () => {
  const { data } = useApplicationContext()
  return (
    <>
      <FullScreenHeroWithImageSlider bgColor='alternate.main' />
      <CaseGrid {...data.bloc_1} />
      <DynamicMap {...data.bloc_2} carte_point={data.carte_point} />
      <BusyCalendar {...data.bloc_2_2} />
      <CarouselComponent {...data.bloc_3} />
      <Box>
        <ExperienceSection {...data.bloc_4} />
      </Box>
      <TitleComponentWithMockData {...data.bloc_5} />
      <BannerSection {...data.bloc_6} />
    </>
  )
}

export default HomeComponent
