const express = require('express')
const User = require('../models/user')
const router = express.Router()

/* GET all ratings. */
router.get('/', (req, res, next) => {
  User
    .find({})
    .populate('ratings')
    .then((data) => res.json(data))
    .catch(err => next(err))
})

module.exports = router
