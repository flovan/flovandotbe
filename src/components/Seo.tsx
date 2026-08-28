import { PropsWithChildren } from 'react'

import { useSiteMetadata } from '../hooks/useSiteMetaData'

export interface Alternate {
  hrefLang: string
  path: string
}

type SEOProps = PropsWithChildren<{
  title?: string
  description?: string
  pathname?: string
  alternates?: Array<Alternate>
}>

const SEO = ({
  title,
  description,
  pathname,
  alternates,
  children,
}: SEOProps) => {
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
      <link rel="canonical" href={seo.url} />
      {alternates?.map(({ hrefLang, path }) => (
        <link
          key={hrefLang}
          rel="alternate"
          hrefLang={hrefLang}
          href={`${siteUrl}${path}`}
        />
      ))}
      {children}
    </>
  )
}

export default SEO
