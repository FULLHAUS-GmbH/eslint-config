const rules = require('../../rules/typed-react');

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
