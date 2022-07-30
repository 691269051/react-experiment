const lessToJs = require('less-vars-to-js')
const fs = require('fs')
const path = require('path')
const getCSSModuleLocalIdent = require('react-dev-utils/getCSSModuleLocalIdent')

const { addLessLoader } = require('customize-cra')

const themer = lessToJs(
    fs.readFileSync(path.join(__dirname, '../config/antd-theme.less'), 'utf8'),
)

const lessOptions = { javascriptEnabled: true, modifyVars: themer }

module.exports = addLessLoader(
    { lessOptions },
    {
        localIdentName: '[local]_[hash:base64:5]',
        getLocalIdent: getCSSModuleLocalIdent,
    },
)
