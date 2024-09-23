import {PropsWithChildren} from "react"
import {GatsbyLinkProps, Link} from "gatsby"

type MenuLinkProps = Pick<GatsbyLinkProps<HTMLAnchorElement>, 'to'> & PropsWithChildren

const MenuLink = ({children, to}: MenuLinkProps) => (
  <Link
    className="relative font-semibold uppercase text-flovan-sm tracking-widest no-underline after:absolute after:top-6 after:left-1/2 after:-translate-x-1/2 after:hidden after:w-4 after:h-flovan-stroke after:rounded-full after:bg-primary hover:after:block"
    activeClassName="font-bold after:block"
    to={to}
  >
    {children}
  </Link>
)

export default MenuLink
