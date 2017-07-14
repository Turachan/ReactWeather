var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/find?q=';

//1b9de4d7c66e409dcc29b379a9c2e8c0
module.exports = {
  getTemp: function (location) {

    var encodedURL = '&units=metric&appid=1b9de4d7c66e409dcc29b379a9c2e8c0';
    var URL = OPEN_WEATHER_MAP_URL+location+encodedURL;
    console.log(URL);
    return axios.get(URL).then(function(res){
      if(res.data.list.length === 0){
        throw new Error("City not found");
      } else {
        return res.data.list;
      }
    }, function(res) {
      throw new Error("City not found");
    });
  }
}
