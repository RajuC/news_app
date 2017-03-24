'use strict';

var express = require('express');
var router = express.Router();
var postUtils = require('../services/postUtils.js');


/* GET Contact page. */
router.get('/general', function(req, res, next) {
  postUtils.renderPost(req, res, "category/general", "category");
});

router.get('/business', function(req, res, next) {
  postUtils.renderPost(req, res, "category/business", "category");
});

router.get('/technology', function(req, res, next) {
  postUtils.renderPost(req, res, "category/technology", "category");
});


router.get('/sport', function(req, res, next) {
  postUtils.renderPost(req, res, "category/sport", "category");
});

router.get('/science-and-nature', function(req, res, next) {
  postUtils.renderPost(req, res, "category/science-and-nature", "category");
});

router.get('/entertainment', function(req, res, next) {
  postUtils.renderPost(req, res, "category/entertainment", "category");
});


router.get('/music', function(req, res, next) {
  postUtils.renderPost(req, res, "category/music", "category");
});

router.get('/gaming', function(req, res, next) {
  postUtils.renderPost(req, res, "category/gaming", "category");
});


module.exports = router;