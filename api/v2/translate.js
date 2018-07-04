var options = require('../../config/wipo-config-v2')
var parser = require('../../utils/parser')
var Response = require('../../utils/response')
var fs = require('fs')
var rq = require('request-promise')
var fu = require('../../utils/function-util')
module.exports = {
    /**
     * 执行翻译，爬取翻译结果
     * @param req
     * @param res
     * @param next
     */
    translateText(req, res, next){
        var j = rq.jar()
        rq = rq.defaults({jar: j})
        var startTime
        var userAgent = fu.randomUserAgent()
        var fakeIp = fu.randomIp()
        options.main.headers['User-Agent'] = userAgent
        options.main.headers['x-forwarded-for'] = fakeIp
        rq(options.main).then((html) => {
            options.translation.form['formToTranslate:srcTxt'] = req.body.source
            options.translation.form['javax.faces.ViewState'] = parser.getValueById(html, '#javax\\.faces\\.ViewState')
            options.translation.headers['User-Agent'] = userAgent
            options.translation.headers['x-forwarded-for'] = fakeIp
            startTime = +new Date()
            return rq(options.translation)
        }).then((html) => {
            var spendTime = +new Date() - startTime
            var translation = parser.getTranslation(parser.getHtmlById(html, '#dstTextProposals'))
            if(!translation){
                fs.writeFileSync(__dirname + '/html-log.txt', `${req.body.source}---${html}\n`, {flag: 'a+'})
                if(res instanceof Response){
                    next(res)
                }
            }else{
                if(typeof next === 'function'){
                    next(res, `${res.key}:${translation}`)
                }
            }
            res.json({translation, spendTime})
        }).catch((err) => {
            console.log(err)
            res.status(500)
            res.json({msg: '翻译错误'})
        });
    }
}