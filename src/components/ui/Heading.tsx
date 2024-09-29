import { HTMLAttributes, HTMLProps, PropsWithChildren } from 'react'

import mergeClassName from '../../lib/merge-class-name'
import { PropsWithClassName } from '../../types/types'

type HeadingProps = HTMLProps<HTMLHeadingElement> &
  PropsWithChildren<
    PropsWithClassName<{
      level: 1 | 2 | 3
      as?: string
    }>
  >

const Heading = ({
  level,
  className,
  children,
  as,
  ...props
}: HeadingProps) => {
  const HeadingElement = as ?? `h${level}`

  let baseClassName: HTMLAttributes<HTMLElement>['className']
  switch (level) {
    case 1:
      baseClassName = 'text-flovan-lg font-normal'
      break
    case 2:
      baseClassName =
        'text-flovan-sm uppercase tracking-wider font-semibold title-line'
      break
    case 3:
      baseClassName = 'text-flovan-md font-normal'
      break
    default:
      throw new Error('Invalid Heading level. Can only use 1, 2 or 3.')
  }

  return (
    <HeadingElement
      className={mergeClassName(baseClassName, className)}
      {...props}
    >
      {children}
    </HeadingElement>
  )
}

export default Heading
