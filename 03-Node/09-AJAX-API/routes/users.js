var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  let message = req.param('message')
  res.send('Edxael: ', message)
});

module.exports = router;
