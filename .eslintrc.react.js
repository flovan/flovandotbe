/** @type {import('@types/eslint').Linter.BaseConfig} */
module.exports = {
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  extends: ['./.eslintrc.typescript.js'],
  overrides: [
    {
      files: ['**/*.tsx'],
      extends: [
        'plugin:react/recommended',
        'plugin:jsx-a11y/strict',
        'plugin:react-hooks/recommended',
      ],
      plugins: ['react', 'jsx-a11y'],
      parserOptions: {
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
        warnOnUnsupportedTypeScriptVersion: true,
      },
      rules: {
        'max-len': [
          'warn',
          {
            code: 120,
            // ignorePattern: 'className=[\'"].+?[\'"]',
            ignoreUrls: true,
            ignoreStrings: true,
            ignoreTemplateLiterals: true,
          },
        ],
        'simple-import-sort/imports': [
          'error',
          {
            groups: [
              // `react` related packages come first, then @-imports, then the rest
              ['^react', '^@?\\w'],
              // Custom path imports and relative imports
              ['^(~)(/.*|$)', '^\\.'],
              // for (s)css imports.
              ['^[^.]'],
              ['.*.css'],
            ],
          },
        ],
        'react/jsx-uses-react': 'off',
        'react/prop-types': 'off',
        'react/react-in-jsx-scope': 'off',
        '@typescript-eslint/naming-convention': [
          'error',
          // We must allow both since React components are, by nature, just functions
          { format: ['camelCase', 'PascalCase'], selector: 'function' },
          { format: ['camelCase', 'PascalCase'], selector: 'import' },
          { format: ['camelCase'], selector: 'default' },
          { format: ['PascalCase'], selector: 'typeLike' },
          { format: ['PascalCase'], selector: 'enumMember' },
          {
            format: ['camelCase'],
            leadingUnderscore: 'allow',
            selector: 'method',
          },
          {
            format: ['camelCase', 'PascalCase'],
            leadingUnderscore: 'allow',
            selector: 'parameter',
          },
          {
            format: ['camelCase', 'PascalCase'],
            leadingUnderscore: 'allow',
            selector: 'variable',
          },
          {
            format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
            modifiers: ['const'],
            selector: 'variable',
          },
          { format: null, selector: 'classProperty' },
          { format: null, selector: 'objectLiteralProperty' },
          { format: null, selector: 'typeProperty' },
        ],
      },
    },
  ],
  settings: {
    react: {
      version: 'detect',
    },
  },
}
