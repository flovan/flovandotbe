import { PropsWithChildren } from 'react'
import { GatsbyLinkProps, Link } from 'gatsby'

import PointyHandGraphic from '../../images/illustration-hand-point-right.svg'
import mergeClassName from '../../lib/merge-class-name'

type PointyLinkProps = Pick<GatsbyLinkProps<HTMLAnchorElement>, 'to'> &
  PropsWithChildren & {
    direction?: 'right' | 'down'
  }

const PointyLink = ({
  children,
  direction = 'right',
  className,
  to,
}: PointyLinkProps) => {
  return (
    <Link
      className={mergeClassName(
        'hover:text-on-primary-secondary group relative inline-flex h-14 items-center justify-center gap-10 pl-flovan-sm text-flovan-sm font-bold uppercase tracking-wider no-underline transition-colors',
        // Styles for rounded outline around children
        'hover:before:border-on-primary-secondary before:absolute before:left-0 before:right-24 before:h-full before:rounded-full before:border-flovan-stroke before:transition-all hover:before:scale-110',
        className,
      )}
      to={to}
    >
      {children}
      <PointyHandGraphic
        className={mergeClassName(
          'h-14 w-auto transition-transform group-hover:translate-x-3',
          direction === 'down' && 'rotate-90',
        )}
      />
    </Link>
  )
}

export default PointyLink
