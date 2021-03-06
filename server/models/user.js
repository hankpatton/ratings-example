const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Rating = require('./rating')
const bcrypt = require('bcrypt-nodejs')
const _ = require('lodash')

const userSchema = new Schema({
  email: { type: String, unique: true },
  password: String
})

userSchema.virtual('ratings', {
  ref: 'Rating',
  localField: '_id',
  foreignField: 'user'
})

userSchema.virtual('ratings_average').get(function () {
  if (this.ratings.length === 0) { return 0 }
  return _.round(_.meanBy(this.ratings.map(rating => parseInt(rating.rating))))
})

// Hash password before saving to backend
userSchema.pre('save', function(next) {
  const user = this
  bcrypt.genSalt(10, (err, salt) => {
    if (err) { return next(err) }
    bcrypt.hash(user.password, salt, null, (err, hash) => {
      if (err) { return next(err) }
      user.password = hash
      next()
    })
  })
})

// Compare submitted password to hashed/saved password for login
userSchema.methods.comparePassword = function(givenPassword, cb) {
  bcrypt.compare(givenPassword, this.password, (err, isMatch) => {
    if (err) { return cb(err) }
    cb(null, isMatch)
  })
}

userSchema.set('toJSON', {
  virtuals: true
})

module.exports = mongoose.model('User', userSchema)
