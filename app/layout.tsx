import { Logo } from '@/types/logo'
import localFont from 'next/font/local'
import './globals.css'

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
  preload: true
})

const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
  preload: true
})

export const dynamic = 'force-dynamic'

interface RootLayoutProps {
  children: React.ReactNode
}

export interface GlobalSettings {
  Header: (Logo | null)[]
  structuredDataMarkup: JSON
  googleAnalytics?: string
  isRTLlanguage: boolean
  headersMapping: string[]
}

export default async function RootLayout({ children }: Readonly<RootLayoutProps>) {
  return (
    <html lang='en'>
      <head>
        <link as='icon' rel='preload' href='/icons/uk-flag.png' type='image/x-icon' sizes='32x32' />
        <link as='icon' rel='preload' href='/icons/uk-flag.png' type='image/x-icon' sizes='48x48' />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased m-0`}>{children}</body>
    </html>
  )
}
