import stylistic from '@stylistic/eslint-plugin';
import html from '@html-eslint/eslint-plugin';
import rules from '../rules/html.js';

export default [
  {
    files: ['**/*.html'],
    language: 'html/html',
    plugins: {
      '@stylistic': stylistic,
      'html': html,
    },
    rules: rules,
  },
];
