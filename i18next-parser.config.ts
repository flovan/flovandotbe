export default {
  createOldCatalogs: false,
  defaultNamespace: 'translation',
  keySeparator: false,
  locales: ['nl', 'en'],
  namespaceSeparator: false,
  output: 'src/locales/$LOCALE/$NAMESPACE.json',
  input: ['src/**/*.tsx', 'src/**/*.ts'],
}
