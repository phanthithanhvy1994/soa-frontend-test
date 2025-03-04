'use client'

import { ArrowOutward, Instagram } from '@mui/icons-material'
import { Box, Card, CardActionArea, CardContent, Typography } from '@mui/material'

interface ImageCardProps {
  imageUrl: string
  author: string
  date: string
}

const CardItem: React.FC<ImageCardProps> = ({ author, date, imageUrl }) => {
  return (
    <Card sx={{ borderRadius: 3, overflow: 'hidden', boxShadow: 3 }}>
      <CardActionArea>
        <Box
          sx={{
            width: '100%', // Chiếm toàn bộ chiều rộng
            height: 0, // Chiều cao tự động
            paddingTop: '100%', // Giữ tỷ lệ 16:9
            position: 'relative'
            // overflow: 'hidden'
          }}
        >
          <img
            src={imageUrl}
            alt={author}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover'
            }}
          />
        </Box>
        <CardContent
          sx={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            backgroundColor: '#5C5C5C',
            color: 'white',
            p: 1.5
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Instagram fontSize='small' />
            <Typography variant='body2'>{author}</Typography>
          </Box>
          <ArrowOutward fontSize='small' />
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default CardItem
