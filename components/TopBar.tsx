import NavItem from '@/components/NavItem'
import MenuIcon from '@mui/icons-material/Menu'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import { alpha, useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'

interface Props {
  onSidebarOpen: () => void
  colorInvert?: boolean
  headersMapping: string[]
}

const Topbar = ({ onSidebarOpen, headersMapping }: Props): JSX.Element => {
  const theme = useTheme()
  const isLg = useMediaQuery(theme.breakpoints.up('lg'), {
    defaultMatches: true
  })

  return (
    <Box display={'flex'} alignItems={'center'} width={1} justifyContent={'space-between'}>
      <Box
        component='a'
        href='/'
        title='Page'
        sx={{ minWidth: 90, maxWidth: 180, display: 'flex', alignItems: 'center' }}
      >
        <img
          src='images/box-logo.png'
          alt='logo'
          style={{
            width: '100%',
            maxWidth: '180px',
            height: 'auto',
            minHeight: '35px',
            display: 'block'
          }}
          loading='eager'
        />
      </Box>

      <Box
        sx={{
          display: { xs: 'none', lg: 'flex' },
          alignItems: 'center',
          ml: 3,
          flexGrow: 1,
          gap: 3
        }}
      >
        {headersMapping.map((item, idx) => (
          <NavItem key={idx} title={item} href={item} id={`${item.toLowerCase().replace(/\s+/g, '-')}-page`} />
        ))}
      </Box>

      <Box sx={{ display: { xs: 'flex', lg: 'none' }, alignItems: 'center' }}>
        <Button
          onClick={onSidebarOpen}
          aria-label='Menu'
          variant='outlined'
          sx={{
            borderRadius: 2,
            minWidth: 'auto',
            padding: 1,
            borderColor: alpha(theme.palette.divider, 0.2)
          }}
        >
          <MenuIcon />
        </Button>
      </Box>
    </Box>
  )
}

export default Topbar
