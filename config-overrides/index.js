const { override } = require('customize-cra')
const addLessLoader = require('./addLess')
const addAntd = require('./addAntd')
const addLodash = require('./addLodash')
const getConfig = require('./getConfig');
const addBundleVisualizer = require('./addBundleVisualizer');
const setHot = require('./addHot');
// const setPathmap = require('./setPathmap');
// const addPostcssPlugins = require('./addPostcssPlugins');

module.exports = override(addLessLoader, addAntd, addLodash, getConfig, addBundleVisualizer, setHot)
