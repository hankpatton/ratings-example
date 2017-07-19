var mongoose = require('mongoose')
var Schema = mongoose.Schema

const ratingSchema = new Schema({
  userId: { type: String, required: true },
  userEmail: { type: String, required: true },
  rating: { type: Number, required: true }
})

module.exports = mongoose.model('Rating', ratingSchema)
