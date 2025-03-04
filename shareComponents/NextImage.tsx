'use client'
import Image, { ImageProps } from 'next/image'

export const NextImage = ({ src, ...props }: ImageProps) => {
  return <Image {...props} src={src} />
}
