const tsRules = require('../../rules/ts-rules.js');

module.exports = {
  extends: [
    'plugin:@typescript-eslint/recommended-type-checked',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  rules: tsRules,
};
