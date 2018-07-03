var spider = require('../api/v2/translate')
var fu = require('../utils/function-util')
var eu = require('../utils/excel-util')

var translations = [], responses = [], exportData
/**
 * 翻译结果收集器，所有请求执行完后执行导出到EXCEL
 * @param res     Response对象实例
 * @param translation  翻译结果
 */
var collector = function(res, translation){
    res.completed = true
    translations.push(translation)
    if(ifCompleted()){
        exportData[0].push(translations.join(" "))
        eu.writer(exportData)
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
/**
 * response对象
 * @param key      要翻译内容的字段
 * @param value    要翻译的内容
 * @constructor
 */
var Response = function(key, value){
    this.key = key
    this.value = value
    this.code = 200
    this.completed = false   //翻译完成标识位
}
Response.prototype.json = function(obj){
    if(this.code === 200){
        var translation = obj.translation
        console.log(`${this.value}的翻译结果----${this.key}:${translation} `)
    }else{
        console.log(`${this.value}${obj.msg}`)
    }

}
Response.prototype.status = function(code){
    this.code = code
}


exportData = eu.parser(6)
var words = exportData[0][4].split(' ')
var delay = 0
for(var word of words){
    var arr = word.split(':')
    var key = arr[0], value = arr[1]
    var req = Object.create(null)
    req.body = {
        source: value
    }
    var res = new Response(key, value)
    responses.push(res)
    //设置延迟执行时间
    delay += Math.floor(Math.random() * (20000-10000+1)+10000)
    var debouncer = fu.debounce(delay, spider.translateText)
    debouncer(req, res, collector)
}

