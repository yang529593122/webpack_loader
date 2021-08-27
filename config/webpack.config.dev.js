const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlCdnUrl = require("../src/plugins/html-cdn-url")

module.exports = {
    mode: 'development',
    entry: {
        index: './src/index.js',
    },
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.js$/,
                use: [{
                    // 本地引用loader
                    loader: path.resolve('./src/loaders/replace-loader'),
                    options: {
                        // 通过配置传入words来替换NAME
                        words: '你好'
                    }
                }]
            }
        ]
    },
    plugins: [
        new HtmlCdnUrl({
            cdn_img_url: 'https://img.kaikeba.com',
        }),
        new HtmlWebpackPlugin({
            template: './pubilc/index.html'
        }),
        new webpack.DefinePlugin({
            ENV_MODE: JSON.stringify(process.argv[2])
        }),


    ],
};
