import { Link, useTranslation } from '@herob191/gatsby-plugin-react-i18next'
import { graphql } from 'gatsby'

import { PropsWithClassName } from '../../types/types'
import { Icon } from '../ui/Icon'
import MenuLink from '../ui/MenuLink'
import Container from './Container'

const Header = ({ className }: PropsWithClassName) => {
  const { t } = useTranslation('common')

  return (
    <header className={className}>
      <Container className="flex items-center justify-between">
        <Link to="/" className="no-underline" activeClassName="*:fill-primary">
          <Icon
            name="logo-flovan"
            className="fill-on-primary"
            width={26}
            height={19}
            aria-label="Flovan"
          />
        </Link>
        <nav>
          <ul className="flex gap-8">
            <li>
              <MenuLink to="/info">{t('Info')}</MenuLink>
            </li>
            <li>
              <MenuLink to="/pricing">{t('Pricing')}</MenuLink>
            </li>
            <li>
              <MenuLink to="/contact">{t('Contact')}</MenuLink>
            </li>
          </ul>
        </nav>
      </Container>
    </header>
  )
}

export const query = graphql`
  query CodePage($language: String!) {
    locales: allLocale(
      filter: { ns: { in: ["common"] }, language: { eq: $language } }
    ) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`

export default Header
