var express = require('express');
var router = express.Router();

/* GET Contact page. */
router.get('/general', function(req, res, next) {
  console.log("http://localhost:4000/posts/category/general")
  res.redirect('http://www.thehindu.com/news/national/tamil-nadu/Live-Supreme-Court-ruling-on-Sasikalas-disproportionate-assets-case/article17298985.ece');

});

router.get('/business', function(req, res, next) {
  console.log("http://localhost:4000/posts/category/business")
  res.redirect('http://www.thehindu.com/news/national/tamil-nadu/Live-Supreme-Court-ruling-on-Sasikalas-disproportionate-assets-case/article17298985.ece');

});

router.get('/tech', function(req, res, next) {
  console.log("http://localhost:4000/posts/category/technology")
  res.redirect('http://www.thehindu.com/news/national/tamil-nadu/Live-Supreme-Court-ruling-on-Sasikalas-disproportionate-assets-case/article17298985.ece');

});


router.get('/sport', function(req, res, next) {
  console.log("http://localhost:4000/posts/category/sport")
  res.redirect('http://www.thehindu.com/news/national/tamil-nadu/Live-Supreme-Court-ruling-on-Sasikalas-disproportionate-assets-case/article17298985.ece');

});

router.get('/science', function(req, res, next) {
  console.log("http://localhost:4000/posts/category/science-and-nature")
  res.redirect('http://www.thehindu.com/news/national/tamil-nadu/Live-Supreme-Court-ruling-on-Sasikalas-disproportionate-assets-case/article17298985.ece');

});

router.get('/fun', function(req, res, next) {
  console.log("http://localhost:4000/posts/category/entertainment")
  res.redirect('http://www.thehindu.com/news/national/tamil-nadu/Live-Supreme-Court-ruling-on-Sasikalas-disproportionate-assets-case/article17298985.ece');

});


router.get('/music', function(req, res, next) {
  console.log("http://localhost:4000/posts/category/music")
  res.redirect('http://www.thehindu.com/news/national/tamil-nadu/Live-Supreme-Court-ruling-on-Sasikalas-disproportionate-assets-case/article17298985.ece');

});

router.get('/gaming', function(req, res, next) {
  console.log("http://localhost:4000/posts/category/gaming")
  res.redirect('http://www.thehindu.com/news/national/tamil-nadu/Live-Supreme-Court-ruling-on-Sasikalas-disproportionate-assets-case/article17298985.ece');

});
module.exports = router;