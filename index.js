import baseConfig from './configs/base.js';
import commentsConfig from './configs/comments.js';
import reactConfig from './configs/react.js';
import stylisticConfig from './configs/stylistic.js';
import typedReactConfig from './configs/typed-react.js';
import typescriptConfig from './configs/typescript.js';
import unicornConfig from './configs/unicorn.js';
import importConfig from './configs/import.js';
import baseRules from './rules/base.js';
import commentsRules from './rules/comments.js';
import reactRules from './rules/react.js';
import stylisticRules from './rules/stylistic.js';
import typedReactRules from './rules/typed-react.js';
import typescriptRules from './rules/typescript.js';
import unicornRules from './rules/unicorn.js';
import importRules from './rules/import.js';

export default {
  configs: {
    default: [
      ...baseConfig,
      ...commentsConfig,
      ...stylisticConfig,
      ...typescriptConfig,
      ...unicornConfig,
      ...importConfig,
    ],
    baseConfig,
    commentsConfig,
    reactConfig,
    stylisticConfig,
    typedReactConfig,
    typescriptConfig,
    unicornConfig,
    importConfig,
  },
  rules: {
    baseRules,
    commentsRules,
    reactRules,
    stylisticRules,
    typedReactRules,
    typescriptRules,
    unicornRules,
    importRules,
  },
};
