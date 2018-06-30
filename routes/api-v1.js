var express = require('express')
var router = express.Router()
var C = require('../api/v1/translate')
router.post('/translate', C.translateText)
module.exports = router