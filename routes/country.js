'use strict';

var express = require('express');
var router = express.Router();
var postUtils = require('../services/postUtils.js');


// GET Country Posts
router.get('/in', function(req, res, next) {
  postUtils.renderPost(req, res, "country/in");
});

router.get('/us', function(req, res, next) {
  postUtils.renderPost(req, res, "country/us");
});

router.get('/gb', function(req, res, next) {
  postUtils.renderPost(req, res, "country/gb");
});


router.get('/au', function(req, res, next) {
  postUtils.renderPost(req, res, "country/au");
});

router.get('/it', function(req, res, next) {
  postUtils.renderPost(req, res, "country/it");
});


module.exports = router;