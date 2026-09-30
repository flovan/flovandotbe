const stylistic = require('@stylistic/eslint-plugin')
const prettier = require('eslint-config-prettier')
const jsxA11y = require('eslint-plugin-jsx-a11y')
const react = require('eslint-plugin-react')
const reactHooks = require('eslint-plugin-react-hooks')
const simpleImportSort = require('eslint-plugin-simple-import-sort')
const globals = require('globals')
const tseslint = require('typescript-eslint')

const namingConvention = [
  { format: ['camelCase'], selector: 'default' },
  { format: ['PascalCase'], selector: 'typeLike' },
  { format: ['PascalCase'], selector: 'enumMember' },
  { format: ['camelCase'], leadingUnderscore: 'allow', selector: 'method' },
  {
    format: ['camelCase'],
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
]

/** @type {import('eslint').Linter.Config[]} */
module.exports = [
  {
    ignores: ['node_modules/', 'public/', '.cache/', '**/*.d.ts'],
  },

  // Turns off the formatting rules that fight Prettier. It comes first, so the
  // stylistic rules below that are compatible with Prettier stay on.
  prettier,

  // All files
  {
    files: ['**/*.{js,ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2018,
      sourceType: 'commonjs',
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    plugins: {
      '@stylistic': stylistic,
      'simple-import-sort': simpleImportSort,
    },
    rules: {
      '@stylistic/array-bracket-newline': ['error', 'consistent'],
      '@stylistic/array-bracket-spacing': ['error', 'never'],
      '@stylistic/array-element-newline': ['error', 'consistent'],
      '@stylistic/arrow-spacing': 'error',
      '@stylistic/brace-style': [
        'error',
        '1tbs',
        {
          allowSingleLine: false,
        },
      ],
      '@stylistic/comma-dangle': ['error', 'always-multiline'],
      '@stylistic/comma-spacing': 'error',
      '@stylistic/comma-style': 'error',
      '@stylistic/computed-property-spacing': ['error', 'never'],
      '@stylistic/dot-location': ['error', 'property'],
      '@stylistic/eol-last': 'error',
      '@stylistic/function-call-argument-newline': ['error', 'consistent'],
      '@stylistic/function-call-spacing': ['error', 'never'],
      '@stylistic/generator-star-spacing': 'error',
      '@stylistic/key-spacing': [
        'error',
        {
          afterColon: true,
          beforeColon: false,
          mode: 'strict',
        },
      ],
      '@stylistic/keyword-spacing': 'error',
      '@stylistic/max-statements-per-line': ['error', { max: 1 }],
      '@stylistic/new-parens': 'error',
      '@stylistic/no-extra-parens': [
        'error',
        'all',
        {
          nestedBinaryExpressions: false,
        },
      ],
      '@stylistic/no-floating-decimal': 'error',
      '@stylistic/no-multi-spaces': 'error',
      '@stylistic/no-multiple-empty-lines': [
        'error',
        {
          max: 1,
          maxBOF: 0,
          maxEOF: 1,
        },
      ],
      '@stylistic/no-trailing-spaces': 'error',
      '@stylistic/no-whitespace-before-property': 'error',
      '@stylistic/object-curly-newline': [
        'error',
        {
          consistent: true,
          multiline: true,
        },
      ],
      '@stylistic/padded-blocks': [
        'error',
        {
          blocks: 'never',
          switches: 'never',
        },
        {
          allowSingleLineBlocks: false,
        },
      ],
      '@stylistic/quote-props': ['error', 'as-needed'],
      '@stylistic/quotes': [
        'error',
        'single',
        {
          allowTemplateLiterals: 'always',
          avoidEscape: false,
        },
      ],
      '@stylistic/rest-spread-spacing': ['error', 'never'],
      '@stylistic/semi': ['error', 'never'],
      '@stylistic/semi-spacing': ['error', { after: true, before: false }],
      '@stylistic/space-before-blocks': ['error', 'always'],
      '@stylistic/space-before-function-paren': [
        'error',
        {
          anonymous: 'always',
          asyncArrow: 'always',
          named: 'never',
        },
      ],
      '@stylistic/space-in-parens': ['error', 'never'],
      '@stylistic/space-infix-ops': 'error',
      '@stylistic/space-unary-ops': [
        'error',
        {
          nonwords: false,
          words: true,
        },
      ],
      '@stylistic/spaced-comment': 'error',
      '@stylistic/switch-colon-spacing': 'error',
      '@stylistic/template-curly-spacing': ['error', 'never'],
      '@stylistic/template-tag-spacing': ['error', 'never'],
      '@stylistic/yield-star-spacing': 'error',

      'constructor-super': 'error',
      curly: 'error',
      eqeqeq: [
        'error',
        'always',
        {
          null: 'ignore',
        },
      ],
      'for-direction': 'error',
      'func-names': ['error'],
      'func-style': [
        'error',
        'declaration',
        {
          allowArrowFunctions: true,
        },
      ],
      'getter-return': 'error',
      'grouped-accessor-pairs': ['error', 'getBeforeSet'],
      'guard-for-in': 'error',
      'no-array-constructor': 'error',
      'no-async-promise-executor': 'error',
      'no-bitwise': 'error',
      'no-caller': 'error',
      'no-case-declarations': 'error',
      'no-class-assign': 'error',
      'no-cond-assign': 'error',
      'no-debugger': 'error',
      'no-dupe-args': 'error',
      'no-dupe-class-members': 'error',
      'no-dupe-else-if': 'error',
      'no-dupe-keys': 'error',
      'no-duplicate-case': 'error',
      'no-duplicate-imports': 'error',
      'no-empty': 'error',
      'no-empty-character-class': 'error',
      'no-empty-pattern': 'error',
      'no-eval': 'error',
      'no-ex-assign': 'error',
      'no-extend-native': 'error',
      'no-extra-boolean-cast': 'error',
      'no-fallthrough': 'error',
      'no-func-assign': 'error',
      'no-global-assign': 'error',
      'no-implicit-coercion': 'error',
      'no-import-assign': 'error',
      'no-inner-declarations': 'error',
      'no-invalid-regexp': 'error',
      'no-invalid-this': 'error',
      'no-irregular-whitespace': 'error',
      'no-lone-blocks': 'error',
      'no-lonely-if': 'error',
      'no-misleading-character-class': 'error',
      'no-negated-condition': 'error',
      'no-new-func': 'error',
      'no-new-native-nonconstructor': 'error',
      'no-new-wrappers': 'error',
      'no-obj-calls': 'error',
      'no-object-constructor': 'error',
      'no-octal': 'error',
      'no-octal-escape': 'error',
      'no-proto': 'error',
      'no-prototype-builtins': 'error',
      'no-redeclare': 'error',
      'no-regex-spaces': 'error',
      'no-return-assign': ['error', 'always'],
      'no-self-assign': 'error',
      'no-self-compare': 'error',
      'no-sequences': 'error',
      'no-setter-return': 'error',
      'no-shadow': [
        'error',
        {
          hoist: 'all',
        },
      ],
      'no-shadow-restricted-names': 'error',
      'no-this-before-super': 'error',
      'no-throw-literal': 'error',
      'no-undef': 'error',
      'no-undef-init': 'error',
      'no-unexpected-multiline': 'error',
      'no-unreachable': 'error',
      'no-unsafe-finally': 'error',
      'no-unsafe-negation': 'error',
      'no-unused-expressions': 'error',
      'no-unused-labels': 'error',
      'no-unused-vars': 'error',
      'no-use-before-define': 'error',
      'no-useless-call': 'error',
      'no-useless-catch': 'error',
      'no-useless-computed-key': 'error',
      'no-useless-constructor': 'error',
      'no-useless-escape': 'error',
      'no-var': 'error',
      'no-with': 'error',
      'one-var': ['error', 'never'],
      'prefer-const': 'error',
      'prefer-object-spread': 'error',
      'prefer-rest-params': 'error',
      'prefer-spread': 'error',
      'prefer-template': 'error',
      radix: 'error',
      'require-await': 'error',
      'require-yield': 'error',
      'simple-import-sort/imports': [
        'error',
        {
          groups: [
            //  @-imports first, then the rest
            ['^react', '^@?\\w'],
            // Custom path imports and relative imports
            ['^(~)(/.*|$)', '^\\.'],
          ],
        },
      ],
      'symbol-description': 'error',
      'unicode-bom': ['error', 'never'],
      'use-isnan': [
        'error',
        {
          enforceForSwitchCase: true,
        },
      ],
      'valid-typeof': [
        'error',
        {
          requireStringLiterals: true,
        },
      ],
      yoda: 'error',
    },
  },

  // TypeScript
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      sourceType: 'module',
      parser: tseslint.parser,
      parserOptions: {
        project: ['./tsconfig.json'],
        tsconfigRootDir: __dirname,
      },
    },
    plugins: {
      '@typescript-eslint': tseslint.plugin,
    },
    rules: {
      '@typescript-eslint/adjacent-overload-signatures': 'error',
      '@typescript-eslint/array-type': [
        'error',
        {
          default: 'generic',
        },
      ],
      '@typescript-eslint/await-thenable': 'error',
      '@typescript-eslint/ban-ts-comment': 'error',
      '@typescript-eslint/consistent-type-assertions': [
        'error',
        {
          assertionStyle: 'as',
        },
      ],
      '@typescript-eslint/consistent-type-definitions': 'error',
      '@typescript-eslint/explicit-member-accessibility': [
        'error',
        {
          accessibility: 'no-public',
        },
      ],
      '@typescript-eslint/member-ordering': [
        'error',
        {
          default: [
            'public-static-field',
            'protected-static-field',
            'private-static-field',
            'public-instance-field',
            'protected-instance-field',
            'private-instance-field',
            'public-constructor',
            'protected-constructor',
            'private-constructor',
            'public-static-method',
            'protected-static-method',
            'private-static-method',
            'public-instance-method',
            'protected-instance-method',
            'private-instance-method',
            'signature',
          ],
        },
      ],
      '@typescript-eslint/method-signature-style': ['error', 'property'],
      '@typescript-eslint/naming-convention': ['error', ...namingConvention],
      '@typescript-eslint/no-confusing-void-expression': 'error',
      '@typescript-eslint/no-empty-function': 'error',
      '@typescript-eslint/no-empty-object-type': 'error',
      '@typescript-eslint/no-floating-promises': 'error',
      '@typescript-eslint/no-for-in-array': 'error',
      '@typescript-eslint/no-misused-new': 'error',
      '@typescript-eslint/no-namespace': 'error',
      '@typescript-eslint/no-redeclare': 'error',
      '@typescript-eslint/no-shadow': 'error',
      '@typescript-eslint/no-this-alias': 'error',
      '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'error',
      '@typescript-eslint/no-unnecessary-type-assertion': 'error',
      '@typescript-eslint/no-unused-expressions': 'error',
      '@typescript-eslint/no-use-before-define': [
        'error',
        {
          classes: true,
          enums: true,
          functions: false,
          typedefs: true,
          variables: true,
        },
      ],
      '@typescript-eslint/no-useless-constructor': 'error',
      '@typescript-eslint/no-wrapper-object-types': 'error',
      '@typescript-eslint/non-nullable-type-assertion-style': 'error',
      '@typescript-eslint/only-throw-error': 'error',
      '@typescript-eslint/prefer-enum-initializers': 'error',
      '@typescript-eslint/prefer-for-of': 'error',
      '@typescript-eslint/prefer-function-type': 'error',
      '@typescript-eslint/prefer-namespace-keyword': 'error',
      '@typescript-eslint/promise-function-async': 'error',
      '@typescript-eslint/strict-boolean-expressions': [
        'error',
        {
          allowAny: false,
          allowNullableBoolean: false,
          allowNullableNumber: false,
          allowNullableObject: false,
          allowNullableString: false,
          allowNumber: false,
          allowString: false,
        },
      ],
      '@typescript-eslint/unbound-method': [
        'error',
        {
          ignoreStatic: true,
        },
      ],
      '@typescript-eslint/unified-signatures': 'error',
      '@stylistic/type-annotation-spacing': 'error',

      // Disabled because they would fight TS rules, unless specified otherwise
      '@stylistic/no-extra-parens': 'off',
      '@stylistic/quotes': 'off',
      'getter-return': 'off', // TS already enforces this
      'no-dupe-class-members': 'off', // The rule errors on method overloads and TypeScript already disallows dupes
      'no-duplicate-imports': 'off',
      'no-redeclare': 'off',
      'no-undef': 'off',
      'no-shadow': 'off',
      'no-throw-literal': 'off',
      'no-unused-expressions': 'off',
      'no-unused-vars': 'off', // Use tsconfig's noUnusedLocals
      'no-use-before-define': 'off',
      'no-useless-constructor': 'off',
      'require-await': 'off', // Fights with @typescript-eslint/promise-function-async
    },
  },

  // React
  {
    ...react.configs.flat.recommended,
    files: ['**/*.tsx'],
  },
  {
    ...jsxA11y.flatConfigs.strict,
    files: ['**/*.tsx'],
  },
  {
    files: ['**/*.tsx'],
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        warnOnUnsupportedTypeScriptVersion: true,
      },
    },
    plugins: {
      'react-hooks': reactHooks,
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
      '@stylistic/max-len': [
        'warn',
        {
          code: 120,
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
      'react-hooks/exhaustive-deps': 'warn',
      'react-hooks/rules-of-hooks': 'error',
      'react/jsx-uses-react': 'off',
      'react/prop-types': 'off',
      'react/react-in-jsx-scope': 'off',
      '@typescript-eslint/naming-convention': [
        'error',
        // We must allow both since React components are, by nature, just functions
        { format: ['camelCase', 'PascalCase'], selector: 'function' },
        { format: ['camelCase', 'PascalCase'], selector: 'import' },
        // Component props are destructured into PascalCase parameters too
        {
          format: ['camelCase', 'PascalCase'],
          leadingUnderscore: 'allow',
          selector: 'parameter',
        },
        ...namingConvention.filter(option => option.selector !== 'parameter'),
      ],
    },
  },
]
