var express = require('express');
var router = express.Router();
var newsHttp = require('../services/newshttp.js');

/* GET Contact page. */
router.get('/general', function(req, res, next) {
  console.log("http://localhost:4000/posts/category/general")
  newsHttp.httpGet("http://localhost:4000/posts/category/general", function (err, body) {
      if (err) {
        console.log(err)
        res.redirect('/error');
      }
      else {
        res.render('category', body);
      }
    });
});

router.get('/business', function(req, res, next) {
  console.log("http://localhost:4000/posts/category/business")
  newsHttp.httpGet("http://localhost:4000/posts/category/business", function (err, body) {
      if (err) {
        console.log(err)
        res.redirect('/error');
      }
      else {
        res.render('category', body);
      }
    });
});

router.get('/tech', function(req, res, next) {
  console.log("http://localhost:4000/posts/category/technology")
  newsHttp.httpGet("http://localhost:4000/posts/category/technology", function (err, body) {
      if (err) {
        console.log(err)
        res.redirect('/error');
      }
      else {
        res.render('category', body);
      }
    });
});


router.get('/sport', function(req, res, next) {
  console.log("http://localhost:4000/posts/category/sport")
  newsHttp.httpGet("http://localhost:4000/posts/category/sport", function (err, body) {
      if (err) {
        console.log(err)
        res.redirect('/error');
      }
      else {
        res.render('category', body);
      }
    });
});

router.get('/science', function(req, res, next) {
  console.log("http://localhost:4000/posts/category/science-and-nature")
  newsHttp.httpGet("http://localhost:4000/posts/category/science-and-nature", function (err, body) {
      if (err) {
        console.log(err)
        res.redirect('/error');
      }
      else {
        res.render('category', body);
      }
    });
});

router.get('/fun', function(req, res, next) {
  console.log("http://localhost:4000/posts/category/entertainment")
  newsHttp.httpGet("http://localhost:4000/posts/category/entertainment", function (err, body) {
      if (err) {
        console.log(err)
        res.redirect('/error');
      }
      else {
        res.render('category', body);
      }
    });
});


router.get('/music', function(req, res, next) {
  console.log("http://localhost:4000/posts/category/music")
  newsHttp.httpGet("http://localhost:4000/posts/category/music", function (err, body) {
      if (err) {
        console.log(err)
        res.redirect('/error');
      }
      else {
        res.render('category', body);
      }
    });
});

router.get('/gaming', function(req, res, next) {
  console.log("http://localhost:4000/posts/category/gaming")
  newsHttp.httpGet("http://localhost:4000/posts/category/gaming", function (err, body) {
      if (err) {
        console.log(err)
        res.redirect('/error');
      }
      else {
        res.render('category', body);
      }
    });
});

module.exports = router;