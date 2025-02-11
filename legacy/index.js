const base = require('./configs/base');
const comments = require('./configs/comments');
const stylistic = require('./configs/stylistic');
const typescript = require('./configs/typescript');

const defaultConfigs = [
  base,
  comments,
  stylistic,
  typescript,
];

module.exports = {
  plugins: defaultConfigs
    .map(config => config?.plugins)
    .filter(value => value)
    .flat(1),
  extends: defaultConfigs
    .map(config => config?.extends)
    .filter(value => value)
    .flat(1),
  parser: typescript.parser,
  rules: Object.assign({}, ...defaultConfigs.map(config => config?.rules)),
};
