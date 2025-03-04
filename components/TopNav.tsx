import Box from '@mui/material/Box'
import { LanguageDropdown } from './LanguageDropdown'

interface Props {
  colorInvert?: boolean
}

const TopNav = ({}: Props): JSX.Element => {
  return (
    <Box display={'flex'} justifyContent={'flex-end'} alignItems={'center'}>
      <LanguageDropdown />
    </Box>
  )
}

export default TopNav
