import Assets from './Assets'
import SEO from './Seo'

interface HeadProps {
  title?: string
  pathname: string
}

/**
 * This `Head` component is intended to be exported from a Gatsby Page
 * component (/src/pages), so every page gets the same title format, canonical
 * link and assets.
 */
const Head = ({ title, pathname }: HeadProps) => {
  const seoTitle = title === undefined ? 'Flovan' : `Flovan — ${title}`

  return (
    <>
      <html lang="en" />
      <SEO title={seoTitle} pathname={pathname} />
      <Assets />
    </>
  )
}

export default Head
