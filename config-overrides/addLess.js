var rewireLess = require('react-app-rewire-less');
var lessModules = require('react-app-rewire-less-modules');
const lessToJs = require('less-vars-to-js');
const fs = require('fs');
const path = require('path');

const themer =lessToJs( fs.readFileSync(path.join(__dirname, '../alipay-theme/theme.less'), 'utf8'));


module.exports = function addLess(config, env) {
    // config = rewireLess.withLoaderOptions({
    //     javascriptEnabled: true, modifyVars: themer
    // })(config, env);

    config = lessModules.withLoaderOptions({ javascriptEnabled: true, modifyVars: themer})(config, env);

    return config;
};
