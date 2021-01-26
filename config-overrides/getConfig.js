const fs = require('fs')
const color = require('colors')
const path = require('path')

const isRegExp = (obj) =>
    Object.prototype.toString.call(obj) === '[object RegExp]'

function writeFile(paths, content) {
    console.log('准备写入log文件'.green)
    fs.writeFile(path.resolve(__dirname, paths), content, function (err) {
        if (err) console.error(err.toString().red)
        console.log('写入成功'.blue)
    })
}

module.exports = function getConfig(config) {
    // 本方法打印config,env到config.overrides.log文件
    writeFile(
        `./customize-cra.${process.env.NODE_ENV}.log`,
        // fs.createReadStream()
        JSON.stringify(
            config,
            (key, value) => {
                if (isRegExp(value)) {
                    return value.toString()
                }
                return value
            },
            2,
        ),
    )
    return config
}
