var spider = require('../../utils/spider')
var options = require('../../config/wipo-config-v1')
var parser = require('../../utils/parser')
module.exports = {
    translateText(req, res, next){
        spider.requestWipoTranslate(options.main).then((response) => {
            var cookie = response.headers['set-cookie'][0]
            options.translation.headers['Cookie'] = options.main.headers['Cookie'] + cookie
            return spider.responseWipoTranslate(response)

        }).then((html) => {
            return spider.requestWipoTranslate(options.translation, {
                'formToTranslate': 'formToTranslate',
                'formToTranslate:srcTxt': req.body.source,
                'formToTranslate:domain': 'XXXX',
                'formToTranslate:langpair': 'zh-NMT-en',
                'formToTranslate:userProvidedTranslations': '',
                'formToTranslate:srcSegmentToHighlight': '',
                'formToTranslate:txtTranslated': '',
                'formToTranslate:taptakey': '',
                'formToTranslate:captchaText': '',
                'javax.faces.ViewState': parser.getValueById(html, '#javax\\.faces\\.ViewState'),
                //'javax.faces.ViewState': '1897454927956830145:4790408373973137206',
                'javax.faces.source': 'formToTranslate:formToTranslateSubmit',
                'javax.faces.partial.event': 'click',
                'javax.faces.partial.execute': 'formToTranslate:formToTranslateSubmit formToTranslate',
                'javax.faces.partial.render': 'formToTranslate:langpair formToTranslate:domain formToTranslate:translationResult',
                'javax.faces.behavior.event': 'action',
                'javax.faces.partial.ajax': 'true'
            })
        }).then((response) => {
            return spider.responseWipoTranslate(response)
        }).then((html) => {
            var translation = parser.getTranslation(parser.getHtmlById(html, '#dstTextProposals'))
            res.json({
                translation
            })
        }).catch((e) => {
            console.log(e)
            res.status(500)
            res.send('500')
        })
    }
}