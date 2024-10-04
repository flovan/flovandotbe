import { HTMLProps, PropsWithChildren } from 'react'

import { mergeClassName } from '../../lib/class-name'
import { PropsWithClassName } from '../../types/types'

const Container = ({
  children,
  className,
  ...rest
}: PropsWithChildren<PropsWithClassName<HTMLProps<HTMLDivElement>>>) => (
  <div
    className={mergeClassName(
      className,
      'mx-auto w-full max-w-screen-xl 2xl:max-w-screen-2xl',
    )}
    {...rest}
  >
    {children}
  </div>
)

export default Container
