const rules = require('../../rules/base');

module.exports = {
  plugins: [
    '@stylistic',
  ],
  extends: [
    'eslint:recommended',
  ],
  rules: rules,
};
