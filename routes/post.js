'use strict';

var express = require('express');
var router = express.Router();
var postUtils = require('../services/postUtils.js');



/* GET post page. */

router.get('/', function(req, res, next) {
  postUtils.renderPost(req, res, "/posts", "posts", "A2Z News Dashboard");
});

router.get('/top', function(req, res, next) {
  postUtils.renderPost(req, res, "/posts/top", "top", "Top News");
});


router.get('/latest', function(req, res, next) {
  postUtils.renderPost(req, res, "/posts/latest", "latest", "Latest News");
});

router.get('/trending', function(req, res, next) {
  postUtils.renderPost(req, res, "/posts/trending", "trending", "Trending News");
});

module.exports = router;