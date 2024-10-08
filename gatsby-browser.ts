import { ShouldUpdateScrollArgs } from 'gatsby'

import './src/styles/global.css'

// Fix some scroll-after-navigate issues
// See https://github.com/gatsbyjs/gatsby/issues/38201
export const shouldUpdateScroll = ({
  routerProps: { location },
  getSavedScrollPosition,
}: ShouldUpdateScrollArgs) => {
  window.history.scrollRestoration = 'manual'

  const currentPosition = getSavedScrollPosition(location, location.key)
  const { hash } = window.location

  // If we're targeting an element, scroll to it with a delay
  if (hash !== '') {
    const element = document.getElementById(hash.replace('#', ''))
    if (element != null) {
      window.setTimeout(() => {
        element.scrollIntoView()
      }, 0)
      return
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
