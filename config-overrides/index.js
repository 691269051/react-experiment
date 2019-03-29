const { override, disableChunk } = require('customize-cra')
const addLessLoader = require('./addLess')
const addAntd = require('./addAntd')
const addLodash = require('./addLodash')
const getConfig = require('./getConfig')
const addBundleVisualizer = require('./addBundleVisualizer')
const addHot = require('./addHot')
const addWebpackAlias = require('./addWebpackAlias')
// const addPostcssPlugins = require('./addPostcssPlugins');

module.exports = override(
    addLessLoader,
    addAntd,
    addLodash,
    getConfig,
    // disableChunk, // 禁用代码拆分,开启后打包成一个js文件
    // addWebpackAlias,
    addBundleVisualizer,
    addHot
)
