var rewireLodash = require('react-app-rewire-lodash');
var babelPluginOptions = {};
module.exports = function addLodash(config, env) {
    config = rewireLodash(config, env, babelPluginOptions);

    return config;
};
