const { addPostcssPlugins } = require('customize-cra')

module.exports = addPostcssPlugins([
    // require('postcss-px2rem')({ remUnit: 37.5 }),
    require('autoprefixer'),
])
