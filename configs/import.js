import eslintImport from 'eslint-plugin-import';
import rules from '../rules/import.js';

export default [
  eslintImport.flatConfigs.recommended,
  {
    rules: rules,
  },
];
