import {PropsWithChildren} from "react"

import Footer from "./Footer"
import Header from "./Header"

const Layout = ({ children }: PropsWithChildren) => (
  <div className="flex flex-col items-stretch min-h-screen">
    <Header className="relative z-20 pb-flovan-lg bg-background" />
    <main className="relative z-20 flex flex-col gap-flovan-lg flex-1 pb-flovan-lg bg-background rounded-bl-default rounded-br-default -mb-flovan-sm shadow-lg">
      {children}
    </main>
    <Footer />
  </div>
)

export default Layout
