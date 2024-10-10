import {
  Link,
  Trans,
  useTranslation,
} from '@herob191/gatsby-plugin-react-i18next'
import { graphql } from 'gatsby'

import Assets from '../components/Assets'
import Blob from '../components/Blob'
import Container from '../components/layout/Container'
import Layout from '../components/layout/Layout'
import SEO from '../components/Seo'
import Heading from '../components/ui/Heading'

const NotFoundPage = () => {
  const { t } = useTranslation('404')
  return (
    <Layout>
      <Container className="relative grid grid-cols-1 gap-flovan-lg md:grid-cols-3 md:gap-flovan-base lg:gap-flovan-md">
        <div className="relative z-10 col-span-2">
          <div className="prose">
            <Heading level={1}>
              {t(
                'Hmm, looks like the page you are trying to access does not exist.',
              )}
            </Heading>
            <p>
              <Trans>
                I’m afraid that you will have to{' '}
                <Link to="/">go back to the homepage</Link>.
              </Trans>
            </p>
          </div>
        </div>
        <Blob
          id="404-blob"
          className="absolute left-full top-0 h-[900px] w-[900px] -translate-x-1/2 -translate-y-1/3"
        />
      </Container>
    </Layout>
  )
}

export const Head = () => {
  const { t } = useTranslation('404')
  return (
    <>
      <SEO title={`Flovan — ${t('Page not found')}`} />
      <Assets />
    </>
  )
}

export const query = graphql`
  query CodePage($language: String!) {
    locales: allLocale(
      filter: { ns: { in: ["common", "404"] }, language: { eq: $language } }
    ) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`

export default NotFoundPage
