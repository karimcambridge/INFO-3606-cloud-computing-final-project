module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended'
  ],
  // add your custom rules here
  rules: {
    "semi": 1,
    "arrow-parens": 0,
    "space-before-blocks": 0,
    "quotes": 0,
    "no-extra-semi": 0,
    "indent": 0,
    "block-scoped-var": 2,
    "class-methods-use-this": 2,
    "no-empty-function": 2,
    "no-lone-blocks": 2,
    "no-self-compare": 2,
    "no-unused-expressions": 2,
    "no-undef": 0,
    "no-unused-vars": 1,
    "no-console": 0
  }
}
