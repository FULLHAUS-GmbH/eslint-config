import eslintComments from '@eslint-community/eslint-plugin-eslint-comments/configs';
import rules from '../rules/comments.js';

export default [
  eslintComments.recommended,
  {
    rules: rules,
  },
];
