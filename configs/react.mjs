import rules from '../rules/react.js';
import react from 'eslint-plugin-react';

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
