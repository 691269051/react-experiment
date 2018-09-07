const { injectBabelPlugin } = require('react-app-rewired');

// 添加热更新保持状态不变的插件
module.exports = function addHot(config, env) {
    if (env === 'production') {
        return config;
      }

      config.module.rules[1].use[0].options.emitWarning = true;
      return injectBabelPlugin(['react-hot-loader/babel'], config);
};