/**
 * Time: 2021/7/7.
 * Author: Yang PengFei
 */
const webpack = require('webpack');
const config = require('../config/webpack.config.prod.js');
// 开始构建
webpack(config, (err, stats) => {
        if(err || stats.hasErrors()) {
            console.log("no")
        }
        console.log('ok')
    }
)
