'use server'
import { cookies } from 'next/headers'

export const fetchData = async <T>(
  endpoint: string,
  options: RequestInit = {},
  localeReqquest?: string
): Promise<T | undefined> => {
  try {
    const headers: HeadersInit = {
      ...options.headers,
      Authorization: `Bearer ${process.env.BEARER_TOKEN}`
    }
    const cookieStore = cookies()
    let locale = cookieStore.get('NEXT_LOCALE')?.value
    if (localeReqquest) {
      locale = localeReqquest
    }

    if (!locale) locale = 'en'

    endpoint = endpoint.includes('?') ? `${endpoint}&locale=${locale}` : `${endpoint}?locale=${locale}`

    let next = {}

    if (!options.cache || !['no-store', 'no-cache'].includes(options.cache)) {
      next = { next: { revalidate: 3600 } }
    }

    const response = await fetch(`${process.env.API_URL}${endpoint}`, {
      ...options,
      ...next,
      headers
    })
    if (!response.ok) {
      throw new Error(`API ${endpoint} request failed with status ${response.status}`)
    }
    return await response.json()
  } catch (error) {
    console.error(error)
  }
}
