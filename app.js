const yargs = require('yargs');

const geocode = require('./geocode/geocode.js');
const weather = require('./weather/weather.js');

const argv = yargs.options({
  a:{
    demand: true,
    alias: 'address',
    describe: 'Address to fetch weather for',
    string: true
  }
})
.help()
.alias('help','h')
.argv;

geocode.geocodeAddress(argv.a, function(errorMsg, results){
  if(errorMsg){
    console.log(errorMsg)
  }else{
    console.log(`${results.formatted_address}`);
    weather.weatherForeCast(results.latitude, results.longitude, function(errorMessage, weatherResults){
      if(errorMessage){
        console.log(errorMessage)
      }else{
        console.log(`It is currently ${weatherResults.temperature}. It feels like ${weatherResults.apparentTemperature}`)
      }
    });
  }
});

// b2a062e4997dc7819fc483222acdf56e
