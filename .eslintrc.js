module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true,
  },
  extends: ['airbnb', 'plugin:react/recommended'],
  parserOptions: {
    ecmaVersion: 8,
    ecmaFeatures: {
      // experimentalObjectRestSpread: true,
      jsx: true,
    },
    sourceType: 'module',
  },
  rules: {
    indent: ['error', 2],
    'linebreak-style': ['error', 'unix'],
    'no-console': 0,
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
    'react/display-name': 0,
    'import/no-extraneous-dependencies': 0,
  },
};
