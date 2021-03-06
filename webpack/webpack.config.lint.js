/**
 * 代码检查环境配置
 */
const webpackBase = require('./webpack.config.base');
const { merge } = require('webpack-merge');
const { distPath } = require('./config');

module.exports = merge(webpackBase, {
    module: {
        rules: [
            {
                test: /\.js$/,
                // 强制先进行 ESLint 检查
                enforce: 'pre',
                // 不对 node_modules 和 lib 文件夹中的代码进行检查
                exclude: /node_modules|lib/,
                loader: 'eslint-loader',
                options: {
                    // 启用自动修复
                    fix: true,
                    // 启用警告信息
                    emitWarning: true,
                },
            },
        ],
    },
    devServer: {
        contentBase: distPath,
        overlay: {
            errors: true,
            warnings: true,
        },
    },
});
