const base = require('./configs/base');
const typescript = require('./configs/typescript');

const configs = [
  base,
  typescript,
];

module.exports = {
  plugins: configs
    .map(config => config?.plugins)
    .filter(value => value)
    .flat(1),
  extends: configs
    .map(config => config?.extends)
    .filter(value => value)
    .flat(1),
  parser: typescript.parser,
  rules: Object.assign({}, ...configs.map(config => config?.rules)),
};
