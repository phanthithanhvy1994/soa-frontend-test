'use client'

import { Facebook, Instagram, YouTube } from '@mui/icons-material'
import { Box, Container, Divider, Grid, IconButton, Link, Typography } from '@mui/material'
import useMediaQuery from '@mui/material/useMediaQuery'

interface linkItem {
  name: string
  url: string
}

interface FooterProps {
  address: {
    name: string
    phone: string
    location: string
  }
  links: linkItem[]
}

const Footer = ({ address, links }: FooterProps) => {
  const isMobile = useMediaQuery('(max-width:600px)')

  return (
    <Box sx={{ bgcolor: '#542E1B', color: 'white', py: 4, borderTop: '4px solid #E8AF3C' }}>
      <Container>
        <Grid container spacing={4} textAlign={isMobile ? 'center' : 'left'}>
          <Grid item xs={12} md={4}>
            <Typography variant='h6'>{address.name}</Typography>
            <Typography>{address.phone}</Typography>
            <Typography>{address.location}</Typography>
          </Grid>

          <Grid item xs={12} md={4}>
            <ul style={{ listStyleType: 'none', padding: 0 }}>
              {links.map((item, ind) => {
                return (
                  <li key={ind}>
                    <Link underline='none' href={item.url} color='white' variant={'subtitle2'}>
                      {item.name}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </Grid>
          {isMobile && (
            <Grid container justifyContent='center'>
              <IconButton sx={{ color: 'white' }}>
                <Facebook />
              </IconButton>
              <IconButton sx={{ color: 'white' }}>
                <Instagram />
              </IconButton>
              <IconButton sx={{ color: 'white' }}>
                <YouTube />
              </IconButton>
            </Grid>
          )}
        </Grid>

        <Box mt={4} textAlign={isMobile ? 'center' : 'left'}>
          <Divider sx={{ bgcolor: 'white', my: 2 }} />
          <Box pt={2} display='flex' justifyContent={isMobile ? 'center' : 'space-between'} alignItems='center'>
            <Typography variant='body2'>&copy; BASIC 2024</Typography>
            {!isMobile && (
              <Box>
                <IconButton sx={{ color: 'white' }}>
                  <Facebook />
                </IconButton>
                <IconButton sx={{ color: 'white' }}>
                  <Instagram />
                </IconButton>
                <IconButton sx={{ color: 'white' }}>
                  <YouTube />
                </IconButton>
              </Box>
            )}
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default Footer
