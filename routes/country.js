'use strict';

var express = require('express');
var router = express.Router();
var postUtils = require('../services/postUtils.js');


// GET Country Posts
router.get('/in', function(req, res, next) {
  postUtils.renderPost(req, res, "/posts/country/in", "country", "India News");
});

router.get('/us', function(req, res, next) {
  postUtils.renderPost(req, res, "/posts/country/us", "country", "USA News");
});

router.get('/gb', function(req, res, next) {
  postUtils.renderPost(req, res, "/posts/country/gb", "country", "UK News");
});

router.get('/au', function(req, res, next) {
  postUtils.renderPost(req, res, "/posts/country/au", "country", "Australia News");
});

router.get('/it', function(req, res, next) {
  postUtils.renderPost(req, res, "/posts/country/it", "country", "Italy News");
});


module.exports = router;