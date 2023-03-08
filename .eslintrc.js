module.exports = {
  root: true,
  extends: ['@react-native-community', 'plugin:prettier/recommended'],
  plugins: ['prettier'],
  rules: {
    '@typescript-eslint/no-shadow': 'off',
    'react-hooks/exhaustive-deps': 'off',
  },
  env: {
    es6: true,
    node: true,
    jest: true,
  },
};
