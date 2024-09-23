import {PropsWithChildren} from "react"
import {GatsbyLinkProps, Link} from "gatsby"

import PointyHandGraphic from '../../images/illustration-hand-point-right.svg'
import mergeClassName from "../../lib/merge-class-name"

type PointyLinkProps = Pick<GatsbyLinkProps<HTMLAnchorElement>, 'to'> & PropsWithChildren & {
  direction?: 'right' | 'down'
}

const PointyLink = ({children, direction = 'right', className, to}: PointyLinkProps) => {
  return (
    <Link
      className={mergeClassName('relative inline-flex text-flovan-sm tracking-wider uppercase font-bold px-flovan-sm justify-center items-center h-14 no-underline before:absolute before:rounded-full before:border-flovan-stroke before:w-full before:h-full', className)}
      to={to}
    >
        {children}
        <PointyHandGraphic className={mergeClassName("absolute left-full translate-x-flovan-stroke h-14 w-auto", direction === 'down' && 'rotate-90')} />
    </Link>
  )
}

export default PointyLink
