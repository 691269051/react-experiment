const fs = require('fs');
const color = require('colors');
const path = require('path');

function writeFile(paths, content) {
    console.log('准备写入文件'.green);
    fs.writeFile(path.resolve(__dirname, paths), content, function(err) {
        if (err) console.error(err.toString().red);
        console.log('写入成功'.blue);
    });
}

// function toJSON (key, value) {

// }

RegExp.prototype.toJSON = function(key) {
    return this.toString();
};

module.exports = function getConfig(config, env) {
    // 本方法打印config,env到config.overrides.json文件
    // console.log(config.resolve.plugins.allowedFiles)
    if (env === 'development') {
        writeFile(
            './config.overrides.development.json',
            JSON.stringify(config, null, 4)
        );
    } else {
        writeFile(
            './config.overrides.production.json',
            JSON.stringify(config, null, 4)
        );
    }

    return config;
};
