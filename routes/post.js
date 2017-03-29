'use strict';

var express = require('express');
var router = express.Router();
var postUtils = require('../services/postUtils.js');



/* GET post page. */

router.get('/', function(req, res, next) {
  postUtils.renderPost(req, res, "/posts", "posts");
});

router.get('/top', function(req, res, next) {
  postUtils.renderPost(req, res, "/posts/top", "top");
});


router.get('/latest', function(req, res, next) {
  postUtils.renderPost(req, res, "/posts/latest", "latest");
});

router.get('/trending', function(req, res, next) {
  postUtils.renderPost(req, res, "/posts/trending", "trending");
});

module.exports = router;