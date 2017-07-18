var express = require('express');
var router = express.Router();
var ratings = require('./ratings')

router.use('/ratings', ratings);

module.exports = router;
