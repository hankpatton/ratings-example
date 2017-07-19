const express = require('express')
const jwt = require('jwt-simple')
const config = require('../config')
const User = require('../models/user')
const router = express.Router()
const passport = require('passport')
const requireSignIn = passport.authenticate('local', { session: false })

const tokenForUser = (user) => {
  const timestamp = new Date().getTime()
  return jwt.encode({ sub: user.id, iat: timestamp }, config.secret)
}

/* POST create user. */
router.post('/signup', (req, res, next) => {
  const { email, password } = req.body

  // return error if no email or password is provided
  if (!email || !password) {
    return res.status(422).send({ error: 'You must provide an email and password.' })
  }

  User
    .findOne({ email })
    .then(existingUser => {
      if (existingUser) { return res.status(422).send({ error: 'Account already exists'}) }
      const user = new User({ email, password })
      user.save().then(user => res.json({ token: tokenForUser(user) }))
    })
    .catch(err => next(err))
})

/* POST login user. */
router.post('/signin', requireSignIn, (req, res, next) => {
  // if signin is successful send token
  res.send({ token: tokenForUser(req.user)})
})

module.exports = router
