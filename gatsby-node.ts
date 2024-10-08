// import { fmImagesToRelative } from 'gatsby-remark-relative-images'
// import { createFilePath } from 'gatsby-source-filesystem'
// import path from 'path'

import { CreateBabelConfigArgs } from 'gatsby'

// Get rid of the "React is not defined" error.
// See https://github.com/gatsbyjs/gatsby/issues/28657  and https://github.com/
export const onCreateBabelConfig = ({ actions }: CreateBabelConfigArgs) => {
  actions.setBabelPreset({
    name: 'babel-preset-gatsby',
    options: {
      reactRuntime: 'automatic',
    },
  })
}

// exports.createPages = ({ actions, graphql }) => {
//   const { createPage } = actions
//
//   return graphql(`
//     {
//       allMarkdownRemark(limit: 1000) {
//         edges {
//           node {
//             id
//             fields {
//               slug
//             }
//             frontmatter {
//               templateKey
//             }
//           }
//         }
//       }
//     }
//   `).then(async result => {
//     if (result.errors !== undefined) {
//       result.errors.forEach(e => {
//        console.error(e.toString())
//       })
//       return Promise.reject(result.errors)
//     }
//
//     const posts = result.data.allMarkdownRemark.edges
//
//     posts.forEach(edge => {
//       const id = edge.node.id
//       createPage({
//         path: edge.node.fields.slug,
//         component: path.resolve(
//           `src/templates/${String(edge.node.frontmatter.templateKey)}.tsx`,
//         ),
//         // additional data can be passed via context
//         context: {
//           id,
//         },
//       })
//     })
//   })
// }
//
// exports.onCreateNode = ({ node, actions, getNode }) => {
//   const { createNodeField } = actions
//   fmImagesToRelative(node) // convert image paths for gatsby images
//
//   if (node.internal.type === `MarkdownRemark`) {
//     const value = createFilePath({ node, getNode })
//     createNodeField({
//       name: `slug`,
//       node,
//       value,
//     })
//   }
// }
