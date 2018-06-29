var cheerio = require('cheerio')

var getValueById = function(html, id){
    var $ = cheerio.load(html)
    return $(id).val()
}
module.exports = {
    getValueById
}