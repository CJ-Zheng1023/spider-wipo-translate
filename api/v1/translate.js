var spider = require('../../utils/spider')
module.exports = {
    translateText(req, res, next){
        spider({
            'formToTranslate': 'formToTranslate',
            'formToTranslate:srcTxt': 'JavaServer Faces (JSF) 是一种用于构建Java Web 应用程序的标准框架（是Java Community Process 规定的JSR-127标准）。它提供了一种以组件为中心的用户界面（UI）构建方法，从而简化了Java服务器端应用程序的开发。由于由Java Community Process (JCP) 推动，属于Java EE 5中的技术规范，而受到了厂商的广泛支持。',
            'formToTranslate:domain': 'XXXX',
            'formToTranslate:langpair': 'zh-NMT-en',
            'formToTranslate:userProvidedTranslations': '',
            'formToTranslate:srcSegmentToHighlight': '',
            'formToTranslate:txtTranslated': '',
            'formToTranslate:taptakey': '',
            'formToTranslate:captchaText': '',
            'javax.faces.ViewState': '-2581785857761677504:-7832732589990134633',
            'javax.faces.source': 'formToTranslate:formToTranslateSubmit',
            'javax.faces.partial.event': 'click',
            'javax.faces.partial.execute': 'formToTranslate:formToTranslateSubmit formToTranslate',
            'javax.faces.partial.render': 'formToTranslate:domain formToTranslate:translationResult',
            'javax.faces.behavior.event': 'action',
            'javax.faces.partial.ajax': 'true'
        }).then((response) => {
            //console.log(`状态码: ${response.statusCode}`)
            //console.log(`响应头: ${JSON.stringify(response.headers)}`)
            //console.log(`响应头: ${JSON.stringify(response.cookies)}`)
            console.log(response.client._httpMessage._header)
            /*for(var key in response.client._httpMessage){
                console.log(key)
            }*/
            response.setEncoding('utf8')
            var data = ''
            response.on('data', (chunk) => {
                data += chunk
            })
            response.on('end', () => {
                console.log('响应中已无数据。')
                res.json(data)
            })
        }).catch((e) => {
            res.send(e)
        })
    }
}