var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=29729ade78adb9e08f63601e98cdd545&units=imperial'; 

module.exports = {
	getTemp: function (location) {
		var encodedLocation = encodeURIComponent(location);
		var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

		return axios.get(requestUrl).then(
			function (res) {
				// success
				if (res.data.cod && res.data.message) {
					throw new Error(res.data.message);
				} else {
					return res.data.main.temp;
				}
			}, function (res) {
				// error
				throw new Error(res.data.message);
			}
		);
	}
}