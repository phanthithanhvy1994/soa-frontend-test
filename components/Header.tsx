'use client'

import Container from '@/components/Container'
import Sidebar from '@/components/Sidebar'
import TopBar from '@/components/TopBar'
import TopNav from '@/components/TopNav'
import { Box } from '@mui/material'
import AppBar from '@mui/material/AppBar'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import useScrollTrigger from '@mui/material/useScrollTrigger'
import clsx from 'clsx'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

interface HeaderProps {
  bgcolor?: string
  headersMapping: string[]
}

const Header = ({ bgcolor = 'transparent', headersMapping }: HeaderProps): JSX.Element => {
  const pathname = usePathname()
  const theme = useTheme()
  const isDesktop = useMediaQuery('(min-width:960px)')
  const isMd = useMediaQuery(theme.breakpoints.up(1025), {
    defaultMatches: true
  })

  const [openSidebar, setOpenSidebar] = useState(false)

  const handleSidebarOpen = (): void => {
    setOpenSidebar(true)
  }

  const handleSidebarClose = (): void => {
    setOpenSidebar(false)
  }

  const open = isMd ? false : openSidebar

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 76
  })

  let colorInvert = pathname === '/news'
  if (/\/blog\//.test(pathname)) {
    colorInvert = true
  }
  return (
    <>
      <div id='back-to-top-anchor' />
      <AppBar
        position={isDesktop ? 'fixed' : 'sticky'}
        sx={{
          top: 0,
          zIndex: 1100,
          backgroundColor: !colorInvert || (colorInvert && trigger) ? '#562C2CB2 !important' : bgcolor,
          backgroundImage: 'none',
          transition: 'all 0.3s ease-in-out'
        }}
        className={clsx('header', { 'bg-background-paper': isDesktop && trigger })}
        elevation={trigger ? 1 : 0}
      >
        <Container
          paddingY={trigger ? 0 : 1}
          sx={{
            transition: 'all 0.3s ease-in-out'
          }}
        >
          {!isDesktop && <TopNav colorInvert={trigger ? false : colorInvert} />}
          <Box display='flex' justifyContent='space-between' alignItems='center'>
            <TopBar
              onSidebarOpen={handleSidebarOpen}
              colorInvert={trigger ? false : colorInvert}
              headersMapping={headersMapping}
            />
            {isDesktop && <TopNav colorInvert={trigger ? false : colorInvert} />}
          </Box>
        </Container>
      </AppBar>

      <Container>
        <Sidebar onClose={handleSidebarClose} open={open} variant='temporary' headersMapping={headersMapping} />
      </Container>
    </>
  )
}

export default Header
