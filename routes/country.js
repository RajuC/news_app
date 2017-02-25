var express = require('express');
var router = express.Router();

/* GET Contact page. */
router.get('/india', function(req, res, next) {
  console.log("http://localhost:4000/posts/country/in")
  res.redirect('http://www.thehindu.com/news/national/tamil-nadu/Live-Supreme-Court-ruling-on-Sasikalas-disproportionate-assets-case/article17298985.ece');

});

router.get('/usa', function(req, res, next) {
  console.log("http://localhost:4000/posts/country/us")
  res.redirect('http://www.thehindu.com/news/national/tamil-nadu/Live-Supreme-Court-ruling-on-Sasikalas-disproportionate-assets-case/article17298985.ece');

});

router.get('/uk', function(req, res, next) {
console.log("http://localhost:4000/posts/country/gb")
  res.redirect('http://www.thehindu.com/news/national/tamil-nadu/Live-Supreme-Court-ruling-on-Sasikalas-disproportionate-assets-case/article17298985.ece');

});


router.get('/australia', function(req, res, next) {
console.log("http://localhost:4000/posts/country/au")
  res.redirect('http://www.thehindu.com/news/national/tamil-nadu/Live-Supreme-Court-ruling-on-Sasikalas-disproportionate-assets-case/article17298985.ece');

});

router.get('/italy', function(req, res, next) {
console.log("http://localhost:4000/posts/country/it")
  res.redirect('http://www.thehindu.com/news/national/tamil-nadu/Live-Supreme-Court-ruling-on-Sasikalas-disproportionate-assets-case/article17298985.ece');

});
module.exports = router;