import baseConfig from './configs/base.mjs';
import tsConfig from './configs/typescript.mjs';

export default {
  configs: {
    default: [
      ...baseConfig,
      ...tsConfig,
    ],
    base: baseConfig,
    typescript: tsConfig,
  },
};
