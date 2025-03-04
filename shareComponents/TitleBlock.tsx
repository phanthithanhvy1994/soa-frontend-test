import { Box, Divider, Typography } from '@mui/material'

const TitleBlock = ({ title, subtitle }) => {
  return (
    <Box display='flex' flexDirection='column' alignItems='center' my={4}>
      <Box display='flex' alignItems='center' width='100%'>
        <Divider sx={{ flexGrow: 1, border: '2px solid #BBB' }} />
        <Typography variant='h2' component='h1' mx={2} fontWeight='bold' color='orange'>
          {title}
        </Typography>
        <Divider sx={{ flexGrow: 1, border: '2px solid #BBB' }} />
      </Box>
      <Typography variant='subtitle1' color='textSecondary' mt={1}>
        {subtitle}
      </Typography>
    </Box>
  )
}

export default TitleBlock
