'use client'
import { createContext, ReactNode, useContext } from 'react'

interface ApplicationContext {
  locales: string[]
  locale: string
  data: any
}

const ApplicationContext = createContext(null)

interface ApplicationProviderProps extends ApplicationContext {
  children: ReactNode
}

export function ApplicationProvider({ children, locale, locales, data }: ApplicationProviderProps) {
  return <ApplicationContext.Provider value={{ locales, locale, data }}>{children}</ApplicationContext.Provider>
}

export function useApplicationContext(): ApplicationContext {
  return useContext(ApplicationContext)
}
