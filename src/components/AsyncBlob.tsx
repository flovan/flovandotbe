import { lazy, Suspense } from 'react'

import BlobShape, { BlobProps } from './BlobShape'

const Blob = lazy(
  async () => import(/* webpackChunkName: "blob" */ '../components/Blob'),
)

/**
 * This component wraps around the core `Blob` component and turns it into an asynchronously loading version of itself.
 *
 * The benefit of doing this is that we can effectively split out a bundle chunk which will include `flubber`, one of
 * the biggest libraries in the app bundle. Until it arrives, the static `BlobShape` stands in, so the blob is part of
 * the HTML instead of popping in once the chunk loads.
 */
const AsyncBlob = (blobProps: BlobProps) => {
  return (
    <Suspense fallback={<BlobShape {...blobProps} />}>
      <Blob {...blobProps} />
    </Suspense>
  )
}

export default AsyncBlob
