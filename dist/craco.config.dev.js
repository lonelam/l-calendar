

var CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [{
    plugin: CracoLessPlugin,
    options: {
      lessLoaderOptions: {
        lessOptions: {
          modifyVars: {
            '@primary-color': '#1DA57A'
          },
          javascriptEnabled: true
        }
      }
    }
  }],
  babel: {
    "plugins": ["babel-plugin-transform-typescript-metadata", ["@babel/plugin-proposal-decorators", {
      "legacy": true
    }], ["@babel/plugin-proposal-class-properties", {
      "loose": true
    }]]
  }
};