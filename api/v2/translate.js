var options = require('../../config/wipo-config-v2')
var parser = require('../../utils/parser')
var rp = require('request-promise')
var tough = require('tough-cookie')
module.exports = {
    translateText(req, res, next){
        rp = rp.defaults({jar: true})
        var startTime
        rp(options.main).then((html) => {
            options.translation.form['formToTranslate:srcTxt'] = req.body.source
            options.translation.form['javax.faces.ViewState'] = parser.getValueById(html, '#javax\\.faces\\.ViewState')
            startTime = +new Date()
            return rp(options.translation)
        }).then((html) => {
            var spendTime = +new Date() - startTime
            var translation = parser.getTranslation(parser.getHtmlById(html, '#dstTextProposals'))
            res.json({translation, spendTime})
        }).catch((err) => {
            res.status(500)
            res.json({msg: '翻译错误'})
        });
    }
}