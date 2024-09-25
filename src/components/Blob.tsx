import { useEffect, useRef } from 'react'
import { select } from 'd3'
import { interpolate } from 'flubber'

import { shuffleArray } from '../lib/array'
import mergeClassName from '../lib/merge-class-name'
import { PropsWithClassName } from '../types/types'

const blobPaths = [
  'M53.1,-58C66.8,-51.7,74.6,-33.1,75.5,-15.2C76.4,2.7,70.3,19.9,60.1,32C49.9,44.1,35.5,51.1,20.1,57.9C4.6,64.7,-11.9,71.3,-29.1,69.5C-46.3,67.7,-64.2,57.6,-75.9,41.7C-87.6,25.8,-93,4.2,-89.1,-15.3C-85.2,-34.9,-72,-52.5,-55.6,-58.3C-39.2,-64.1,-19.6,-58.2,0,-58.3C19.7,-58.3,39.3,-64.3,53.1,-58Z',
  'M41.2,-54.8C50.1,-41.7,51.8,-25.5,54.4,-9.7C57.1,6.1,60.7,21.6,56.1,35C51.5,48.4,38.7,59.6,23.6,65.3C8.5,71,-8.7,71.2,-24.7,66.1C-40.8,61.1,-55.6,50.9,-66.8,36.3C-77.9,21.7,-85.4,2.7,-84.3,-16.9C-83.3,-36.4,-73.7,-56.4,-58.2,-68.4C-42.8,-80.3,-21.4,-84.2,-2.6,-81.1C16.2,-78,32.3,-67.9,41.2,-54.8Z',
  'M56.6,-65.6C70.5,-55.8,76.8,-35.3,78.7,-15.3C80.5,4.7,77.9,24.1,69,40.3C60.2,56.6,45.2,69.7,27.9,75.4C10.7,81.1,-8.8,79.3,-23.6,71.2C-38.4,63,-48.7,48.5,-53.2,34C-57.7,19.4,-56.6,4.8,-53.6,-8.9C-50.5,-22.7,-45.6,-35.6,-36.3,-46.1C-27.1,-56.6,-13.5,-64.8,3.9,-69.5C21.4,-74.1,42.8,-75.3,56.6,-65.6Z',
  'M48.1,-61.1C59.4,-47.8,63.5,-29.9,66,-12.2C68.5,5.5,69.3,23,61.3,34.1C53.3,45.1,36.5,49.7,19.6,57.4C2.6,65.2,-14.5,76,-30.9,74.5C-47.3,73.1,-63,59.3,-69.9,42.6C-76.8,26,-74.8,6.6,-69.1,-9.8C-63.4,-26.3,-54,-39.7,-41.9,-52.8C-29.7,-65.9,-14.9,-78.6,1.8,-80.7C18.4,-82.8,36.8,-74.3,48.1,-61.1Z',
  'M49.3,-61C61.3,-48.7,66.5,-30.7,70.6,-11.8C74.6,7,77.4,26.7,68.7,37.6C59.9,48.6,39.6,50.8,21.6,55.7C3.7,60.6,-12,68.2,-26.1,65.7C-40.2,63.1,-52.7,50.4,-63.4,35.1C-74.1,19.8,-82.9,1.8,-82.5,-17C-82,-35.7,-72.4,-55.3,-57.2,-67.1C-41.9,-78.8,-20.9,-82.7,-1.1,-81.4C18.7,-80,37.3,-73.4,49.3,-61Z',
]

const BlobSvg = ({ id }: { id: string }) => (
  <svg
    viewBox="0 0 200 200"
    width="100%"
    height="100%"
    xmlns="http://www.w3.org/2000/svg"
    role="presentation"
    aria-hidden
  >
    <path
      id={id}
      className="fill-on-background"
      transform="translate(100 100)"
    />
  </svg>
)

const Blob = ({ id, className }: PropsWithClassName<{ id: string }>) => {
  const pathIndex = useRef(0)
  const paths = useRef(shuffleArray(blobPaths))

  const setNextPathIndex = () => {
    pathIndex.current = (pathIndex.current + 1) % paths.current.length
  }

  const morph = () => {
    const interpolator = interpolate(
      paths.current[pathIndex.current],
      paths.current[pathIndex.current + 1] ?? paths.current[0],
    )

    select(`#${id}`)
      .transition()
      .duration(8000)
      .attrTween('d', () => interpolator)
      .on('end', () => {
        setNextPathIndex()
        morph()
      })
  }

  useEffect(morph, [])

  return (
    <div className={mergeClassName(className, 'pointer-events-none')}>
      <BlobSvg id={id} />
    </div>
  )
}

export default Blob
