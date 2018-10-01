const env = process.env.NODE_ENV || 'development';
const configFile = `./options/${env}.js`;

/* eslint-disable */
const config = require(configFile);

export default config.default;
