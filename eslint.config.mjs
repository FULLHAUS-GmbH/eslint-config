import globals from 'globals';
import fhEslint from './index.js';

/** @type { import('eslint').Linter.Config[] } */
export default [
  ...fhEslint.configs.baseConfig,
  ...fhEslint.configs.stylisticConfig,
  ...fhEslint.configs.commentsConfig,
  ...fhEslint.configs.importConfig,
  {
    languageOptions: {
      ecmaVersion: 'latest',
      globals: {
        ...globals.node,
      },
    },
  },
];
