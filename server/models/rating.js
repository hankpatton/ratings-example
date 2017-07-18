var mongoose = require('mongoose')
var Schema = mongoose.Schema

const ratingSchema = new Schema({
  userEmail: { type: String, required: true },
  rating: { type: Number, required: true }
})

module.exports = mongoose.model('Rating', ratingSchema)
