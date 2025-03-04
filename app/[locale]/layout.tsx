import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Theme from '@/components/Theme'
import { ApplicationProvider } from '@/shareComponents/ApplicationContext'
import { cookies } from 'next/headers'

interface MainLayoutProps {
  children: React.ReactNode
  params: {
    locale: string
  }
}

export default async function MainLayout({ children }: Readonly<MainLayoutProps>) {
  const cookieStore = cookies()
  const initialTheme = cookieStore.get('themeMode')?.value || 'light'
  const locale = cookieStore.get('NEXT_LOCALE')?.value
  const availableLocales = process.env.AVAILABLE_LANGUAGE?.split(',') || []

  const response = await fetch(`http://api.test.soa-dev.net/api/v1/pages?lang=${locale}`, {
    cache: 'no-cache'
  })

  const dataRes = await response.json()
  const jsonData = dataRes[0]

  return (
    <ApplicationProvider locales={availableLocales} locale={locale} data={jsonData}>
      <Theme initialTheme={initialTheme}>
        <Header headersMapping={jsonData.head_menu} />
        {children}
        <Footer {...jsonData.footer} />
      </Theme>
    </ApplicationProvider>
  )
}
