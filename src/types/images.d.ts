declare module '*.bmp'
declare module '*.gif'
declare module '*.jpeg'
declare module '*.jpg'
declare module '*.png'
declare module '*.tiff'
declare module '*.webp'

declare module '*.svg' {
  import { FC, SVGProps } from 'react'
  export const ReactComponent: FC<SVGProps<SVGElement>>
}
