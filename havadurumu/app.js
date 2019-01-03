var weather = require ("./weather");
var location = require ("./location");

weather(function(currentWeather){
console.log(currentWeather);
});


 location(function(sehir){
  console.log(sehir);
}); 