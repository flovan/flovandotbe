module.exports = {
  siteMetadata: {
    title: 'Flovan',
    siteUrl: `https://flovan.be`,
    description: 'Web design and development studio',
  },
  graphqlTypegen: true,
  plugins: [
    'gatsby-plugin-remove-generator',
    // {
    //   resolve: 'gatsby-source-filesystem',
    //   options: {
    //     path: `${__dirname}/src/pages`,
    //     name: 'pages',
    //   },
    // },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/images`,
        name: 'images',
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Flovan`,
        short_name: `Flovan`,
        start_url: `/`,
        background_color: `#F957FF`,
        theme_color: `#F957FF`,
        display: `minimal-ui`,
        icon: `src/images/flovan-icon.png`,
      },
    },
    // {
    //   resolve: 'gatsby-transformer-remark',
    //   options: {
    //     plugins: [
    //       {
    //         resolve: 'gatsby-remark-relative-images',
    //         options: {
    //           name: 'uploads',
    //         },
    //       },
    //       {
    //         resolve: 'gatsby-remark-images',
    //         options: {
    //           // It's important to specify the maxWidth (in pixels) of
    //           // the content container as this plugin uses this as the
    //           // base for generating different widths of each image.
    //           maxWidth: 2048,
    //         },
    //       },
    //       {
    //         resolve: 'gatsby-remark-copy-linked-files',
    //         options: {
    //           destinationDir: 'static',
    //         },
    //       },
    //     ],
    //   },
    // },
    // {
    //   resolve: `gatsby-transformer-remark`,
    //   options: {
    //     plugins: [],
    //   },
    // },
    // {
    //   resolve: 'gatsby-plugin-react-svg',
    //   options: {
    //     rule: {
    //       include: /img/,
    //     },
    //   },
    // },
    // {
    //   resolve: 'gatsby-plugin-netlify-cms',
    //   options: {
    //     modulePath: `${__dirname}/src/cms/cms.ts`,
    //   },
    // },
    'gatsby-plugin-postcss',
    // 'gatsby-plugin-netlify-cms', // make sure to keep it last in the array
  ],
}
