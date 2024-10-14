import type { GatsbyConfig } from 'gatsby'

const config: GatsbyConfig = {
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
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/locales`,
        name: 'locale',
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
      resolve: '@herob191/gatsby-plugin-react-i18next',
      options: {
        localeJsonSourceName: 'locale', // set through `gatsby-source-filesystem`, see above
        languages: ['nl', 'en'],
        defaultLanguage: 'nl',
        siteUrl: 'http://localhost:8000/',
        generateDefaultLanguagePage: true,
        i18nextOptions: {
          interpolation: {
            escapeValue: false,
          },
        },
      },
    },
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
    'gatsby-plugin-svgr',
    '@skagami/gatsby-plugin-dark-mode',
    'gatsby-plugin-postcss',
    // 'gatsby-plugin-webpack-bundle-analyser-v2',
  ],
}

export default config
