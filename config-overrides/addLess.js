const lessToJs = require('less-vars-to-js')
const fs = require('fs')
const path = require('path')
const getCSSModuleLocalIdent = require('./getCssModuleLocalIdent')

const addLessLoader = require('./addLessLoader')

const themer = lessToJs(fs.readFileSync(path.join(__dirname, '../config/antd-theme.less'), 'utf8'))

const lessOptions = { javascriptEnabled: true, modifyVars: themer }

module.exports = addLessLoader(
    { lessOptions },
    {
        localIdentName: '[local]_[hash:base64:5]',
        getLocalIdent: getCSSModuleLocalIdent,
    },
)
