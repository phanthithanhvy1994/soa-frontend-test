import { Theme, responsiveFontSizes } from '@mui/material'
import { ComponentsOverrides, createTheme } from '@mui/material/styles'
import { palette } from './palette'
import shadows from './shadows'

const mediaQuery = '@media only screen and (max-width: 1681px) and (min-width: 992px)'
const getTheme = (mode: string, direction?: 'rtl'): Theme =>
  responsiveFontSizes(
    createTheme({
      direction,
      palette: palette,
      shadows: shadows(mode),
      typography: {
        fontFamily: '"Inter", sans-serif',
        button: {
          textTransform: 'none',
          fontWeight: 'medium' as React.CSSProperties['fontWeight'],
          [mediaQuery]: {
            fontSize: '1rem'
          }
        },
        h1: {
          // fontSize: '3.75rem',
          fontWeight: 700
        },
        h2: {
          fontSize: '2.75rem',
          fontWeight: 600
        },
        h3: {
          fontSize: '2.0243rem',
          fontWeight: 500
        },
        h4: {
          fontSize: '1.25rem',
          fontWeight: 500
        },
        h6: {
          fontWeight: 400
        },
        body1: {
          [mediaQuery]: {
            fontSize: '1.1rem'
          }
        },
        body2: {
          [mediaQuery]: {
            fontSize: '1rem'
          }
        },
        subtitle2: {
          [mediaQuery]: {
            fontSize: '1rem'
          }
        }
      },
      zIndex: {
        appBar: 1200,
        drawer: 1300
      },
      components: {
        MuiButton: {
          styleOverrides: {
            root: {
              borderRadius: 20, // Bo góc cho nút
              fontWeight: 600,
              padding: "10px 20px",
              transition: "all 0.3s ease",
              background: "#ffffff",
              "&:hover": {
                backgroundColor: "#FF5733", // Màu hover
                transform: "scale(1.05)", // Hiệu ứng phóng to nhẹ khi hover
                color: '#ffffff'
              },
              "&:active": {
                backgroundColor: "#D12D1A", // Màu khi bấm giữ
                transform: "scale(0.98)", // Hiệu ứng nhấn xuống
              },
              "&.active": {
                backgroundColor: "#FF5733",
                color: '#FFFFFF',
                border: '1px solid #FF5733'
              },
              "&.active:hover": {
                backgroundColor: "#FFFFFF",
                color: '#FF5733'
              },
            },
          },
        },
        MuiInputBase: {
          styleOverrides: {
            root: {
              borderRadius: 5
            }
          } as ComponentsOverrides['MuiInputBase']
        },
        MuiOutlinedInput: {
          styleOverrides: {
            root: {
              borderRadius: 5
            },
            input: {
              borderRadius: 5
            }
          } as ComponentsOverrides['MuiOutlinedInput']
        },
        MuiCard: {
          styleOverrides: {
            root: {
              borderRadius: 8
            }
          } as ComponentsOverrides['MuiCard']
        },
        MuiChip: {
          styleOverrides: {
            root: {
              [mediaQuery]: {
                fontSize: '0.95rem'
              }
            }
          }
        }
      }
    })
  )

export default getTheme
