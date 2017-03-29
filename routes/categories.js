'use strict';

var express = require('express');
var router = express.Router();
var postUtils = require('../services/postUtils.js');


/* GET Contact page. */
router.get('/general', function(req, res, next) {
  postUtils.renderPost(req, res, "/posts/category/general", "category", "General News");
});

router.get('/business', function(req, res, next) {
  postUtils.renderPost(req, res, "/posts/category/business", "category", "Business News");
});

router.get('/technology', function(req, res, next) {
  postUtils.renderPost(req, res, "/posts/category/technology", "category", "Technology News");
});


router.get('/sport', function(req, res, next) {
  postUtils.renderPost(req, res, "/posts/category/sport", "category", "Sports News");
});

router.get('/science-and-nature', function(req, res, next) {
  postUtils.renderPost(req, res, "/posts/category/science-and-nature", "category", "Science and Nature News");
});

router.get('/entertainment', function(req, res, next) {
  postUtils.renderPost(req, res, "/posts/category/entertainment", "category", "Entertainment News");
});


router.get('/music', function(req, res, next) {
  postUtils.renderPost(req, res, "/posts/category/music", "category", "Music News");
});

router.get('/gaming', function(req, res, next) {
  postUtils.renderPost(req, res, "/posts/category/gaming", "category", "Gaming News");
});


module.exports = router;