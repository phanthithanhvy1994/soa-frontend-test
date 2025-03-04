import Alert, { AlertColor } from '@mui/material/Alert'
import AlertTitle from '@mui/material/AlertTitle'
import Snackbar from '@mui/material/Snackbar'

interface NotifyProps {
  open: boolean
  onClose: (_event?: React.SyntheticEvent | Event, _reason?: string) => void
  message: { title?: string; description?: string }
  severity?: AlertColor
  autoHideDuration?: number
}

export default function Notify({ open, onClose, message, severity = 'success', autoHideDuration = 3000 }: NotifyProps) {
  return (
    <Snackbar
      open={open}
      autoHideDuration={autoHideDuration}
      onClose={onClose}
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
    >
      <Alert onClose={onClose} severity={severity} sx={{ width: '100%' }}>
        <AlertTitle>{message.title}</AlertTitle>
        {message.description}
      </Alert>
    </Snackbar>
  )
}
