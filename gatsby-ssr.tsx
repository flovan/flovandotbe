import { RenderBodyArgs } from 'gatsby'

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
  ])
}
