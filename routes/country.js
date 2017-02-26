var express = require('express');
var router = express.Router();
var newsHttp = require('../services/newshttp.js');


/* GET Contact page. */
router.get('/india', function(req, res, next) {
  console.log("http://localhost:4000/posts/country/in")
  newsHttp.httpGet("http://localhost:4000/posts/country/in", function (err, body) {
      if (err) {
        console.log(err)
        res.redirect('/error');
      }
      else {
        res.render('country', body);
      }
    });
});

router.get('/usa', function(req, res, next) {
  console.log("http://localhost:4000/posts/country/us")
  newsHttp.httpGet("http://localhost:4000/posts/country/us", function (err, body) {
      if (err) {
        console.log(err)
        res.redirect('/error');
      }
      else {
        res.render('country', body);
      }
    });
});

router.get('/uk', function(req, res, next) {
	console.log("http://localhost:4000/posts/country/gb")
  newsHttp.httpGet("http://localhost:4000/posts/country/gb", function (err, body) {
      if (err) {
        console.log(err)
        res.redirect('/error');
      }
      else {
        res.render('country', body);
      }
    });
});


router.get('/australia', function(req, res, next) {
  console.log("http://localhost:4000/posts/country/au")
  newsHttp.httpGet("http://localhost:4000/posts/country/au", function (err, body) {
      if (err) {
        console.log(err)
        res.redirect('/error');
      }
      else {
        res.render('country', body);
      }
    });
});

router.get('/italy', function(req, res, next) {
console.log("http://localhost:4000/posts/country/it")
  newsHttp.httpGet("http://localhost:4000/posts/country/it", function (err, body) {
      if (err) {
        console.log(err)
        res.redirect('/error');
      }
      else {
        res.render('country', body);
      }
    });
});
module.exports = router;