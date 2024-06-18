module.exports = {
  proseWrap: 'always',
  singleQuote: true,
  trailingComma: 'all',
  semi: false,
  overrides: [
    {
      files: 'packages/@TestJS/angular/**',
      options: {
        semi: true,
      },
    },
  ],
}
