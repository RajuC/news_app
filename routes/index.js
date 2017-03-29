'use strict';

var express = require('express');
var router = express.Router();
var postUtils = require('../services/postUtils.js');



/* GET post page. */

router.get('/', function(req, res, next) {
  postUtils.renderPost(req, res, "/posts", "posts", "A2Z News Dashboard");
});


module.exports = router;