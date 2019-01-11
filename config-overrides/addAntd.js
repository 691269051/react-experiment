const { fixBabelImports } = require('customize-cra')

module.exports = fixBabelImports('antd', {
    libraryDirectory: 'es',
    style: true,
})
