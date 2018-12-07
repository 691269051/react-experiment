const { injectBabelPlugin } = require('react-app-rewired');

function rewireHotLoader(config, env) {
    if (env === 'production') {
        return config;
    }

    // 找到包含eslint-loader的规则
    const condition = u =>
        typeof u === 'object' && u.loader && u.loader.includes('eslint-loader');
    const rule = config.module.rules.find(
        rule => rule.use && rule.use.some(condition)
    );

    if (rule) {
        const use = rule.use.find(condition);

        if (use) {
            // 注入eslint-loader的选项
            use.options.emitWarning = true;
        }
    }

    return injectBabelPlugin(['react-hot-loader/babel'], config);
}

module.exports = rewireHotLoader;
