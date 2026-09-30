import type { GatsbyConfig } from 'gatsby'
import adapter from 'gatsby-adapter-netlify'

const config: GatsbyConfig = {
  // Netlify's build otherwise installs this on the fly on every run
  adapter: adapter(),
  siteMetadata: {
    title: 'Flovan',
    siteUrl: 'https://flovan.be',
    description: 'Webdesign & development studio',
  },
  graphqlTypegen: {
    typesOutputPath: `./src/types/gatsby.d.ts`,
  },
  plugins: [
    'gatsby-plugin-remove-generator',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/images`,
        name: 'images',
      },
    },
    {
      resolve: 'gatsby-plugin-sharp',
      options: {
        defaults: {
          formats: ['auto', 'webp'],
          placeholder: 'blurred',
          quality: 80,
          breakpoints: [500, 640, 768, 1024, 1280, 1536],
        },
      },
    },
    'gatsby-transformer-sharp',
    `gatsby-plugin-image`,
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Flovan',
        short_name: 'Flovan',
        start_url: '/',
        display: 'minimal-ui',
        icon: 'src/images/flovan-icon.png',
      },
    },
    {
      resolve: 'gatsby-plugin-sitemap',
      options: {
        excludes: [
          '/404',
          '/404/',
          '/404.html',
          '/dev-404-page',
          '/**/404',
          '/**/404/',
          '/**/404.html',
          '/**/dev-404-page',
        ],
      },
    },
    'gatsby-plugin-preact',
    'gatsby-plugin-svgr',
    '@skagami/gatsby-plugin-dark-mode',
    'gatsby-plugin-postcss',
    // 'gatsby-plugin-webpack-bundle-analyser-v2',
  ],
}

export default config
