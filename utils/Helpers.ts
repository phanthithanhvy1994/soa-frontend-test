import { GlobalSettings } from '@/app/layout'
import { ENDPOINTS } from '@/constants/Endpoint'
import { Page } from '@/types/navigation'
import { format, parseISO } from 'date-fns'
import type { Viewport } from 'next'
import { redirect } from 'next/navigation'
import { fetchData } from './ApiHelpers'

export const normalizeSlashes = (url?: string) => {
  if (!url) return url
  return url.replace(/(?<!:)\/\/+/g, '/')
}

export const convertStringToObject = (str): Viewport => {
  return str.split(',').reduce((acc, pair) => {
    const [key, value] = pair.split('=')
    const formattedKey = key.trim().replace(/-([a-z])/g, (match, p1) => p1.toUpperCase())
    const formattedValue = isNaN(value) ? value : Number(value)
    acc[formattedKey] = formattedValue
    return acc
  }, {})
}

export const buildSelectFields = (selectFields: string) => {
  const fields = selectFields.split(' ')
  let qs = ''
  Object.keys(fields).forEach((key, index) => {
    qs += `fields[${key}]=${fields[key]}${index < fields.length - 1 ? '&' : ''}`
  })
  return qs
}

export const buildPopulateQuery = (populateField: string, subFields?: string[]) => {
  let populate = subFields?.length ? '' : `populate[${populateField}][populate]=*`
  if (subFields?.length) {
    subFields.forEach(s => {
      const fields = s.split('.')
      populate += `&${`populate[${populateField}][populate]`}`
      fields.forEach(field => {
        populate += `[${field}][populate]`
      })
      populate += '=*'
    })
  }
  return populate
}

export const buildPopulateSelectFields = (populate: string, selectFields: string) => {
  const fields = selectFields.split(' ')
  let qs = ''
  Object.keys(fields).forEach((key, index) => {
    qs += `populate[${populate}][fields][${index}]=${fields[key]}${index < fields.length - 1 ? '&' : ''}`
  })
  return qs
}

export const buildPopulateFindOneQuery = (populate: string, fieldName: string, value: string) => {
  return `filters[${populate}][${fieldName}]=${value}`
}

export const buildFindOneQuery = (fieldName, value) => {
  return `filters[${fieldName}][$eq]=${value}`
}

export const buildSearchQuery = (fields: string[], value: string) => {
  let qs = ''
  Object.keys(fields).forEach((key, index) => {
    qs += `filters[$or][${index}][${fields[key]}][$contains]=${value}${index < fields.length - 1 ? '&' : ''}`
  })
  return qs
}

export const formatDate = (isoDateString: string, formatType: string): string | null => {
  try {
    const date = parseISO(isoDateString)
    return format(date, formatType)
  } catch (error) {
    console.error('Error: ', error)
    return null
  }
}

export const buildQueryPostByCategory = ({
  category,
  sort,
  page,
  pageSize
}: {
  category?: string
  sort?: string
  page?: number
  pageSize?: number
}) => {
  const query: string[] = [
    category && `filters[blogs_categories][slug]=${category}`,
    buildSelectFields('id title description slug createdTime'),
    buildPopulateSelectFields('thumbnail', 'url'),
    buildPopulateSelectFields('blogs_categories', 'slug'),
    sort && `sort[0]=createdTime:${sort}`,
    page && pageSize && `pagination[page]=${page}&pagination[pageSize]=${pageSize}`
  ].filter(Boolean)
  return query.join('&')
}
