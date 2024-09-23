import {PropsWithChildren} from "react"

import mergeClassName from "../../lib/merge-class-name"
import {PropsWithClassName} from "../../types/types"

const Container = ({ children, className }: PropsWithChildren<PropsWithClassName>) => (
  <div className={mergeClassName(className, 'w-full max-w-screen-xl mx-auto')}>
    {children}
  </div>
)

export default Container
