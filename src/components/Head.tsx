import { TranslationProps } from '@herob191/gatsby-plugin-react-i18next'
import { HeadProps as GatsbyHeadProps } from 'gatsby'

import Assets from './Assets'
import SEO from './Seo'

interface HeadProps {
  localeEdges: Array<{ node: { ns: string; data: string } }>
  namespace: string
}

const seoTitleKey = 'seo-title'

/**
 * This `Head` component is intended to be exported from a Gatsby Page component (/src/pages) and acts as a fix to the
 * lack of i18n support in Gatsby Head.
 * See https://github.com/gatsbyjs/gatsby/issues/36458
 * And this workaround within that thread https://github.com/gatsbyjs/gatsby/issues/36458
 */
const Head = ({ localeEdges, namespace }: HeadProps) => {
  const dataLanguage = localeEdges.find(({ node }) => node.ns === namespace)
    ?.node.data

  let seoTitle: string = 'Flovan'

  if (dataLanguage !== undefined) {
    const parsedDataLanguage = JSON.parse(dataLanguage)
    const pageTitle = parsedDataLanguage[seoTitleKey]

    if (pageTitle !== undefined) {
      seoTitle += ` — ${parsedDataLanguage[seoTitleKey]}`
    }
  }

  return (
    <>
      <SEO title={seoTitle} />
      <Assets />
    </>
  )
}

export default Head