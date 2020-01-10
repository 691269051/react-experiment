const ReactRefreshPlugin = require('@pmmmwh/react-refresh-webpack-plugin')
const { addBabelPlugin, addWebpackPlugin, override } = require('customize-cra')

const addReactRefresh = () => {
    const isDev = process.env.NODE_ENV === 'development'
    if (isDev) {
        return override(
            addBabelPlugin(require.resolve('react-refresh/babel')),
            addWebpackPlugin(new ReactRefreshPlugin())
        )
    }
    return config => config
}

module.exports = addReactRefresh()
