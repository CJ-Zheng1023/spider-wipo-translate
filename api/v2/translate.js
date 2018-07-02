var options = require('../../config/wipo-config-v2')
var parser = require('../../utils/parser')
var rp = require('request-promise')
var tough = require('tough-cookie')
module.exports = {
    translateText(req, res, next){
        rp = rp.defaults({jar: true})
        rp(options.main).then((html) => {
            options.translation.form['formToTranslate:srcTxt'] = req.body.source
            options.translation.form['javax.faces.ViewState'] = parser.getValueById(html, '#javax\\.faces\\.ViewState')
            return rp(options.translation)
        }).then((html) => {
            var translation = parser.getTranslation(parser.getHtmlById(html, '#dstTextProposals'))
            res.json({translation})
        }).catch((err) => {
            res.json({err})
        });
    }
}