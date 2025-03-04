'use client'

import Container from '@/components/Container'
import { CheckCircle, EmojiEmotions, Handshake, Public, Visibility } from '@mui/icons-material'
import { Box, Card, CardContent, Grid, Typography } from '@mui/material'
import Image from 'next/image'
import useMediaQuery from '@mui/material/useMediaQuery'

interface Feature {
  icon: JSX.Element
  title: string
}

const features: Feature[] = [
  { icon: <CheckCircle fontSize='large' />, title: 'Authenticité' },
  { icon: <Handshake fontSize='large' />, title: 'Respect' },
  { icon: <Public fontSize='large' />, title: 'Diversité' },
  { icon: <Visibility fontSize='large' />, title: 'Personnalisation' },
  { icon: <EmojiEmotions fontSize='large' />, title: 'Confort' }
]

interface pictosItem {
  title: string
  description: string
  icon: any
}

interface ExperienceSectionProps {
  title: string
  subtitle: string
  text_title: string
  text: string
  pictos: pictosItem[]
}

const ExperienceSection: React.FC = ({ title, subtitle, text_title, text, pictos }: ExperienceSectionProps) => {
  const isMobile = useMediaQuery('(max-width:600px)')
  const newPictos = pictos.map((item, index) => ({
    ...item,
    icon: features[index]?.icon || item.icon
  }))

  return (
    <>
      {/* Background ảnh full width */}
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          backgroundImage: isMobile ? 'url("/images/ice_cream.png")' : 'none',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          py: isMobile ? 4 : 0
        }}
      >
        <Container>
          <Grid
            container
            alignItems='stretch'
            sx={{
              p: 4,
              backgroundColor: isMobile ? 'rgba(255, 255, 255, 0.8)' : 'transparent',
              borderRadius: isMobile ? '16px' : '0',
              boxShadow: isMobile ? '0 4px 8px rgba(0, 0, 0, 0.1)' : 'none'
            }}
          >
            <Grid item xs={12} md={8} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <Typography variant='h2' fontWeight='bold' color='#FF6B5B' gutterBottom>
                {title}
              </Typography>
              <Typography variant='h6' fontWeight='bold' color='#8B5C5C'>
                {subtitle}
              </Typography>
              <Typography variant='body1' fontWeight='bold' color='#8B5C5C' mt={2}>
                {text_title}
              </Typography>
              <Typography variant='body1'>{text}</Typography>
            </Grid>
            {!isMobile && (
              <Grid item xs={12} md={4} sx={{ display: 'flex', alignItems: 'center' }}>
                <Box
                  sx={{
                    position: 'relative',
                    width: '100%',
                    aspectRatio: '5/6',
                    borderRadius: '10px',
                    overflow: 'hidden'
                  }}
                >
                  <Image
                    src='/images/ice_cream.png'
                    alt='Ice Cream'
                    layout='fill'
                    objectFit='cover'
                    sizes='(max-width: 600px) 100vw, (max-width: 1200px) 80vw, 60vw'
                  />
                </Box>
              </Grid>
            )}
          </Grid>
        </Container>
      </Box>

      {/* Icon Section */}
      <Container>
        <Grid container spacing={2} justifyContent='center' sx={{ mt: 4 }}>
          {newPictos.map((feature, index) => (
            <Grid item key={index} xs={6} sm={4} md={2}>
              <Card sx={{ backgroundColor: 'transparent', textAlign: 'center', boxShadow: 'none' }}>
                <CardContent>
                  <Box sx={{ color: '#00BFA6', mb: 1 }}>{feature.icon}</Box>
                  <Typography variant='subtitle1' fontWeight='bold'>
                    {feature.title}
                  </Typography>
                  <Typography variant='body2' color='#aaa'>
                    {feature.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  )
}

export default ExperienceSection
