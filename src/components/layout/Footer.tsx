import { useTheme } from '@skagami/gatsby-plugin-dark-mode'
import { Link } from 'gatsby'

import mergeClassName from '../../lib/merge-class-name'
import { PropsWithClassName } from '../../types/types'
import Heading from '../ui/Heading'
import { Icon } from '../ui/Icon'
import Container from './Container'

const Footer = ({ className }: PropsWithClassName) => {
  const [theme, toggleTheme] = useTheme()

  const handleThemeChangeClick = () => {
    toggleTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return (
    <>
      <div
        className={mergeClassName(
          'sticky bottom-0 z-10 -mb-flovan-sm rounded-bl-default rounded-br-default bg-on-background pb-flovan-lg pt-[11.5rem] shadow-lg',
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
      <footer
        className={mergeClassName(
          'sticky bottom-0 bg-pink-950 dark:bg-blue-950',
          className,
        )}
      >
        <Container className="flex flex-col items-center justify-between gap-flovan-sm pb-flovan-sm pt-[3.375rem] sm:flex-row">
          <p className="text-flovan-xs uppercase tracking-wider text-pink-200 dark:text-blue-600">
            Flovan is a trading name of Flovan Consulting BV <br />
            Veldstraat 15, 9750 Zingem, Belgium &mdash; BE 0744.678.106
          </p>
          <div className="gap-flovan-xs flex">
            <Link
              to="/code"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-highlight no-underline"
              onClick={handleThemeChangeClick}
            >
              <span className="visually-hidden">
                Find out how this website was made
              </span>
              <Icon
                name="code"
                className="fill-on-primary"
                width={24}
                height={24}
              />
            </Link>
            <button
              className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-highlight"
              onClick={handleThemeChangeClick}
            >
              <span className="visually-hidden">Toggle visual mode</span>
              <Icon
                name={theme === 'dark' ? 'sun' : 'moon'}
                className="fill-on-primary"
                width={24}
                height={24}
              />
            </button>
          </div>
        </Container>
      </footer>
    </>
  )
}

export default Footer
