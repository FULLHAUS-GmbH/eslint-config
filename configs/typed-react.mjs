import react from 'eslint-plugin-react';
import rules from '../rules/typed-react.js';

export default [
  {
    plugins: {
      react,
    },
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    rules: rules,
  },
];
