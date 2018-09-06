var rewirePostcss = require('react-app-rewire-postcss');
var options = {plugins: () => [
    require('postcss-flexbugs-fixes')(),
    require('autoprefixer')({
        browsers: [
            '>1%',
            'last 4 versions',
            'Firefox ESR',
            'not ie < 9' // React doesn't support IE8 anyway
        ],
        flexbox: 'no-2009'
    })
]};
module.exports = function setPostcss(config, env) {
    config = rewirePostcss(config, options);

    return config;
};
