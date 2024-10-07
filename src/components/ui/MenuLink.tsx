import { PropsWithChildren } from 'react'
import { Link } from '@herob191/gatsby-plugin-react-i18next'
import { GatsbyLinkProps } from 'gatsby'

type MenuLinkProps = Pick<GatsbyLinkProps<HTMLAnchorElement>, 'to'> &
  PropsWithChildren

const MenuLink = ({ children, to }: MenuLinkProps) => (
  <Link
    className="relative text-flovan-sm font-semibold uppercase tracking-widest no-underline after:absolute after:left-1/2 after:top-6 after:hidden after:h-flovan-stroke after:w-4 after:-translate-x-1/2 after:rounded-full after:bg-primary hover:after:block"
    activeClassName="text-primary first:after:block"
    to={to}
  >
    {children}
  </Link>
)

export default MenuLink
