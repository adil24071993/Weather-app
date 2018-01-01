const request = require('request');

var weatherForeCast = function(lat,lng,callback){
  var apiKey = 'b2a062e4997dc7819fc483222acdf56e';
  var forecastUrl = `https://api.darksky.net/forecast/${apiKey}/${lat},${lng}`;
  request({
    url:forecastUrl,
    json:true
  }, function(error, response, body){
    if(error){
      callback('Unable to fetch weather information')
    }else{
      callback(undefined, body.currently)
    }
  })
}

module.exports = {
  weatherForeCast
}
