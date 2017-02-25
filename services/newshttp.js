'use strict'

var request = require('request');


//POST Request:

module.exports.httpPost = function(url, body, callback){
  request.post(
      url,
      { json: body,
        headers: {'Content-Type': 'application/json' }},
      function (error, response, data) {
          if (!error && response.statusCode == 201) {
              callback(error, data.data)
          }
          else if(!error && response.statusCode == 422){
            callback(error, response.body)
          }
          else {
            callback(error, response)
          }
      }
  );

};



//GET Request:

module.exports.httpGet = function(url, callback){
  request(url, function (error, response, body) {
    console.log('Response statusCode:', response && response.statusCode);
          if (!error && response.statusCode == 200) {
              callback(error, JSON.parse(body))
          }
          else {
            callback(error, response)
          }
});
};



