import { Script } from 'gatsby'

const Assets = () => (
  <>
    <link
      rel="preload"
      href="/fonts/SpaceGrotesk.woff2"
      as="font"
      crossOrigin="anonymous"
    />
    <link
      rel="preload"
      href="/svg/sprite.svg"
      as="image"
      crossOrigin="anonymous"
    />
    <Script
      src="https://cloud.umami.is/script.js"
      data-website-id="6023396a-5ef0-4d77-8a57-50330d3af849"
    />
  </>
)

export default Assets
