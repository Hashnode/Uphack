const getRoutes = require('./routes');
const config = require('./config');

module.exports = {
  webpack: (config) => {
    config.node = {
      fs: 'empty'
    }

    return config
  },
  publicRuntimeConfig: {
    baseUrl: config.baseUrl
  },
  exportPathMap: getRoutes
}
