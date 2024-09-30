import Layout from '../components/layout/Layout'

const NotFoundPage = () => {
  return <Layout>Page not found</Layout>
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

export default NotFoundPage
