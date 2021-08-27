/**
 * Time: 2021/7/8.
 * Author: Yang PengFei
 */
const { getOptions } = require('loader-utils');
module.exports = function (source) {
    const options = getOptions(this); // getOptions用于获取配置
    console.log(source,2222)
    return source.replace(/NAME/g,options.words);
}
