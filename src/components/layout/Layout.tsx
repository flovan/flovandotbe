import { ComponentType, PropsWithChildren } from 'react'

import Footer from './Footer'
import Header from './Header'

type LayoutProps = PropsWithChildren<{
  footerComponent?: ComponentType
}>

const Layout = ({ children, footerComponent }: LayoutProps) => (
  <div className="flex min-h-screen max-w-[100vw] flex-col items-stretch overflow-x-hidden pt-flovan-sm">
    <Header className="relative z-40 px-flovan-sm md:px-flovan-base lg:px-flovan-md" />
    <main className="relative z-20 -mb-flovan-sm flex flex-1 flex-col gap-flovan-lg rounded-bl-default rounded-br-default bg-background px-flovan-sm py-flovan-md md:px-flovan-base md:pb-flovan-lg lg:px-flovan-md xl:gap-flovan-xl">
      {children}
    </main>
    <Footer
      className="px-flovan-sm md:px-flovan-base lg:px-flovan-md"
      topComponent={footerComponent}
    />
  </div>
)

export default Layout
