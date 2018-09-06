const addLess = require('./addLess');
const addLodash = require('./addLodash');
const setPostcss = require('./setPostcss');
const addAntd = require('./addAntd');
const setPathmap = require('./setPathmap');

const getConfig = require('./getConfig');
module.exports = function override(config, env) {
    config = setPathmap(config, env);
    config = addLodash(config, env);
    // config = setPostcss(config, env);
    config = addAntd(config, env);
    config = addLess(config, env);
    config = getConfig(config, env);
    return config;
};
