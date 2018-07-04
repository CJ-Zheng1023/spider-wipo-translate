var spider = require('../api/v2/translate')
var fu = require('../utils/function-util')
var eu = require('../utils/excel-util')
var Response = require('../utils/response')
var fs = require('fs')

var translations = [], responses = [], exportData
//会在DELAY_START和DELAY_END范围内取随机数延迟执行爬取
var DELAY_START = 10, DELAY_END = 20
/**
 * 翻译结果收集器，所有请求执行完后执行导出到EXCEL
 * @param res     Response对象实例
 * @param translation  翻译结果
 */
var collector = function(res, translation){
    res.completed = true
    if(translation){
        translations.push(translation)
    }else{
        fs.writeFileSync(`${__dirname}/${res.index}-no-translate.txt`, `${res.key}:${res.value} `, {flag: 'a+'})
    }
    if(ifCompleted()){
        exportData[0].push(translations.join(" ").replace(/\n/gi, ''))
        console.log(`line ${res.index}的翻译结果:${translations.join(" ").replace(/\n/gi, '')}`)
        console.log(`用时${(+new Date() - startTime) / 1000}秒`)
        eu.writer(exportData, res.index)
    }
}
/**
 * 判断所有请求是否执行完毕
 * @returns {boolean}
 */
var ifCompleted = function(){
    var flag = true
    for(var response of responses){
        if(!response.completed){
            flag = false
            break
        }
    }
    return flag

}

var arguments = process.argv.slice(2)
var line = arguments[0] || 1

var startTime = +new Date()
exportData = eu.parser(line)
var words = exportData[0][4].split(' '), index = exportData[0][0]
var delay = 0
for(var word of words){
    var arr = word.split(':')
    var key = arr[0], value = arr[1]
    var req = Object.create(null)
    req.body = {
        source: value
    }
    var res = new Response(key, value, index)
    responses.push(res)
    //设置延迟执行时间
    delay += fu.randomNumber(DELAY_START * 1000, DELAY_END * 1000)
    var debouncer = fu.debounce(delay, spider.translateText)
    debouncer(req, res, collector)
}

