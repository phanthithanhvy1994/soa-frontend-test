'use client'

import getTheme from '@/theme'
import CssBaseline from '@mui/material/CssBaseline'
import Paper from '@mui/material/Paper'
import { ThemeProvider } from '@mui/material/styles'
import AOS from 'aos'
import React, { useEffect, useState } from 'react'

export const useDarkMode = (initialTheme: string): [string, boolean] => {
  const [themeMode, setTheme] = useState(initialTheme)
  const [mountedComponent, setMountedComponent] = useState(false)

  useEffect(() => {
    setMountedComponent(true)
  }, [])

  return [themeMode, mountedComponent]
}

interface Props {
  children: React.ReactNode
  initialTheme: string
}

export default function Theme({ children, initialTheme }: Props): JSX.Element {
  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles && jssStyles.parentElement) {
      jssStyles.parentElement.removeChild(jssStyles)
    }

    AOS.init({
      once: true,
      delay: 50,
      duration: 500,
      easing: 'ease-in-out'
    })
  }, [])

  const [themeMode, mountedComponent] = useDarkMode(initialTheme)

  useEffect(() => {
    AOS.refresh()
  }, [mountedComponent, themeMode])

  return (
    <ThemeProvider theme={getTheme(themeMode)}>
      <CssBaseline />
      <Paper elevation={0}>{children}</Paper>
    </ThemeProvider>
  )
}
