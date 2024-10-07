import { IGatsbyImageData } from 'gatsby-plugin-image/dist/src/components/gatsby-image.browser'

export type PropsWithClassName<P = unknown> = P & { className?: string }

export interface Project {
  title: string
  tags: Array<string>
  image: IGatsbyImageData
}
