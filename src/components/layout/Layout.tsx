import { ComponentType, PropsWithChildren, useEffect } from 'react'
import { useI18next } from '@herob191/gatsby-plugin-react-i18next'

import Footer from './Footer'
import Header from './Header'

type LayoutProps = PropsWithChildren<{
  footerComponent?: ComponentType
}>

const Layout = ({ children, footerComponent }: LayoutProps) => {
  const { language } = useI18next()

  useEffect(() => {
    document.documentElement.lang = language
  }, [language])

  return (
    <div className="flex min-h-screen max-w-[100vw] flex-col items-stretch overflow-x-clip pt-flovan-sm">
      <Header className="relative z-40 px-flovan-sm md:px-flovan-base lg:px-flovan-md" />
      <main className="relative z-20 -mb-flovan-sm flex flex-1 flex-col gap-flovan-lg rounded-bl-default rounded-br-default bg-background px-flovan-sm pb-flovan-md pt-flovan-base sm:pt-flovan-md md:px-flovan-base md:pb-flovan-lg lg:px-flovan-md xl:gap-flovan-xl">
        {children}
      </main>
      <Footer
        className="px-flovan-sm md:px-flovan-base lg:px-flovan-md"
        topComponent={footerComponent}
      />
    </div>
  )
}

export default Layout
