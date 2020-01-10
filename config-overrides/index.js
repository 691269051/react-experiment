const { override, disableChunk } = require('customize-cra')
const addLessLoader = require('./addLess')
const addAntd = require('./addAntd')
const addLodash = require('./addLodash')
const getConfig = require('./getConfig')
const addBundleVisualizer = require('./addBundleVisualizer')
const addReactRefresh = require('./addReactRefresh')
// const addWebpackAlias = require('./addWebpackAlias')
// const addPostcssPlugins = require('./addPostcssPlugins');

module.exports = override(
    addReactRefresh,
    addLessLoader,
    addAntd,
    addLodash,
    // disableChunk(), // 禁用代码拆分,开启后打包成一个js文件
    // addWebpackAlias,
    addBundleVisualizer,
    getConfig
)
