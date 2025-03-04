'use client'

import { Box, Button, Typography, useMediaQuery, useTheme } from '@mui/material'
import { useEffect } from 'react'

import Container from '@/components/Container'

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  const theme = useTheme()
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true
  })

  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <Box
      sx={{
        width: 1,
        height: 1,
        overflow: 'hidden'
      }}
    >
      <Container paddingX={0} paddingY={0} maxWidth={{ sm: 1, md: 1236 }}>
        <Box display={'flex'} flexDirection={{ xs: 'column', md: 'row' }} position={'relative'}>
          <Box width={1} order={{ xs: 2, md: 1 }} display={'flex'} alignItems={'center'}>
            <Container>
              <Box>
                <Typography variant='h1' component={'h1'} align={isMd ? 'left' : 'center'} sx={{ fontWeight: 700 }}>
                  Error
                </Typography>
                <Typography variant='h6' component='p' color='text.secondary' align={isMd ? 'left' : 'center'}>
                  Something went wrong!
                </Typography>
                <Box marginTop={4} display={'flex'} justifyContent={{ xs: 'center', md: 'flex-start' }}>
                  <Button onClick={() => reset()} variant='contained' color='primary' size='large'>
                    Try again
                  </Button>
                </Box>
              </Box>
            </Container>
          </Box>
          <Box
            sx={{
              flex: { xs: '0 0 100%', md: '0 0 50%' },
              position: 'relative',
              maxWidth: { xs: '100%', md: '50%' },
              order: { xs: 1, md: 2 },
              minHeight: { xs: 'auto', md: 'calc(100vh - 58px)' }
            }}
          >
            <Box
              sx={{
                width: { xs: 1, md: '50vw' },
                height: '100%',
                position: 'relative'
              }}
            >
              <Box
                sx={{
                  width: '100%',
                  height: '100%',
                  overflow: 'hidden'
                }}
              >
                <Box
                  sx={{
                    overflow: 'hidden',
                    left: '0%',
                    width: 1,
                    height: 1,
                    position: { xs: 'relative', md: 'absolute' },
                    clipPath: {
                      xs: 'none',
                      md: 'polygon(10% 0%, 100% 0, 100% 100%, 0% 100%)'
                    },
                    shapeOutside: {
                      xs: 'none',
                      md: 'polygon(10% 0%, 100% 0, 100% 100%, 0% 100%)'
                    }
                  }}
                >
                  <Box
                    sx={{
                      height: { xs: 'auto', md: 1 },
                      '& img': {
                        objectFit: 'cover'
                      }
                    }}
                  >
                    <Box
                      component={'img'}
                      loading='lazy'
                      src={'/images/not-found-img.png'}
                      alt={'error-page'}
                      height={{ xs: 'auto', md: 1 }}
                      maxHeight={{ xs: 300, md: 1 }}
                      width={1}
                      maxWidth={1}
                      sx={{
                        filter: theme.palette.mode === 'dark' ? 'brightness(0.7)' : 'none'
                      }}
                    />
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}
