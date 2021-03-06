/*
  Simple wrapper of request library
  http://github.com/mikeal/request
  For co-like interface.
*/
  
var request = require('request');

module.exports = requestThunk;

function requestThunk (opts) {
  return function (done) {
    request(opts, function (err, response, body) {
      var result = response;
      result.body = body;
      done(err, result);
    });
  };
}
