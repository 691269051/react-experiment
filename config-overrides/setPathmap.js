const path = require('path');
const colors = require('colors');

function isInObject(object, key) {
    return Object.prototype.hasOwnProperty.call(object, key);
}

function setAlias(object, alias) {
    let pathMap = {};

    for (const key in object) {
        if (isInObject(object, key)) {
            if (!isInObject(alias, key)) {
                pathMap[key] = path.resolve(__dirname, '../', object[key]);
                console.log(path.resolve(__dirname, '../', object[key]), 'red');
            } else {
                throw new Error(
                    `${key} 别名在config.resolve.alias中已经存在。`
                );
            }
        }
    }

    return pathMap;
}

const option = {
    '@': './src'
};

// 本方法设置项目别名 config.alias
module.exports = function setPathmap(config, env) {
    let { resolve = {} } = config,
        { alias = {} } = resolve;
    Object.assign(resolve.alias, setAlias(option, alias));
    return config;
};
