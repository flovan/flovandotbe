import { PropsWithChildren } from 'react'

import mergeClassName from '../../lib/merge-class-name'
import { PropsWithClassName } from '../../types/types'

const Container = ({
  children,
  className,
}: PropsWithChildren<PropsWithClassName>) => (
  <div
    className={mergeClassName(
      className,
      'mx-auto w-full max-w-screen-xl 2xl:max-w-screen-2xl',
    )}
  >
    {children}
  </div>
)

export default Container
