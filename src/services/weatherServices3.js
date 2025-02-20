const API_KEY = process.env.REACT_APP_OPENWEATHER_KEY;

//Define the base URLs for the weather API
const GEOCODE_URL = "https://api.openweathermap.org/geo/1.0/direct";
const ONE_CALL_URL = "https://api.openweathermap.org/data/3.0/onecall";

/**
 *Converts a city name into latitude and longitude using the Geocoding API.
 * @param {string} cityName - The name of the city.
 * @returns {Promise<Object>} - An object containing lat and lon.
 */

 export const fetchCoordinates = async (cityName) => {
    //Build the URL for the Geocoding API, I limited this to one result just to make it easier from now
    //We can just modify this when we have implementations for the google maps API
    const url = `${GEOCODE_URL}?q=${encodeURIComponent(cityName)}&limit=1&appid=${API_KEY}`;

    //Error handling
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Failed to fetch coordinates");
    }

    const data = await response.json();
    if(!data || data.length === 0) {
      throw new Error("No coordinates found for the given city");
    }

    return { lat: data[0].lat, lon: data[0].lon };
 };

 /**
 * Fetches detailed weather data using the One Call API 3.0.
 * @param {string} cityName - The name of the city to fetch weather for.
 * @returns {Promise<Object>} - The weather data.
 */

 export const fetchWeather3 = async (cityName) => {
    try {
        //First convert the city name to coordinates.
        const { lat, lon } = await fetchCoordinates(cityName);

        //Build the URL for the One Call API 3.0 using the obtained coordinates
        const url = `${ONE_CALL_URL}?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=imperial`;

        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Failed to fetch weather data");
        }

        //Return the parsed JSON weather data
        return await response.json();
    } catch (error) {
        console.error("Error fetching weather data:", error);
        throw error;
    }
};

/**
//Fetches detailed weather data using the One Call API 3.0 for given coordinates.
//@param {number} lat - The latitude of the location.
//@param {number} lon - The longitude of the location.
//@returns {Promise<Object>} - The weather data.
*/

export const fetchWeatherByCoords = async (lat, lon) => {
    //Build the URL for the One Call API 3.0 using the provided coordinates
    const url = `${ONE_CALL_URL}?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=imperial`;

    //Fetch the URL and check for errors.
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Failed to fetch weather data");
    }

    return await response.json();


};