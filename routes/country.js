'use strict';

var express = require('express');
var router = express.Router();
var postUtils = require('../services/postUtils.js');


// GET Country Posts
router.get('/in', function(req, res, next) {
  postUtils.renderPost(req, res, "/posts/country/in", "country");
});

router.get('/us', function(req, res, next) {
  postUtils.renderPost(req, res, "/posts/country/us", "country");
});

router.get('/gb', function(req, res, next) {
  postUtils.renderPost(req, res, "/posts/country/gb", "country");
});


router.get('/au', function(req, res, next) {
  postUtils.renderPost(req, res, "/posts/country/au", "country");
});

router.get('/it', function(req, res, next) {
  postUtils.renderPost(req, res, "/posts/country/it", "country");
});


module.exports = router;