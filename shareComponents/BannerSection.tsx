'use client'

import Container from '@/components/Container'
import { Box, Button, Typography } from '@mui/material'
import Image from 'next/image'

interface BannerSectionProps {
  title: string
  subtitle: string
  text: string
  button: string
}

const BannerSection = ({ title, subtitle, text, button }: BannerSectionProps) => {
  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        height: { xs: 400, md: 600 },
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        overflow: 'hidden'
      }}
    >
      {/* Background Image */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 0
        }}
      >
        <Image src='/images/banner_section8.png' alt='Banner' fill style={{ objectFit: 'cover' }} priority />
      </Box>

      {/* Gradient Overlay */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'linear-gradient(to bottom, rgba(255,255,255,0.8), rgba(255,255,255,0.3))'
        }}
      />

      {/* Content */}
      <Container maxWidth='md' sx={{ position: 'relative', zIndex: 2 }}>
        <Typography variant='h3' fontWeight='bold'>
          {title}
        </Typography>
        <Typography variant='h4' fontWeight='500' mt={1} mb={2}>
          {subtitle}
        </Typography>
        <Typography variant='body1' maxWidth={600} margin='auto' mb={3}>
          {text}
        </Typography>
        <Button variant='contained' sx={{ px: 4, py: 1.5 }} className='active'>
          {button}
        </Button>
      </Container>
    </Box>
  )
}

export default BannerSection
