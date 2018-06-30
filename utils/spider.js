var http = require('http')
var querystring = require('querystring')
var requestWipoTranslate = function(options, postData){
    var p = new Promise((resolve, reject) => {
        var req = http.request(options, (res) => {
            resolve(res)
        })
        req.on('error', (e) => {
            reject(e);
        })
        if(postData){
            var postDataStr = querystring.stringify(postData)
            options.headers['Content-Length'] = Buffer.byteLength(postDataStr)
            req.write(postDataStr)
        }
        req.end()
    })
    return p
}
var responseWipoTranslate = function(response){

    var p = new Promise((resolve, reject) => {
        var html = ''
        if(response.statusCode != 200){
            reject('响应失败')
        }
        response.setEncoding('utf8')
        response.on('data', (chunck) => {
            html += chunck
        })
        response.on('end', () => {
            resolve(html)
        })
    })
    return p
}
var spiderWipo = function(options, postData){
    var req = http.request(options, (res) => {
        var html = ''
        if(res.statusCode != 200){
            reject('响应失败')
        }
        res.setEncoding('utf8')
        res.on('data', (chunck) => {
            html += chunck
        })
        res.on('end', () => {
            resolve(html)
        })
    })
    req.on('error', (e) => {
        reject(e)
    })
    if(postData){
        var postDataStr = querystring.stringify(postData)
        options.headers['Content-Length'] = Buffer.byteLength(postDataStr)
        req.write(postDataStr)
    }
    req.end()
}
module.exports = {
    requestWipoTranslate,
    responseWipoTranslate
}