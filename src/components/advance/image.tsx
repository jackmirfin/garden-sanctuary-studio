import type { ImgHTMLAttributes } from 'react'

type ImageProps = ImgHTMLAttributes<HTMLImageElement> & { fill?: boolean; priority?: boolean }

export default function Image({ fill, priority, className, ...props }: ImageProps) {
  return <img {...props} className={`${fill ? 'absolute inset-0 h-full w-full ' : ''}${className ?? ''}`} loading={priority ? 'eager' : 'lazy'} decoding="async" />
}