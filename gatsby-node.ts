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
