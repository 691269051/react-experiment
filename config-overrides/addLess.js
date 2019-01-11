const lessToJs = require('less-vars-to-js')
const fs = require('fs')
const path = require('path')

const { addLessLoader } = require('customize-cra')

const themer = lessToJs(
    fs.readFileSync(path.join(__dirname, '../config/antd-theme.less'), 'utf8')
)

const loaderOptions = { javascriptEnabled: true, modifyVars: themer }

module.exports = addLessLoader(loaderOptions);
