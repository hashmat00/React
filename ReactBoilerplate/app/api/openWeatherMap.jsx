var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=365c322cbad80cabaf0458e709a58732&units=imperial'
//3d33ddc7c1c5ff4bd856d0d1f05e2acf

module.exports = {
  getTemp: function (location) {

    var encodedLocation = encodeURIComponent(location);
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

    return axios.get(requestUrl).then(function (res) {
     
      if (res.data.cod && res.data.message) {
        throw new Error(res.data.message);
      } else {
        console.log(res.data);
        return res.data.main.temp;
      }
    }, function (res) {
      console.log(res);
      throw new Error(res.data.message);
    });
  }
}