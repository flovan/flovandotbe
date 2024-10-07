const defaultLanguage = 'nl'
process.env.NODE_ENV = 'test'

module.exports = {
  presets: ['babel-preset-gatsby'],
  plugins: [
    [
      'i18next-extract',
      {
        keyAsDefaultValue: [defaultLanguage],
        useI18nextDefaultValue: [defaultLanguage],
        defaultNS: 'common',
        outputPath: 'src/locales/{{locale}}/{{ns}}.json',
        customTransComponents: [['gatsby-plugin-react-i18next', 'Trans']],
        compatibilityJSON: 'v4',
      },
    ],
  ],
  overrides: [
    {
      test: [`**/*.ts`, `**/*.tsx`],
      // eslint-disable-next-line object-curly-spacing
      plugins: [[`@babel/plugin-transform-typescript`, { isTSX: true }]],
    },
  ],
}
