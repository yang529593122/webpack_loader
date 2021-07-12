/**
 * Time: 2021/7/7.
 * Author: Yang PengFei
 */
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: {
        index: './src/index.js',
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './pubilc/index.html'
        }),
        new webpack.DefinePlugin({
            ENV_MODE: JSON.stringify(process.argv[2])
        }),
        new CleanWebpackPlugin()
    ],
    module:{},
    output: {
        path: path.resolve(__dirname, '../dist'),
        clean: true,
        publicPath: './',
    },
};
