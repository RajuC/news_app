'use strict';

var express = require('express');
var router = express.Router();
var postUtils = require('../services/postUtils.js');


// GET Country Posts
router.get('/in', function(req, res, next) {
  postUtils.renderPost(req, res, "country/in", "country");
});

router.get('/us', function(req, res, next) {
  postUtils.renderPost(req, res, "country/us", "country");
});

router.get('/gb', function(req, res, next) {
  postUtils.renderPost(req, res, "country/gb", "country");
});


router.get('/au', function(req, res, next) {
  postUtils.renderPost(req, res, "country/au", "country");
});

router.get('/it', function(req, res, next) {
  postUtils.renderPost(req, res, "country/it", "country");
});


module.exports = router;