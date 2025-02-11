const tsRules = require('../../rules/typescript.js');

module.exports = {
  extends: [
    'plugin:@typescript-eslint/recommended-type-checked',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  rules: tsRules,
};
