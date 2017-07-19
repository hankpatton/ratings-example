const express = require('express')
const Rating = require('../models/rating')
const router = express.Router()

/* GET all ratings. */
router.get('/', (req, res, next) => {
  Rating
    .find({})
    .then((data) => res.json(data))
    .catch(err => next(err))
})

/* POST new ratings. */
router.post('/', (req, res, next) => {
  const rating = new Rating(req.body)
  rating
    .save()
    .then((data) => res.json(data))
    .catch(err => next(err))
})

/* GET specific user ratings. */
router.get('/:id', (req, res, next) => {
  Rating
    .find({userId: req.params.id})
    .then((data) => res.json(data))
    .catch(err => next(err))
})

module.exports = router
