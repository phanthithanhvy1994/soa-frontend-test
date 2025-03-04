import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { useState } from 'react'

interface Props {
  title: string
  href?: string
  id: string
}

const NavItem = ({ title, href, id }: Props): JSX.Element => {
  let currentlyHovering = false
  const [anchorEl, setAnchorEl] = useState(null)

  const handleClick = event => {
    // Handle click if not disabled
    if (anchorEl !== event.currentTarget) {
      setAnchorEl(event.currentTarget)
    }
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleCloseHover = () => {
    currentlyHovering = false
    setTimeout(() => {
      if (!currentlyHovering) {
        handleClose()
      }
    }, 50)
  }

  return (
    <Box sx={{ height: '100%' }}>
      <Box
        component={'a'}
        href={href}
        display={'flex'}
        alignItems={'center'}
        aria-describedby={id}
        sx={{
          cursor: 'point',
          textDecoration: 'none',
          justifyContent: 'center',
          height: '100%',
          pointerEvents: 'auto'
        }}
        tabIndex={0}
        onClick={event => handleClick(event)}
        onMouseOver={event => handleClick(event)}
        onMouseLeave={handleCloseHover}
      >
        <Typography color={'white'}>{title}</Typography>
      </Box>
    </Box>
  )
}

export default NavItem
