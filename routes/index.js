'use strict';

var express = require('express');
var router = express.Router();
var newsHttp = require('../services/newshttp.js');

/* GET home page. */
router.get('/', function(req, res, next) {
/*  res.render('index', { title: 'Cool, huh!', condition: true, anyArray: [1,2,3] });*/
  console.log("http://localhost:4000/posts/")
  newsHttp.httpGet("http://localhost:4000/posts/", function (err, body) {
      if (err) {
        console.log(err)
        res.redirect('/error');
      }
      else {
        console.log('body body!');
        res.render('index', body);
      }
    });
});



module.exports = router;
