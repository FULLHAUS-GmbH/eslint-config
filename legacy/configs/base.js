const rules = require('../../rules/base');

module.exports = {
  plugins: [
    '@stylistic',
  ],
  extends: [
    'eslint:recommended',
    'plugin:@eslint-community/eslint-comments/recommended'
  ],
  rules: rules,
};
