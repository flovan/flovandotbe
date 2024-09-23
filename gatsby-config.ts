module.exports = {
  siteMetadata: {
    title: 'Flovan',
    siteUrl: `https://flovan.be`,
    description: 'Web design and development studio',
  },
  graphqlTypegen: true,
  plugins: [
    'gatsby-plugin-remove-generator',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/images`,
        name: 'images',
      },
    },
    `gatsby-plugin-image`,
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
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
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /images/,
        },
      },
    },
    '@skagami/gatsby-plugin-dark-mode',
    'gatsby-plugin-postcss',
  ],
}
