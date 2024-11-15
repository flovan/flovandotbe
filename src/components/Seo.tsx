import { PropsWithChildren } from 'react'

import { useSiteMetadata } from '../hooks/useSiteMetaData'

type SEOProps = PropsWithChildren<{
  title?: string
  description?: string
  pathname?: string
}>

const SEO = ({ title, description, pathname, children }: SEOProps) => {
  const {
    title: defaultTitle,
    description: defaultDescription,
    siteUrl,
  } = useSiteMetadata()

  const seo = {
    title: title ?? defaultTitle,
    description: description ?? defaultDescription,
    url: `${siteUrl}${pathname ?? ``}`,
  }

  return (
    <>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:url" content={seo.url} />
      <meta name="twitter:description" content={seo.description} />
      {children}
    </>
  )
}

export default SEO
