import { CreateBabelConfigArgs, CreateWebpackConfigArgs } from 'gatsby'

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

// `gatsby develop` lints through eslint-webpack-plugin with ESLint 8 options
// (`useEslintrc`, `rulePaths`), which ESLint 9 rejects, and it only recognises
// .eslintrc files, not the flat config. `npm run lint` and the pre-commit hook
// do the linting instead.
export const onCreateWebpackConfig = ({
  stage,
  getConfig,
  actions,
}: CreateWebpackConfigArgs) => {
  if (stage !== 'develop') {
    return
  }

  const config = getConfig()
  config.plugins = config.plugins.filter(
    (plugin: object) => plugin.constructor.name !== 'ESLintWebpackPlugin',
  )
  actions.replaceWebpackConfig(config)
}
