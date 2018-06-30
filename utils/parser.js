var cheerio = require('cheerio')

var getValueById = function(html, id){
    var $ = cheerio.load(html, {decodeEntities: false})
    return $(id).val()
}
var getHtmlById = function(html, id){
    var $ = cheerio.load(html, {decodeEntities: false})
    return $(id).html()
}
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