import {RenderBodyArgs} from "gatsby"

export const onRenderBody = ({ setHeadComponents }: RenderBodyArgs) => {
  setHeadComponents([
    <link
      rel="preload"
      href="/fonts/Outfit-Variable.woff2"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
      key="OutfitFont"
    />,
    <link
      rel="preload"
      href="/fonts/CrimsonText-Italic.woff2"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
      key="crimsonTextFont"
    />,
  ])
}
