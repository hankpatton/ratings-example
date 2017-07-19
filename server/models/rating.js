var mongoose = require('mongoose')
var Schema = mongoose.Schema

const ratingSchema = new Schema({
  user: { type: String, required: true },
  rating: { type: String, required: true },
})

module.exports = mongoose.model('Rating', ratingSchema)
