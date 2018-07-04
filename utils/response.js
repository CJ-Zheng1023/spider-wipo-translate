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

module.exports = Response