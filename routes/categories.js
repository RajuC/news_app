'use strict';

var express = require('express');
var router = express.Router();
var postUtils = require('../services/postUtils.js');


/* GET Contact page. */
router.get('/general', function(req, res, next) {
  postUtils.renderPost(req, res, "/posts/category/general", "category");
});

router.get('/business', function(req, res, next) {
  postUtils.renderPost(req, res, "/posts/category/business", "category");
});

router.get('/technology', function(req, res, next) {
  postUtils.renderPost(req, res, "/posts/category/technology", "category");
});


router.get('/sport', function(req, res, next) {
  postUtils.renderPost(req, res, "/posts/category/sport", "category");
});

router.get('/science-and-nature', function(req, res, next) {
  postUtils.renderPost(req, res, "/posts/category/science-and-nature", "category");
});

router.get('/entertainment', function(req, res, next) {
  postUtils.renderPost(req, res, "/posts/category/entertainment", "category");
});


router.get('/music', function(req, res, next) {
  postUtils.renderPost(req, res, "/posts/category/music", "category");
});

router.get('/gaming', function(req, res, next) {
  postUtils.renderPost(req, res, "/posts/category/gaming", "category");
});


module.exports = router;