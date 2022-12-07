const path = require('path')

module.exports = function override(config) {
  config.module.rules[1].oneOf[3].include = [
    config.module.rules[1].oneOf[3].include,
    // __dirname,
    path.resolve(`${__dirname}/../microfe-app/src`),
    `${__dirname}/node_modules/microfe-app`,
  ]

  console.log(JSON.stringify(config, null, 4))
  return config;
}
