 'use strict';

var newsHttp = require('../services/newshttp.js');
var postUrl = "http://localhost:4000/posts/";
var postUtils = require('../services/postUtils.js');



module.exports.getOffset = function(req){
  var offset = req.query.offset
  if (req.query.posts == "prev") {
        if (offset == 20 || offset == undefined){
            return 0;
          } 
        else { 
            return offset
          } 
    }
  else {
        return offset
    }
}


module.exports.renderPost = function(req, res, postType){
  var offset = postUtils.getOffset(req);
  var url =  postUrl + postType + "?offset=" + offset + "&limit=20&posts=" + req.query.posts ;
  console.log(url);
  newsHttp.httpGet(url, function (err, body) {
    if (err) {
      console.log(err)
      res.redirect('/error');
    }
    else {
      console.log('body body!');
      res.render('post', body);
    }
  });
}


