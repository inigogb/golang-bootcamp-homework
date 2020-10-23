const axios = require("axios");
const url = require("url");
const api_key = process.env.WEATHER_API_KEY;
const options = require("../config/options");

/**
 * Fetch current weather data from openweathermap.org
 * @param {number} lat Latitude from GPS coordinate
 * @param {number} lon Longitude from GPS coordinate
 * response 
 * @return {JSON} Weather data as JSON
 */
const getCurrentWeather = async ({ lat, lon }) => {

    try {
        lat && (options.query["lat"] = lat);
        lon && (options.query["lon"] = lon);
        options.query["appid"] = api_key;
        let weatherUrl = url.parse(url.format(options));
        let response = await axios.get(weatherUrl);
        return response.data;
    } catch(error) {
        throw new Error(error.message);
    }
};

module.exports = {
    getCurrentWeather
};