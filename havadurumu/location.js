var request = require('request');
var url ='https://ipinfo.io/'

module.exports= function (callback){
request({url: url, json: true}
        , function (error, response, body) {
  callback(body.city ); // Print the HTML for the Google homepage.

});

}
