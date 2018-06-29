var spider = require('../../utils/spider')
var options = require('../../config/wipo-config')
var cheerio = require('cheerio')
module.exports = {
    translateText(req, res, next){
        spider.requestWipoTranslate(options.main).then((response) => {
            var cookie = response.headers['set-cookie'][0]
            options.translation.headers['Cookie'] = options.main.headers['Cookie'] + cookie
            var html = ''
            response.setEncoding('utf8')
            response.on('data', (chunck) => {
                html += chunck
            })
            response.on('end', () => {
                var $ = cheerio.load(html)
                spider.requestWipoTranslate(options.translation, {
                    'formToTranslate': 'formToTranslate',
                    'formToTranslate:srcTxt': 'JavaServer Faces (JSF) 是一种用于构建Java Web 应用程序的标准框架（是Java Community Process 规定的JSR-127标准）。它提供了一种以组件为中心的用户界面（UI）构建方法，从而简化了Java服务器端应用程序的开发。由于由Java Community Process (JCP) 推动，属于Java EE 5中的技术规范，而受到了厂商的广泛支持。',
                    'formToTranslate:domain': 'XXXX',
                    'formToTranslate:langpair': 'zh-NMT-en',
                    'formToTranslate:userProvidedTranslations': '',
                    'formToTranslate:srcSegmentToHighlight': '',
                    'formToTranslate:txtTranslated': '',
                    'formToTranslate:taptakey': '',
                    'formToTranslate:captchaText': '',
                    'javax.faces.ViewState': $('#javax\\.faces\\.ViewState').val(),
                    'javax.faces.source': 'formToTranslate:formToTranslateSubmit',
                    'javax.faces.partial.event': 'click',
                    'javax.faces.partial.execute': 'formToTranslate:formToTranslateSubmit formToTranslate',
                    'javax.faces.partial.render': 'formToTranslate:domain formToTranslate:translationResult',
                    'javax.faces.behavior.event': 'action',
                    'javax.faces.partial.ajax': 'true'
                }).then((response) => {
                    response.setEncoding('utf8')
                    var data = ''
                    response.on('data', (chunk) => {
                        data += chunk
                    })
                    response.on('end', () => {
                        res.json(data)
                    })
                }).catch((e) => {
                    res.send(e)
                })
            })
        }).catch((e) => {
            res.send(e)
        })

    }
}