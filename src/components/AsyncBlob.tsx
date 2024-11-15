import { lazy, Suspense } from 'react'

import { BlobProps } from './Blob'

const Blob = lazy(
  async () => import(/* webpackChunkName: "blob" */ '../components/Blob'),
)

/**
 * This component wraps around the core `Blob` component and turns it into an asynchronously loading version of itself.
 *
 * The benefit of doing this is that we can effectively split out a bundle chunk which will include both `d3` and
 * `flubber`, two of the biggest libraries in the app bundle.
 */
const AsyncBlob = (blobProps: BlobProps) => {
  return (
    <Suspense fallback={null}>
      <Blob {...blobProps} />
    </Suspense>
  )
}

export default AsyncBlob
