import { Link } from 'gatsby'

import { PropsWithClassName } from '../../types/types'
import { Icon } from '../ui/Icon'
import MenuLink from '../ui/MenuLink'
import Container from './Container'

const Header = ({ className }: PropsWithClassName) => (
  <header className={className}>
    <Container className="flex items-center justify-between">
      <Link to="/" className="no-underline" activeClassName="*:fill-primary">
        <Icon
          name="logo-flovan"
          className="fill-on-primary"
          width={26}
          height={19}
        />
      </Link>
      <nav>
        <ul className="flex gap-8">
          <li>
            <MenuLink to="/info">Info</MenuLink>
          </li>
          <li>
            <MenuLink to="/pricing">Pricing</MenuLink>
          </li>
          <li>
            <MenuLink to="/contact">Contact</MenuLink>
          </li>
        </ul>
      </nav>
    </Container>
  </header>
)

export default Header
