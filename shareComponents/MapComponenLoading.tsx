import { Container } from '@/shareComponents'
import TitleBlock from '@/shareComponents/TitleBlock'
import { Box } from '@mui/material'
import 'leaflet/dist/leaflet.css'

const MapComponenLoading = () => {
  return (
    <Box bgcolor={'alternate.main'}>
      <Container>
        <TitleBlock title='Titre Bloc 1' subtitle='Sous-titre Bloc 1' />
        <img src='/images/map.png' alt='Map' />
      </Container>
    </Box>
  )
}

export default MapComponenLoading
