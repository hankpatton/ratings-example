var express = require('express');
var router = express.Router();

const fakeData = [
  {userId: 1, rating: 4},
  {userId: 1, rating: 2},
  {userId: 1, rating: 1},
  {userId: 1, rating: 4},
  {userId: 1, rating: 3},
  {userId: 2, rating: 1},
  {userId: 2, rating: 4},
  {userId: 2, rating: 5},
  {userId: 2, rating: 5},
  {userId: 2, rating: 1},
]

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json(fakeData);
});

router.get('/:id', function(req, res, next) {
  const userRatings = fakeData.filter(data => data.userId === parseInt(req.params.id))
  res.json(userRatings);
});

module.exports = router;
