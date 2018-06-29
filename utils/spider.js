var http = require('http')
var querystring = require('querystring')
var options = require('../config/wipo-config')
var spiderWipoTranslate = function(postData){
    var p = new Promise((resolve, reject) => {
        var postDataStr = querystring.stringify(postData)
        options.headers['Content-Length'] = Buffer.byteLength(postDataStr)
        var req = http.request(options, (res) => {
            resolve(res)
        })
        req.on('error', (e) => {
            reject(e);
        })
        req.write(postDataStr)
        req.end()
    })
    return p
}
module.exports = spiderWipoTranslate