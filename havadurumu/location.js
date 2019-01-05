var request = require('request');
var url ='https://ipinfo.io/'

module.exports= function (callback){
request({url: url, json: true}
        , function (error, response, body) {
  callback('https://api.openweathermap.org/data/2.5/weather?q='+body.city+',tr&appid=59d8d65973ec3fba3f09eb71e30ebde6&units=metric' ); // Print the HTML for the Google homepage.

});
}
