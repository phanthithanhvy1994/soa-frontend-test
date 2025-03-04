import Container from '@/components/Container'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import { Box, Card, CardContent, CardMedia, IconButton, Link, Typography } from '@mui/material'
import useMediaQuery from '@mui/material/useMediaQuery'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'

const CustomPrevArrow = ({ onClick }: { onClick?: () => void }) => (
  <IconButton
    aria-label='Previous slide'
    onClick={onClick}
    sx={{
      position: 'absolute',
      left: '49%',
      bottom: '-50px',
      transform: 'translateX(-100%)',
      zIndex: 2,
      backgroundColor: 'background.paper'
    }}
  >
    <ArrowBackIosNewIcon />
  </IconButton>
)

const CustomNextArrow = ({ onClick }: { onClick?: () => void }) => (
  <IconButton
    aria-label='Next slide'
    onClick={onClick}
    sx={{
      position: 'absolute',
      bottom: '-50px',
      left: '51%',
      transform: 'translateX(0)',
      zIndex: 2,
      backgroundColor: 'background.paper'
    }}
  >
    <ArrowForwardIosIcon />
  </IconButton>
)

interface CarouselComponentProps {
  title: string
  more_info: string
  cases: Carousel[]
}

interface Carousel {
  category: string
  tagline: string
  description: string
  image: string
}

const CarouselComponent = ({ title, more_info, cases }: CarouselComponentProps) => {
  const isMobile = useMediaQuery('(max-width:600px)')

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: isMobile ? 2 : 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: isMobile ? null : <CustomNextArrow />,
    prevArrow: isMobile ? null : <CustomPrevArrow />,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } }
    ]
  }

  const newCarousel = cases.map((item, index) => ({
    ...item,
    image: item.image || `/images/Titre${index + 1}.png`
  }))

  return (
    <Container>
      <Box sx={{ p: 3 }}>
        <Typography variant='h5' sx={{ fontWeight: 'bold', mb: 2 }}>
          {title}
        </Typography>

        {!isMobile && (
          <Box sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', my: 1 }}>
            <Link
              href='#'
              sx={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 0.5,
                textDecoration: 'none',
                borderBottom: '1px solid #888',
                pb: '2px',
                mb:'10px',
                color: 'gray',
                cursor: 'pointer',
                '&:hover': { color: 'black', borderBottom: '1px solid black' }
              }}
            >
              <Typography variant='body2'>{more_info}</Typography>
              <ArrowForwardIcon fontSize='small' />
            </Link>
          </Box>
        )}

        <Box sx={{ position: 'relative' }}>
          <Slider {...settings} className={isMobile ? 'mobile-slider' : ''}>
            {newCarousel.map((item, index) => (
              <Box key={index} sx={{ border: 0, px: 1 }}>
                <Card
                  sx={{
                    maxWidth: 300,
                    mx: 'auto',
                    minHeight: 400,
                    display: 'flex',
                    flexDirection: 'column'
                  }}
                >
                  <CardMedia
                    component='img'
                    height='200'
                    image={item.image}
                    alt={item.tagline}
                    sx={{ objectFit: 'cover' }}
                  />
                  <CardContent
                    sx={{
                      flex: 1,
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between'
                    }}
                  >
                    <Typography variant='body2' sx={{ color: '#E86A33' }}>
                      {item.category}
                    </Typography>
                    <Typography
                      variant='h6'
                      sx={{ fontWeight: 'bold', minHeight: 50, display: 'flex', alignItems: 'center' }}
                    >
                      {item.tagline}
                    </Typography>
                    <Typography
                      variant='body2'
                      sx={{
                        mb: 1,
                        borderLeft: '1px solid #BBBBBB',
                        paddingLeft: '10px',
                        minHeight: 60,
                        display: 'flex',
                        alignItems: 'center'
                      }}
                    >
                      {item.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Box>
            ))}
          </Slider>
        </Box>
      </Box>
    </Container>
  )
}

export default CarouselComponent
