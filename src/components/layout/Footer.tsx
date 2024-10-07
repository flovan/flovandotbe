import { ComponentType } from 'react'
import {
  Link,
  Trans,
  useTranslation,
} from '@herob191/gatsby-plugin-react-i18next'
import { useTheme } from '@skagami/gatsby-plugin-dark-mode'
import { graphql } from 'gatsby'

import { mergeClassName } from '../../lib/class-name'
import { PropsWithClassName } from '../../types/types'
import Heading from '../ui/Heading'
import Container from './Container'

type FooterProps = PropsWithClassName<{
  topComponent?: ComponentType
}>

const Footer = ({ className, topComponent: TopComponent }: FooterProps) => {
  const { t } = useTranslation('common')
  const [theme, toggleTheme] = useTheme()

  const handleThemeChangeClick = () => {
    toggleTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return (
    <>
      {TopComponent === undefined ? (
        <div
          className={mergeClassName(
            'slide-shadow sticky bottom-0 z-10 -mb-flovan-sm rounded-bl-default rounded-br-default bg-on-background pb-flovan-lg pt-[11.5rem]',
            className,
          )}
        >
          <Container>
            <Heading level={2} className="title-line">
              {t('Get in touch')}
            </Heading>
            <p className="text-flovan-md font-light">
              <Trans>
                Ready to talk about your project?
                <br />
                <a href="mailto:hello@flovan.be">Email me</a> or{' '}
                <a href="https://calendar.app.google/W5pG4bLAJH9re5j37">
                  schedule a meeting
                </a>
                .
              </Trans>
            </p>
          </Container>
        </div>
      ) : (
        <TopComponent className={className} />
      )}
      <footer
        className={mergeClassName(
          'sticky bottom-0 bg-pink-950 dark:bg-blue-950',
          className,
        )}
      >
        <Container className="flex flex-col items-center justify-between gap-flovan-sm pb-flovan-sm pt-[3.375rem] text-pink-200 dark:text-blue-600 sm:flex-row">
          <p className="text-flovan-xs uppercase tracking-wider">
            <Trans>
              Flovan Consulting BV — BE 0744.678.106
              <br />
              Veldstraat 15, 9750 Zingem, Belgium
            </Trans>
          </p>
          <div className="flex gap-flovan-xs">
            <Link to="/code" className="text-flovan-sm">
              {t('Code')}
            </Link>
            <button
              className="text-flovan-sm underline"
              onClick={handleThemeChangeClick}
            >
              {theme === 'dark' ? t('Light mode') : t('Dark mode')}
            </button>
          </div>
        </Container>
      </footer>
    </>
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

export default Footer
