import { ComponentType } from 'react'
import { useTheme } from '@skagami/gatsby-plugin-dark-mode'
import { Link } from 'gatsby'

import mergeClassName from '../../lib/merge-class-name'
import { PropsWithClassName } from '../../types/types'
import Heading from '../ui/Heading'
import Container from './Container'

type FooterProps = PropsWithClassName<{
  topComponent?: ComponentType
}>

const Footer = ({ className, topComponent: TopComponent }: FooterProps) => {
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
            <Heading level={2}>Get in touch</Heading>
            <p className="text-flovan-md font-light">
              Ready to talk about your project?{' '}
              <a href="mailto:hello@flovan.be">Email me</a> or{' '}
              <a href="#todo">schedule a meeting</a>.
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
            Flovan Consulting BV &mdash; BE 0744.678.106
            <br />
            Veldstraat 15, 9750 Zingem, Belgium
          </p>
          <div className="flex gap-flovan-xs">
            <Link to="/code" className="text-flovan-sm">
              Code
            </Link>
            <button
              className="text-flovan-sm underline"
              onClick={handleThemeChangeClick}
            >
              {theme === 'dark' ? 'Light' : 'Dark'} mode
            </button>
          </div>
        </Container>
      </footer>
    </>
  )
}

export default Footer
