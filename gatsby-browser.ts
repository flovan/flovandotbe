import { DOMAttributes, DOMElement } from 'react'
import { Renderer } from 'react-dom'
import { Container, createRoot } from 'react-dom/client'
import { GatsbyBrowser } from 'gatsby'

import './src/styles/global.css'

// Fix some scroll-after-navigate issues
// See https://github.com/gatsbyjs/gatsby/issues/38201
export const shouldUpdateScroll: GatsbyBrowser['shouldUpdateScroll'] = ({
  routerProps: { location },
  getSavedScrollPosition,
}) => {
  window.history.scrollRestoration = 'manual'

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  const currentPosition = getSavedScrollPosition(location, location.key)
  const { hash } = window.location

  // If we're targeting an element, scroll to it with a delay
  if (hash !== '') {
    const element = document.getElementById(hash.replace('#', ''))
    if (element != null) {
      window.setTimeout(() => {
        element.scrollIntoView()
      }, 0)
      return false
    }
  }

  // Otherwise, use the position but with a delay
  if (currentPosition === undefined) {
    window.scrollTo(0, 0)
  } else {
    const [x, y] = currentPosition
    window.setTimeout(() => {
      window.requestAnimationFrame(() => {
        window.scrollTo(x, y)
      })
    }, 0)
  }

  return false
}

// Prevent multiple issues with React hydration
// See https://github.com/gatsbyjs/gatsby/discussions/36232#discussioncomment-6145675
export const replaceHydrateFunction: GatsbyBrowser['replaceHydrateFunction'] =
  () => {
    return ((
      element: DOMElement<DOMAttributes<Element>, Element>,
      container: Container,
    ) => {
      const root = createRoot(container)
      root.render(element)
    }) as Renderer
  }
