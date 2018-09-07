const addLess = require('./addLess');
const addLodash = require('./addLodash');
const setPostcss = require('./setPostcss');
const addAntd = require('./addAntd');
const setPathmap = require('./setPathmap');
const setHot = require('./addHot');

const getConfig = require('./getConfig');
module.exports = function override(config, env) {
    config = addAntd(config, env);
    config = addLodash(config, env);
    config = addLess(config, env);
    // config = setPostcss(config, env);
    config = setHot(config, env);
    config = setPathmap(config, env);
    config = getConfig(config, env);
    return config;
};
