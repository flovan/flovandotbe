import { useEffect, useRef } from 'react'
import { interpolate } from 'flubber'

import { shuffleArray } from '../lib/array'
import BlobShape, {
  blobPaths,
  BlobProps,
  rectangleBlobPaths,
} from './BlobShape'

// Same curve as the d3 transitions this replaced
const easeCubicInOut = (t: number) =>
  t < 0.5 ? 4 * t ** 3 : 1 - (-2 * t + 2) ** 3 / 2

/**
 * Blob component that morphs in between several paths in a randomized order.
 *
 * It starts from the path `BlobShape` renders, so it takes over from the static
 * fallback without a visible change. Only the rest of the paths are shuffled.
 */
const Blob = (props: BlobProps) => {
  const pathRef = useRef<SVGPathElement>(null)

  useEffect(() => {
    const [first, ...rest] =
      props.type === 'rectangle' ? rectangleBlobPaths : blobPaths
    const paths = [first, ...shuffleArray(rest)]
    let index = 0
    let frame = 0

    const morph = () => {
      const interpolator = interpolate(
        paths[index],
        paths[(index + 1) % paths.length],
      )
      // anywhere from 7 to 11 seconds
      const duration = (Math.round(Math.random() * 4) + 7) * 1000
      let start: number | undefined

      const step = (now: number) => {
        start ??= now
        const progress = Math.min((now - start) / duration, 1)
        pathRef.current?.setAttribute(
          'd',
          interpolator(easeCubicInOut(progress)),
        )

        if (progress < 1) {
          frame = requestAnimationFrame(step)
        } else {
          index = (index + 1) % paths.length
          morph()
        }
      }

      frame = requestAnimationFrame(step)
    }

    morph()

    return () => {
      cancelAnimationFrame(frame)
    }
    // The paths are picked once per mount
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return <BlobShape {...props} pathRef={pathRef} />
}

export default Blob
