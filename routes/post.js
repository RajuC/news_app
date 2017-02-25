'use strict';

var express = require('express');
var router = express.Router();
var newsHttp = require('../services/newshttp.js');

/* GET post page. */
router.get('/top', function(req, res, next) {
  console.log("http://localhost:4000/posts/top")
  newsHttp.httpGet("http://localhost:4000/posts/top", function (err, body) {
      if (err) {
        console.log(err)
        res.redirect('/error');
      }
      else {
        console.log('body body!');
        res.render('post', body);
      }
    });
});


router.get('/latest', function(req, res, next) {
  console.log("http://localhost:4000/posts/latest")
  newsHttp.httpGet("http://localhost:4000/posts/latest", function (err, body) {
      if (err) {
        console.log(err)
        res.redirect('/error');
      }
      else {
        res.render('post', body);
      }
    });
});

router.get('/trending', function(req, res, next) {
  console.log("http://localhost:4000/posts/trending")
  newsHttp.httpGet("http://localhost:4000/posts/trending", function (err, body) {
      if (err) {
        console.log(err)
        res.redirect('/error');
      }
      else {
        res.render('post', body);
      }
    });
});


module.exports = router;