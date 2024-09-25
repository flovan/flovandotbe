import { PropsWithChildren } from 'react'

import Footer from './Footer'
import Header from './Header'

const Layout = ({ children }: PropsWithChildren) => (
  <div className="flex min-h-screen flex-col items-stretch">
    <Header className="relative z-40 px-flovan-sm md:px-flovan-md" />
    <main className="relative z-20 -mb-flovan-sm flex flex-1 flex-col gap-flovan-lg rounded-bl-default rounded-br-default bg-background px-flovan-sm py-flovan-md md:px-flovan-md md:py-flovan-lg">
      {children}
    </main>
    <Footer className="px-flovan-sm md:px-flovan-md" />
  </div>
)

export default Layout
