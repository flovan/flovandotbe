import {RenderBodyArgs} from "gatsby"

export const onRenderBody = ({ setHeadComponents }: RenderBodyArgs) => {
  setHeadComponents([
    <link
      rel="preload"
      href="/fonts/SpaceGrotesk.woff2"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
      key="SpaceGrotesk"
    />,
    <link
      rel="preload"
      href="/svg/sprite.svg"
      as="image"
      type="text/svg+xml"
      crossOrigin="anonymous"
      key="svgSprite"
    />,
  ])
}
