var express = require('express');
var router = express.Router();

/* GET Contact page. */
router.get('/', function(req, res, next) {
  res.render('error', {"tabs": "error", "pageTitle":"Error"})});

module.exports = router;