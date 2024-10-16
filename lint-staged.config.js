function mapFilenames(filenames) {
  return filenames.map(filename => `"${filename}"`).join(' ')
}

module.exports = {
  '*.{js,ts,tsx}': filenames => [
    `eslint --cache --color --fix ${mapFilenames(filenames)}`,
  ],
}
