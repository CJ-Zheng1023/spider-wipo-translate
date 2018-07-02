var express = require('express')
var app = express()
var apiV1 = require('./routes/api-v1')
var apiV2 = require('./routes/api-v2')
app.set('port', process.env.PORT || 3000)
var bodyParser = require('body-parser')
//配置静态资源
app.use(express.static(__dirname+'/public'))
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json())
app.use('/api/v1', apiV1)
app.use('/api/v2', apiV2)
app.get('/index', function(req, res, next){
    res.sendFile(__dirname + '/views/index.html')
})
app.get('/batch', function(req, res, next){
    res.sendFile(__dirname + '/views/batch-translate.html')
})
app.listen(app.get('port'), function(){
    console.log('server start!')
})
//定制404页面
app.use(function(req, res){
    res.status(404)
    res.send('404')
})
//定制500页面
app.use(function(req, res){
    res.status(500)
    res.send('500')
})

/** 捕获未被业务catch的所有剩余的异常或错误，防止nodejs服务停止 **/
process.on('uncaughtException', function(err) {
    console.error(err)
})