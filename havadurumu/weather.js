var request = require('request');
var location = require ("./location");

var url2 = location(function(sehir){
    url ='https://api.openweathermap.org/data/2.5/weather?q='+sehir+',tr&appid=59d8d65973ec3fba3f09eb71e30ebde6&units=metric'
  return url;
}); 

 
 
console.log(url2);
/* module.exports= function (callback){
request({url: url, json: true}
        , function (error, response, body) {
  callback(body.name +" için hava sıcaklığı: "+body.main.temp); // Print the HTML for the Google homepage.
});

} 

 */