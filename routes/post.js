var express = require('express');
var router = express.Router();

/* GET Contact page. */
router.get('/top', function(req, res, next) {
  console.log("http://localhost:4000/posts/top")
  res.redirect('http://www.thehindu.com/news/national/tamil-nadu/Live-Supreme-Court-ruling-on-Sasikalas-disproportionate-assets-case/article17298985.ece');

});


router.get('/latest', function(req, res, next) {
console.log("http://localhost:4000/posts/latest")
  res.redirect('http://www.thehindu.com/news/national/tamil-nadu/Live-Supreme-Court-ruling-on-Sasikalas-disproportionate-assets-case/article17298985.ece');

});

router.get('/trending', function(req, res, next) {
console.log("http://localhost:4000/posts/trending")
  res.redirect('http://www.thehindu.com/news/national/tamil-nadu/Live-Supreme-Court-ruling-on-Sasikalas-disproportionate-assets-case/article17298985.ece');

});


module.exports = router;