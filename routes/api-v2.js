var express = require('express')
var router = express.Router()
var C = require('../api/v2/translate')
router.post('/translate', C.translateText)
router.get('/translate', C.translateText)
module.exports = router