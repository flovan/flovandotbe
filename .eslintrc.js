/** @type {import('@types/eslint').Linter.BaseConfig} */
module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  overrides: [
    {
      files: ['**/*.ts'],
      extends: ['./.eslintrc.typescript.js'],
      parser: '@typescript-eslint/parser',
    },
    {
      files: ['**/*.tsx'],
      extends: ['./.eslintrc.react.js'],
      parser: '@typescript-eslint/parser',
    },
    {
      files: ['**/*.js'],
      extends: ['./.eslintrc.base.js'],
    },
  ],
}
