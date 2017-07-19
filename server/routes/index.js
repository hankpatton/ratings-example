const express = require('express')
const router = express.Router()
const passport = require('passport')
const passportService = require('../services/passport')

//Require Auth Middleware
const requireAuth = passport.authenticate('jwt', { session: false })

//Routes
const ratings = require('./ratings')
const users = require('./users')
const authentication = require('./authentication')

router.use('/auth', authentication)
router.use('/ratings', requireAuth, ratings)
router.use('/users', requireAuth, users)

module.exports = router
