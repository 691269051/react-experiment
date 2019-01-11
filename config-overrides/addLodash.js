const { fixBabelImports } = require('customize-cra')
module.exports = fixBabelImports('lodash', {
    libraryDirectory: '',
    camel2DashComponentName: false,
})
