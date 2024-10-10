import { RenderBodyArgs, Script } from 'gatsby'

export const onRenderBody = ({ setHeadComponents }: RenderBodyArgs) => {
  setHeadComponents([
    <link
      rel="preload"
      href="/fonts/SpaceGrotesk.woff2"
      as="font"
      crossOrigin="anonymous"
      key="SpaceGrotesk"
    />,
    <link
      rel="preload"
      href="/svg/sprite.svg"
      as="image"
      crossOrigin="anonymous"
      key="svgSprite"
    />,
    <Script
      src="https://cloud.umami.is/script.js"
      data-website-id="6023396a-5ef0-4d77-8a57-50330d3af849"
      key="umamiAnalytics"
    />,
  ])
}
