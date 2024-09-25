import { useTheme } from '@skagami/gatsby-plugin-dark-mode'

import mergeClassName from '../../lib/merge-class-name'
import { PropsWithClassName } from '../../types/types'
import Heading from '../ui/Heading'
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
          <button
            className="absolute bottom-flovan-sm right-flovan-sm"
            onClick={handleThemeChangeClick}
          >
            Toggle mode
          </button>
        </Container>
      </div>
      <footer
        className={mergeClassName(
          'sticky bottom-0 bg-pink-950 dark:bg-blue-950',
          className,
        )}
      >
        <Container className="pb-flovan-sm pt-[3.375rem]">
          <p className="text-flovan-xs uppercase tracking-wider text-pink-200 dark:text-blue-600">
            Flovan is a trading name of Flovan Consulting BV &mdash; Veldstraat
            15, 9750 Zingem, Belgium &mdash; BE 0744.678.106
          </p>
        </Container>
      </footer>
    </>
  )
}

export default Footer
