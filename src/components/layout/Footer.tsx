import { useTheme } from '@skagami/gatsby-plugin-dark-mode'

import Heading from "../ui/Heading"
import Container from "./Container"

const Footer = () => {
  const [theme, toggleTheme] = useTheme()

  const handleThemeChangeClick = () => {
    toggleTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return (
    <>
      <div className="sticky bottom-0 z-10 bg-on-background pb-flovan-lg pt-[11.5rem] rounded-bl-default rounded-br-default -mb-flovan-sm shadow-lg">
        <Container>
          <Heading level={2}>Get in touch</Heading>
          <p className="text-flovan-md font-light">
            Ready to talk about your project? <a href="mailto:hello@flovan.be">Email me</a> or <a href="#todo">schedule a meeting</a>.
          </p>
           <button className="absolute right-flovan-sm bottom-flovan-sm" onClick={handleThemeChangeClick}>Toggle mode</button>
        </Container>
      </div>
      <footer className="sticky bottom-0 bg-pink-950 dark:bg-blue-950">
        <Container className="pt-[3.375rem] pb-flovan-sm">
          <p className="dark:text-blue-600 uppercase text-flovan-xs tracking-wider text-pink-200">Flovan is a trading name of Flovan Consulting BV &mdash; Veldstraat 15, 9750 Zingem, Belgium &mdash; BE 0744.678.106</p>
        </Container>
      </footer>
    </>
  )
}

export default Footer
