import MenuOpenIcon from '@mui/icons-material/MenuOpen'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import { alpha, useTheme } from '@mui/material/styles'
import NavItem from './NavItemNav'

interface Props {
  headersMapping: string[]
  onClose: () => void
}

const SidebarNav = ({ headersMapping, onClose }: Props): JSX.Element => {
  const theme = useTheme()

  return (
    <Box display={'flex'} flexDirection={'column'} width={1}>
      <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'} width={1} paddingX={2} paddingY={1}>
        <Box display={'flex'} component='a' href='/' title='Company name' width={{ xs: 100, md: 120 }}>
          <img
            src='images/box-logo.png'
            alt='logo'
            width={0}
            height={0}
            sizes='100vw'
            style={{ width: 'auto', maxWidth: '180px', height: 'auto', minHeight: '35px' }}
          />
        </Box>
        <Box sx={{ display: { xs: 'flex' } }} alignItems={'center'}>
          <Button
            onClick={() => onClose()}
            aria-label='Menu'
            variant={'outlined'}
            sx={{
              borderRadius: 2,
              minWidth: 'auto',
              padding: 1,
              borderColor: alpha(theme.palette.divider, 0.2)
            }}
          >
            <MenuOpenIcon />
          </Button>
        </Box>
      </Box>
      <Box display='flex' justifyContent='center' paddingX={2} paddingY={2}>
        <Box>
          {headersMapping.map((item, idx) => (
            <Box key={idx}>
              <NavItem title={item} href={item} />
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  )
}

export default SidebarNav
