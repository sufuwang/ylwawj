const { globals } = require('./.auto-import.json');

module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
    jest: true,
  },
  globals: {
    ...globals,
    React: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  plugins: ['prettier', '@typescript-eslint'],
  extends: ['eslint:recommended', 'eslint-config-prettier', 'plugin:prettier/recommended'],
  rules: {
    'prettier/prettier': 'error',
    'no-unexpected-multiline': 'error',
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }],
  },
  overrides: [
    {
      files: ['**/__tests__/*.spec.{j,t}s?(x)', '**/tests/**/*.spec.{j,t}s?(x)'],
      env: {
        jest: true,
      },
    },
  ],
};
