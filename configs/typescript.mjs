import tsEslint from 'typescript-eslint';
import tsRules from '../rules/ts-rules.js';

export default tsEslint.config(
  ...tsEslint.configs.recommendedTypeChecked,
  ...tsEslint.configs.stylisticTypeChecked,
  {
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.name,
      },
    },
  },
  {
    files: ['**/*.js'],
    ...tsEslint.configs.disableTypeChecked,
  },
  {
    rules: tsRules,
  }
);
