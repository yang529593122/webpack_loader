const fs = require("fs");

let HtmlCdnUrl = function (options) {
    this.cdn_img_url = options.cdn_img_url;
};
HtmlCdnUrl.prototype.apply = function (compiler) {
    compiler.hooks.emit.tap('HtmlCdnUrl', (compilation)=> {
        for(let name in compilation.assets){
            const content = compilation.assets[name].source();
            let str = content.toString().replace('${IMG_URL}', this.cdn_img_url);
            compilation.assets[name] = {
                source: () => str,
                size: str.length
            }
        }
    })
};
module.exports = HtmlCdnUrl;
