var express = require('express');
var Rating = require('../models/rating');
var router = express.Router();

/* GET all ratings. */
router.get('/', function(req, res, next) {
  Rating
    .find({})
    .then((data) => res.json(data))
    .catch(err => console.log(error))
});

/* POST new ratings. */
router.post('/', function(req, res, next) {
  const rating = new Rating(req.body)
  rating
    .save()
    .then((data) => res.json(data))
    .catch(err => console.log(err))
});

router.get('/:id', function(req, res, next) {
  Rating
    .find({userId: req.params.id})
    .then((data) => res.json(data))
    .catch(err => console.log(error))
});

module.exports = router;
