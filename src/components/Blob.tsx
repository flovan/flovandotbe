import { useEffect, useRef } from 'react'
import { select } from 'd3'
import { interpolate } from 'flubber'

import { shuffleArray } from '../lib/array'
import { mergeClassName } from '../lib/class-name'
import { PropsWithClassName } from '../types/types'

const blobPaths = [
  'M53.1,-58C66.8,-51.7,74.6,-33.1,75.5,-15.2C76.4,2.7,70.3,19.9,60.1,32C49.9,44.1,35.5,51.1,20.1,57.9C4.6,64.7,-11.9,71.3,-29.1,69.5C-46.3,67.7,-64.2,57.6,-75.9,41.7C-87.6,25.8,-93,4.2,-89.1,-15.3C-85.2,-34.9,-72,-52.5,-55.6,-58.3C-39.2,-64.1,-19.6,-58.2,0,-58.3C19.7,-58.3,39.3,-64.3,53.1,-58Z',
  'M41.2,-54.8C50.1,-41.7,51.8,-25.5,54.4,-9.7C57.1,6.1,60.7,21.6,56.1,35C51.5,48.4,38.7,59.6,23.6,65.3C8.5,71,-8.7,71.2,-24.7,66.1C-40.8,61.1,-55.6,50.9,-66.8,36.3C-77.9,21.7,-85.4,2.7,-84.3,-16.9C-83.3,-36.4,-73.7,-56.4,-58.2,-68.4C-42.8,-80.3,-21.4,-84.2,-2.6,-81.1C16.2,-78,32.3,-67.9,41.2,-54.8Z',
  'M56.6,-65.6C70.5,-55.8,76.8,-35.3,78.7,-15.3C80.5,4.7,77.9,24.1,69,40.3C60.2,56.6,45.2,69.7,27.9,75.4C10.7,81.1,-8.8,79.3,-23.6,71.2C-38.4,63,-48.7,48.5,-53.2,34C-57.7,19.4,-56.6,4.8,-53.6,-8.9C-50.5,-22.7,-45.6,-35.6,-36.3,-46.1C-27.1,-56.6,-13.5,-64.8,3.9,-69.5C21.4,-74.1,42.8,-75.3,56.6,-65.6Z',
  'M48.1,-61.1C59.4,-47.8,63.5,-29.9,66,-12.2C68.5,5.5,69.3,23,61.3,34.1C53.3,45.1,36.5,49.7,19.6,57.4C2.6,65.2,-14.5,76,-30.9,74.5C-47.3,73.1,-63,59.3,-69.9,42.6C-76.8,26,-74.8,6.6,-69.1,-9.8C-63.4,-26.3,-54,-39.7,-41.9,-52.8C-29.7,-65.9,-14.9,-78.6,1.8,-80.7C18.4,-82.8,36.8,-74.3,48.1,-61.1Z',
  'M49.3,-61C61.3,-48.7,66.5,-30.7,70.6,-11.8C74.6,7,77.4,26.7,68.7,37.6C59.9,48.6,39.6,50.8,21.6,55.7C3.7,60.6,-12,68.2,-26.1,65.7C-40.2,63.1,-52.7,50.4,-63.4,35.1C-74.1,19.8,-82.9,1.8,-82.5,-17C-82,-35.7,-72.4,-55.3,-57.2,-67.1C-41.9,-78.8,-20.9,-82.7,-1.1,-81.4C18.7,-80,37.3,-73.4,49.3,-61Z',
]

const rectangleBlobPaths = [
  'M1341.14,129.746C1214.7,47.995 1049.9,-71.349 452.447,153.075C250.253,229.026 148.936,301.57 108.289,511.969C5.96,1041.64 1064.1,848.109 1239.05,741.829C1416.8,633.844 1462.39,218.697 1341.14,129.746Z',
  'M668.84,143.745C1030.96,63.104 1344.92,-160.693 1417.56,426.545C1430.64,532.281 1398.24,870.535 1059.28,820.439C660.04,761.435 228.414,957.921 71.274,722.893C8.793,629.444 -113.332,290.426 294.058,208.252C360.524,194.845 480.574,184.602 512.49,180.828C574.713,173.471 613.832,155.994 668.84,143.745Z',
  'M169.849,233.145C354.861,-60.421 581.718,22.538 990.565,30.503C1104.45,32.721 1365.35,2.708 1400.66,252.919C1407.43,300.878 1343.62,866.963 796.511,886.81C615.415,893.379 490.141,837.114 213.705,833.034C147.973,832.064 -176.362,782.494 169.849,233.145Z',
  'M388.939,167.535C20.668,251.701 -151.03,730.04 230.915,850.839C373.681,895.993 516.801,825.893 1002.52,848.047C1125.7,853.665 1383.44,914.6 1422.56,580.56C1472.77,151.91 1044.31,-22.164 810.752,58.245C603.994,129.427 602.03,118.836 388.939,167.535Z',
  'M1392.32,263.544C1419.73,353.199 1474.51,748.904 1139.16,835.072C1098.09,845.624 960.692,880.929 609.326,848.594C581.22,846.007 529.535,841.251 277.326,729.199C262.637,722.673 7.676,524.14 24.06,293.267C52.964,-114.031 551.905,31.785 799.165,48.124C1027.8,63.231 1323.44,38.155 1392.32,263.544Z',
  'M717.058,845.562C1128.26,827.945 1230.23,900.613 1347.93,729.196C1419.35,625.183 1401.34,547.942 1392.64,192.989C1391.61,150.908 1354.55,74.347 1177.81,58.842C1122.01,53.947 783.956,13.625 502.825,32.577C154.443,56.062 7.955,56.394 38.664,383.646C65.688,671.633 92.378,811.505 296.302,869.314C402.047,899.29 498.401,854.93 717.058,845.562Z',
]

type BlobSvgProps = PropsWithClassName<{ id: string }>

const BlobSvg = ({ id, className }: BlobSvgProps) => (
  <svg
    viewBox="0 0 200 200"
    xmlns="http://www.w3.org/2000/svg"
    role="presentation"
    className={className}
    preserveAspectRatio="none"
    aria-hidden
  >
    <path
      id={id}
      transform="translate(100 100)"
      style={{ strokeWidth: '1px' }}
    />
  </svg>
)

const RectangleBlobSvg = ({ id, className }: BlobSvgProps) => (
  <svg
    viewBox="0 0 1440 900"
    xmlns="http://www.w3.org/2000/svg"
    role="presentation"
    className={className}
    preserveAspectRatio="none"
    aria-hidden
  >
    <path id={id} style={{ strokeWidth: '5px' }} />
  </svg>
)

type BlobProps = PropsWithClassName<{
  id: string
  type?: 'rectangle' | 'default'
  outline?: boolean
}>

/**
 * Blob component that morphs in between several paths in a randomized order.
 *
 * Here's a fun little side-note: the D3 transition does not stop running when this component unmounts.
 * Even `interrupt`ing it does not seem to do anything... So, very ugly workaround: we keep track of the unmounted
 * state, and when the transition ends, we only move on to the next path if the component is still mounted.
 *
 * Yikes.
 *
 * This does fix an issue where rapidly navigating back and forth caused blobs to flicker because of parallel
 * transitions.
 */
const Blob = ({
  id,
  className,
  type = 'default',
  outline = false,
}: BlobProps) => {
  const pathIndex = useRef(0)
  const paths = useRef(
    shuffleArray(type === 'default' ? blobPaths : rectangleBlobPaths),
  )
  const unmounted = useRef(false)

  const BlobElement = type === 'default' ? BlobSvg : RectangleBlobSvg

  const setNextPathIndex = () => {
    pathIndex.current = (pathIndex.current + 1) % paths.current.length
  }

  const morph = async () => {
    const interpolator = interpolate(
      paths.current[pathIndex.current],
      paths.current[pathIndex.current + 1] ?? paths.current[0],
    )

    const transition = select(`#${id}`)
      .transition()
      // anywhere from 7 to 11 second
      .duration((Math.round(Math.random() * 4) + 7) * 1000)
      .attrTween('d', () => interpolator)

    await transition.end()

    if (!unmounted.current) {
      setNextPathIndex()
      void morph()
    }
  }

  useEffect(() => {
    void morph()
    return () => {
      unmounted.current = true
    }
  }, [])

  return (
    <BlobElement
      id={id}
      className={mergeClassName(
        outline ? 'fill-none stroke-highlight' : 'fill-on-background',
        className,
      )}
    />
  )
}

export default Blob
