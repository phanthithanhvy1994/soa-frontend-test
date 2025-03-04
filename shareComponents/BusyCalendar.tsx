import { Container } from '@/shareComponents'
import TitleBlock from '@/shareComponents/TitleBlock'
import AttachFileIcon from '@mui/icons-material/AttachFile'
import { Box, Button, Grid, IconButton, TextField, Typography } from '@mui/material'
import useMediaQuery from '@mui/material/useMediaQuery'
import { useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

interface MultiDatePickerProps {
  title: string
  btn_1: string[]
  btn_2: string[]
  btn_3: string
  btn_4: string[]
  btn_5: string
  btn_6: string
}

const MultiDatePicker = ({ title, btn_1, btn_2, btn_3, btn_4, btn_5, btn_6 }: MultiDatePickerProps) => {
  const [selectedDates, setSelectedDates] = useState<Date[]>([])
  const isMobile = useMediaQuery('(max-width:600px)')
  const busyDates = [
    '2025-02-04',
    '2025-02-01',
    '2025-02-21',
    '2025-02-15',
    '2025-03-15',
    '2025-02-09',
    '2025-02-17',
    '2025-03-17'
  ].map(date => new Date(date))

  const handleDateChange = (date: Date | null) => {
    if (!date) return

    setSelectedDates(prev => {
      const exists = prev.some(d => d.toDateString() === date.toDateString())
      return exists ? prev.filter(d => d.toDateString() !== date.toDateString()) : [...prev, date]
    })
  }

  return (
    <Container>
      <TitleBlock title={title} subtitle='' />

      <div style={{ position: 'relative', fontFamily: 'Arial, sans-serif' }}>
        <Box className='custom-datepicker'>
          <DatePicker
            selected={null}
            onChange={handleDateChange}
            inline
            highlightDates={selectedDates}
            filterDate={date => {
              const today = new Date()
              const isBusy = busyDates.some(d => d.toDateString() === date.toDateString())
              const isPastMonth = date.getMonth() < today.getMonth() && date.getFullYear() <= today.getFullYear()

              return !isBusy && !isPastMonth
            }}
            dayClassName={date =>
              busyDates.some(d => d.toDateString() === date.toDateString()) || date.getMonth() < new Date().getMonth()
                ? 'date-busy'
                : 'date-available'
            }
            renderDayContents={(day, date) => {
              const isBusy = busyDates.some(d => d.toDateString() === date.toDateString())
              return (
                <div className='date-cell'>
                  <span>{day}</span>
                  {isBusy && !isMobile && <div className='date-label busy-label'>Busy</div>}
                  {!isBusy && !isMobile && <div className='date-label available-label'>Available</div>}
                </div>
              )
            }}
          />
        </Box>

        {/* Form Inputs */}
        <Grid container spacing={2} mt={2}>
          <Grid item xs={12}>
            <Box display='flex' alignItems='center' gap={2}>
              <Typography fontWeight='bold' minWidth={100}>
                {btn_1[0]}
              </Typography>
              <TextField fullWidth variant='outlined' placeholder={btn_1[1]} />
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box display='flex' alignItems='center' gap={2}>
              <Typography fontWeight='bold' minWidth={100}>
                {btn_2[0]}
              </Typography>
              <TextField fullWidth variant='outlined' placeholder={btn_2[1]} />
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box display='flex' alignItems='center' gap={2}>
              <Typography fontWeight='bold' minWidth={100}>
                {btn_3}
              </Typography>
              <TextField fullWidth variant='outlined' multiline rows={4} />
            </Box>
          </Grid>
          <Grid item xs={12} display='flex' alignItems='center'>
            <Box display='flex' alignItems='center' gap={2}>
              <Typography fontWeight='bold' minWidth={100}>
                {btn_4[0]}, {btn_4[1]}
              </Typography>
              <IconButton color='primary' component='label' sx={{ ml: 1 }}>
                <AttachFileIcon />
                <input type='file' hidden accept='.pdf' />
              </IconButton>
              <Typography variant='body2' sx={{ ml: 1 }}>
                (*{btn_4[2]})
              </Typography>
            </Box>
          </Grid>
        </Grid>

        {/* Buttons */}
        <Box display='flex' justifyContent='flex-end' mt={2} gap={1}>
          <Grid container spacing={1} width={isMobile ? '100%' : 'auto'}>
            <Grid item xs={6} sm='auto' display='flex'>
              <Button fullWidth={isMobile} variant='outlined' color='secondary'>
                {btn_5}
              </Button>
            </Grid>
            <Grid item xs={6} sm='auto' display='flex'>
              <Button
                fullWidth={isMobile}
                variant='contained'
                className='active'
                color='primary'
                endIcon={<span>↗</span>}
              >
                {btn_6}
              </Button>
            </Grid>
          </Grid>
        </Box>
      </div>
    </Container>
  )
}

export default MultiDatePicker
