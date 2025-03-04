import { Container } from '@/shareComponents'
import { Box, Skeleton } from '@mui/material'

type LoadingProps = {
  height: number
}

export const Loading = ({ height }: LoadingProps) => {
  return (
    <Container>
      <Box sx={{ width: '100%', height }}>
        <Skeleton />
        <Skeleton animation='wave' />
        <Skeleton animation={false} />
      </Box>
    </Container>
  )
}
