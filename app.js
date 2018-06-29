var express = require('express')
var app = express()
var apiV1 = require('./routes/api-v1')
app.set('port', process.env.PORT || 3000)
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json())
app.listen(app.get('port'), function(){
    console.log('server start!')
})
app.use('/api/v1', apiV1)
//定制404页面
app.use(function(req, res){
    res.status(404);
    res.send('404');
})
//定制500页面
app.use(function(req, res){
    res.status(500);
    res.send('500');
})

/** 捕获未被业务catch的所有剩余的异常或错误，防止nodejs服务停止 **/
process.on('uncaughtException', function(err) {
    console.error(err)
})