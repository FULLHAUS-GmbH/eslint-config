const rules = require('../../rules/react');

module.exports = {
  extends: [
    'plugin:react/recommended',
  ],
  languageOptions: {
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
    },
  },
  rules: rules,
};
