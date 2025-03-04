'use client'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

interface Props {
  title: string
  href?: string
}

const NavItem = ({ title, href }: Props): JSX.Element => {
  return (
    <Box>
      <Accordion disableGutters elevation={0} sx={{ backgroundColor: 'transparent' }}>
        <AccordionSummary
          aria-controls='panel1a-content'
          id='panel1a-header'
          sx={{
            padding: 0,
            '& .MuiAccordionSummary-content': { flexGrow: 'unset' },
            justifyContent: 'flex-start',
            alignItems: 'center'
          }}
        >
          <Box component={'a'} href={href} sx={{ cursor: 'pointer', textDecoration: 'none' }}>
            <Typography fontWeight={400} color={'text.primary'}>
              {title}
            </Typography>
          </Box>
        </AccordionSummary>
      </Accordion>
    </Box>
  )
}

export default NavItem
