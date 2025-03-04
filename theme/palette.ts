import { PaletteMode } from '@mui/material'

export const palette = {
  primary: {
    main: "#E74426", // Màu chính (nút đỏ)
    contrastText: "#292929", // Màu chữ trên nền primary
  },
  secondary: {
    main: "#FFC3B8", // Màu phụ (màu nền nhẹ hơn)
  },
  text: {
    primary: "#292929", // Màu chữ chính
    secondary: "#E74426", // Màu chữ phụ
  },
  background: {
    default: "#1D1D1D", // Nền tối
    paper: "#FFFFFF", // Nền thẻ
  },
  alternate: {
    main: "#FFDDC1", // Thêm màu alternate
    dark: "#FFA07A",
    light: "#FFF4E5",
  },
}

export const light = {
  alternate: {
    main: '#f7faff',
    dark: '#edf1f7'
  },
  cardShadow: 'rgba(23, 70, 161, .11)',
  mode: 'light' as PaletteMode,
  primary: {
    main: '#377dff',
    light: '#467de3',
    dark: '#2f6ad9',
    contrastText: '#fff'
  },
  secondary: {
    light: '#ffb74d',
    main: '#f9b934',
    dark: '#FF9800',
    contrastText: 'rgba(0, 0, 0, 0.87)'
  },
  text: {
    primary: '#1e2022',
    secondary: '#677788'
  },
  divider: 'rgba(0, 0, 0, 0.12)',
  background: {
    paper: '#ffffff',
    default: '#ffffff',
    level2: '#f5f5f5',
    level1: '#ffffff'
  }
}

export const dark = {
  alternate: {
    main: '#1a2138',
    dark: '#151a30'
  },
  cardShadow: 'rgba(0, 0, 0, .11)',
  common: {
    black: '#000',
    white: '#fff'
  },
  mode: 'dark' as PaletteMode,
  primary: {
    main: '#1976d2',
    light: '#2196f3',
    dark: '#0d47a1',
    contrastText: '#fff'
  },
  secondary: {
    light: '#FFEA41',
    main: '#FFE102',
    dark: '#DBBE01',
    contrastText: 'rgba(0, 0, 0, 0.87)'
  },
  text: {
    primary: '#EEEEEF',
    secondary: '#AEB0B4'
  },
  divider: 'rgba(255, 255, 255, 0.12)',
  background: {
    paper: '#222B45',
    default: '#222B45',
    level2: '#333',
    level1: '#2D3748'
  }
}
