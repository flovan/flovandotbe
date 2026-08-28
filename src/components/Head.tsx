import Assets from './Assets'
import SEO, { Alternate } from './Seo'

interface LocalesEdge {
  node: { ns: string; data: string }
}

/**
 * The context the i18n plugin adds to every page. It is typed in the plugin as
 * `PageContext` but not re-exported from its entry point, so it is restated
 * here with the fields we need.
 */
export interface I18nPageContext {
  language: string
  i18n: {
    languages: Array<string>
    defaultLanguage: string
    originalPath: string
  }
}

export interface HeadLocales {
  locales: {
    edges: Array<LocalesEdge>
  }
}

interface HeadProps {
  localeEdges: Array<LocalesEdge>
  namespace: string
  pageContext: I18nPageContext
}

/**
 * Every page exists unprefixed and under a prefix per language, because the
 * i18n plugin runs with `generateDefaultLanguagePage`. The unprefixed URL is
 * the one we point at: it is what visitors land on and what the sitemap lists,
 * so the default language canonicalises to it and never to its own prefix.
 */
const pathForLanguage = (
  { defaultLanguage, originalPath }: I18nPageContext['i18n'],
  language: string,
) => (language === defaultLanguage ? originalPath : `/${language}${originalPath}`)

const seoTitleKey = 'seo-title'

/**
 * This `Head` component is intended to be exported from a Gatsby Page component (/src/pages) and acts as a fix to the
 * lack of i18n support in Gatsby Head.
 * See https://github.com/gatsbyjs/gatsby/issues/36458
 * And this workaround within that thread https://github.com/gatsbyjs/gatsby/issues/36458
 */
const Head = ({ localeEdges, namespace, pageContext }: HeadProps) => {
  const { i18n, language } = pageContext

  const alternates: Array<Alternate> = [
    ...i18n.languages.map(alternateLanguage => ({
      hrefLang: alternateLanguage,
      path: pathForLanguage(i18n, alternateLanguage),
    })),
    { hrefLang: 'x-default', path: pathForLanguage(i18n, i18n.defaultLanguage) },
  ]

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
      <SEO
        title={seoTitle}
        pathname={pathForLanguage(i18n, language)}
        alternates={alternates}
      />
      <Assets />
    </>
  )
}

export default Head
