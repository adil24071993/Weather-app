const request = require('request');

var geocodeAddress = function(address, callback){
  var address = encodeURIComponent(address);

  request({
    url:`https://maps.googleapis.com/maps/api/geocode/json?address=${address
    }`,
    json: true
  }, function(error, response, body){
    if(error){
      callback(`Unable to connect google server: ${error.error_message}`);
    }else if(body.status === 'ZERO_RESULTS'){
      callback('Unable to find the address');
    }else if(body.status === 'OK'){
      var mapResponse = body;
      callback(false, {
        "formatted_address": `${mapResponse.results[0].formatted_address}`,
        "latitude": `${mapResponse.results[0].geometry.location.lat}`,
        "longitude":`${mapResponse.results[0].geometry.location.lng}`
      });
    }
  });
};



module.exports = {
  geocodeAddress
}
