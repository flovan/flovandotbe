import { HTMLAttributes, HTMLProps, PropsWithChildren } from 'react'

import { mergeClassName } from '../../lib/class-name'
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

  let baseClassName: HTMLAttributes<HTMLElement>['className'] = 'font-title '
  switch (level) {
    case 1:
      baseClassName += 'text-flovan-lg'
      break
    case 2:
      baseClassName += 'text-flovan-sm uppercase tracking-wider'
      break
    case 3:
      baseClassName += 'text-flovan-md'
      break
    default:
      throw new Error('Invalid Heading level. Can only use 1, 2 or 3.')
  }

  return (
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    <HeadingElement
      className={mergeClassName(baseClassName, className)}
      {...props}
    >
      {children}
    </HeadingElement>
  )
}

export default Heading
