import SidebarNav from '@/components/SidebarNav'
import { Logo } from '@/types/logo'
import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'

interface Props {
  onClose: () => void
  open: boolean
  variant: 'permanent' | 'persistent' | 'temporary' | undefined
  headersMapping: string[]
}

const Sidebar = ({ open, variant, onClose, headersMapping }: Props): JSX.Element => {
  return (
    <Drawer
      anchor='left'
      onClose={() => onClose()}
      open={open}
      variant={variant}
      sx={{
        '& .MuiPaper-root': {
          width: '100%'
        }
      }}
    >
      <Box
        sx={{
          height: '100%',
          padding: 1
        }}
      >
        <SidebarNav headersMapping={headersMapping} onClose={onClose} />
      </Box>
    </Drawer>
  )
}

export default Sidebar
