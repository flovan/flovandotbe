import { useTranslation } from '@herob191/gatsby-plugin-react-i18next'
import { graphql } from 'gatsby'

import Layout from '../components/layout/Layout'

const NotFoundPage = () => {
  const { t } = useTranslation('404')
  return <Layout>{t('Page not found')}</Layout>
}

// export const query = graphql`
//   query NotFoundPage($language: String!) {
//     locales: allLocale(
//       filter: { ns: { in: ["common", "404"] }, language: { eq: $language } }
//     ) {
//       edges {
//         node {
//           ns
//           data
//           language
//         }
//       }
//     }
//   }
// `

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
