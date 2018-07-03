var cheerio = require('cheerio')
/**
 * 根据id获取value值
 * @param html   原始html代码
 * @param id     目标id
 * @returns {*|jQuery}
 */
var getValueById = function(html, id){
    var $ = cheerio.load(html, {decodeEntities: false})
    return $(id).val()
}
/**
 * 根据id获取html串
 * @param html
 * @param id
 * @returns {*|jQuery}
 */
var getHtmlById = function(html, id){
    var $ = cheerio.load(html, {decodeEntities: false})
    return $(id).html()
}
/**
 * 去除html标签，提取翻译内容
 * @param html   原始html代码
 * @returns {*}  翻译结果
 */
var getTranslation = function(html){
    if(!html){
        return ''
    }
    var translation = "" + html.replace(/<br[^>]*>/g,"@@@").replace(/<[^>]+>|\n/g,'').replace(/@@@ ?/g, "\n")
    translation = translation.replace(/⇓[^⇑]+⇑/g," ")
    translation = translation.replace(/\&nbsp\;/gi, ' ')
        .replace(/／/g,"").replace(/  +/g," ").replace(/ +([\.\;\,]) */g,"$1 ")
        .replace(/[\n\r][\n\r][\n\r][\n\r]/g, "")
    while(translation.charAt(0) == ' '){
        translation = translation.substr(1)
    }
    return translation
}
module.exports = {
    getValueById,
    getHtmlById,
    getTranslation
}