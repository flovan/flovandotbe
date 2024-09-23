import {HTMLAttributes, PropsWithChildren} from "react"

import mergeClassName from "../../lib/merge-class-name"
import {PropsWithClassName} from "../../types/types"

type HeadingProps = PropsWithChildren<PropsWithClassName<{
  level: 1 | 2 | 3
}>>

const Heading = ({ level, className, children }: HeadingProps) => {
  const HeadingElement = `h${level}`

  let baseClassName: HTMLAttributes<HTMLElement>['className']
  switch (level) {
    // <h1>'s are purely there for SEO, and not meant to be visible to the visitor
    case 1:
      baseClassName = 'visually-hidden'
      break
    case 2:
      baseClassName = 'text-flovan-sm uppercase tracking-wider font-semibold title-line'
      break
    case 3:
      baseClassName = 'text-flovan-md font-normal'
      break
    default:
      throw new Error('Invalid Heading level. Can only use 1, 2 or 3.')
  }

  return (
    <HeadingElement className={mergeClassName(baseClassName, className)}>
      {children}
    </HeadingElement>
  )
}

export default Heading
