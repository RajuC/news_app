'use strict';

var express = require('express');
var router = express.Router();
var postUtils = require('../services/postUtils.js');


/* GET Contact page. */
router.get('/general', function(req, res, next) {
  postUtils.renderPost(req, res, "category/general");
});

router.get('/business', function(req, res, next) {
  postUtils.renderPost(req, res, "category/business");
});

router.get('/technology', function(req, res, next) {
  postUtils.renderPost(req, res, "category/technology");
});


router.get('/sport', function(req, res, next) {
  postUtils.renderPost(req, res, "category/sport");
});

router.get('/science-and-nature', function(req, res, next) {
  postUtils.renderPost(req, res, "category/science-and-nature");
});

router.get('/entertainment', function(req, res, next) {
  postUtils.renderPost(req, res, "category/entertainment");
});


router.get('/music', function(req, res, next) {
  postUtils.renderPost(req, res, "category/music");
});

router.get('/gaming', function(req, res, next) {
  postUtils.renderPost(req, res, "category/gaming");
});


module.exports = router;