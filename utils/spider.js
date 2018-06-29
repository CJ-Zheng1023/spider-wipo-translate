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
module.exports = {
    requestWipoTranslate,
    responseWipoTranslate
}