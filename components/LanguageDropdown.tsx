'use client'
import { useApplicationContext } from '@/shareComponents/ApplicationContext'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import { Box, Button, Menu, MenuItem } from '@mui/material'
import { alpha, styled, useTheme } from '@mui/material/styles'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

const StyledButton = styled(Button)(() => ({}))

export const LanguageDropdown = () => {
  const { locales, locale } = useApplicationContext()
  const route = useRouter()
  const theme = useTheme()
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)

  const handleClick = event => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const onSelect = (locale: string) => {
    document.cookie = `NEXT_LOCALE=${locale};path=/`
    route.push(`/${locale}`)
  }

  const data = locales.filter(r => r !== locale)

  return (
    <Box>
      <StyledButton
        id='language-button'
        aria-controls={open ? 'language-menu' : undefined}
        aria-haspopup='true'
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        endIcon={<KeyboardArrowDownIcon />}
        sx={{
          borderRadius: 2,
          border: '1px solid',
          height: '30px',
          borderColor: alpha(theme.palette.divider, 0.2)
        }}
      >
        {locale.toUpperCase()}
      </StyledButton>
      <Menu
        id='language-menu'
        anchorEl={anchorEl}
        open={!!data.length && open}
        onClose={handleClose}
        MenuListProps={{ 'aria-labelledby': 'language-button', className: 'w-[64px]' }}
      >
        {data.map(r => {
          return (
            <MenuItem key={r} onClick={() => onSelect(r)} className='text-sm'>
              {r.toUpperCase()}
            </MenuItem>
          )
        })}
      </Menu>
    </Box>
  )
}
