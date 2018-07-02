var options = require('../../config/wipo-config-v2')
var parser = require('../../utils/parser')
var rq = require('request-promise')
module.exports = {
    translateText(req, res, next){
        var j = rq.jar()
        rq = rq.defaults({jar: j})
        var startTime
        rq(options.main).then((html) => {
            options.translation.form['formToTranslate:srcTxt'] = req.body.source
            options.translation.form['javax.faces.ViewState'] = parser.getValueById(html, '#javax\\.faces\\.ViewState')
            startTime = +new Date()
            return rq(options.translation)
        }).then((html) => {
            var spendTime = +new Date() - startTime
            var translation = parser.getTranslation(parser.getHtmlById(html, '#dstTextProposals'))
            res.json({translation, spendTime})
        }).catch((err) => {
            console.log(err)
            res.status(500)
            res.json({msg: '翻译错误'})
        });
    }
}