var request = require('request');
var location = require ("./location");


url = location(function(sehir){
  return sehir;
}); 

console.log(url);


 module.exports= function (callback){
request({url: url, json: true}
        , function (error, response, body) {
  callback(body.name +" için hava sıcaklığı: "+body.main.temp); // Print the HTML for the Google homepage.
  
});

} 

 