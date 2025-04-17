import React, { useEffect, useState} from "react";
import BigCard from "./components/BigCard";
import { fetchWeather3, fetchWeatherByCoords } from "./services/weatherServices3";
import "./App.css";
import Hourly from "./components/Hourly";
import Weekly from "./components/Weekly";
import CityDisplay from "./components/CityDisplay";
import Autocomplete from "react-google-autocomplete";
import Summary from "./components/Summary";
import { isDaytimeAtLocation, convertTemp, convertWind, getRaindropSvg, getUvSvg } from "./components/unitUtils";


function App() {

  //Create a state variable called 'weatherData' to store the fetched weather data.
  //Initially, it's set to null because no data has been fetched yet.
  const [weatherData, setWeatherData] = useState(null);
  const GOOGLE_KEY = process.env.REACT_APP_GOOGLE_API_KEY;

  //Track unit preference (imperial or metric)
  const [units, setUnits] = useState("imperial");

  //Define an asynchronous function 'handleSearch' that takes a city name as an input.
  //This function will trigger when the user submits a search in the SearchBar component.
  const handleSearch = async (latitude, longitude) => {
    try {
      //Call the 'fetchWeather3' function with the city name to get the weather data.
      //The 'await' keyword will pause the function until the promise is resolved with data.
      const data = await fetchWeatherByCoords(latitude, longitude);
      //Update the 'weatherData' state with the fetched data.
      setWeatherData(data);
    } catch (error) {
      //Log erros if any occur
      console.error("Error fetching weather data:", error);
    }
  };



  //useEffect hook to get the user's current location when the component mounts.
  //If the location is obtained, fetch the weather data for that location.

  const requestLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          fetchWeatherByCoords(latitude, longitude)
            .then((data) => setWeatherData(data))
            .catch((error) =>
              console.error("Error fetching weather data:", error)
            );
        },
        (error) => {
          console.error("Error getting location:", error);
        }
      );
    }
  };


  useEffect(() => {
    requestLocation();
  }, []);


  //Classify wind direction
  const getCompassDirection = (deg) => {
    const directions = [
      "N", "NNE", "NE", "ENE", "E", "ESE", "SE", "SSE",
      "S", "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW"
    ];
    return directions[Math.round(deg / 22.5) % 16];
  };

  let isDaytimeNow = true;
  if (weatherData) {
    isDaytimeNow = isDaytimeAtLocation(
      weatherData.current.dt,
      weatherData.current.sunrise,
      weatherData.current.sunset,
      weatherData.timezone_offset
    );
  };

  const expectRain = () => {
    const yes = "Take an umbrella to stay dry.";
    const maybe = "Pack a rain jacket just in case.";
    const no = "No chance of precipitation.";
  
    if (weatherData.daily[0].pop <= 0.1) {
      return no;
    } else if (weatherData.daily[0].pop <= 0.4) {
      return maybe;
    } else {
      return yes;
    }
  };  

  return (
    <div className="app-container">
      <div className = "heading">
        {/*Wordmark*/}
        <img className = "wordmark"
        src = "/images/custom/Rain or Shine.svg"
        alt = "Rain or Shine wordmark"
        />
      {/* Search and Autocomplete Function */}
      <div className="search-outer">
        <Autocomplete
          apiKey={GOOGLE_KEY}
          className="search"
          onPlaceSelected={(place) => {
            if (place && place.geometry && place.geometry.location) {
              const lat = place.geometry.location.lat();
              const lng = place.geometry.location.lng();
              handleSearch(lat, lng);
            } else {
              console.warn("Invalid place selection — missing geometry:", place);
            }
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault(); //Prevent Enter key from doing anything
            }
          }}
          placeholder="Search for a location"

        />

      </div>
      </div>


      {/*Conditionally render the weather information only if weatherData exists.*/}
      {weatherData && (
        <div className="grid-container">
          <div className="row">
            <div className="heading">
              <div className="city-name">
                <CityDisplay
                  lat={parseFloat(weatherData.lat)}
                  lon={parseFloat(weatherData.lon)}
                />
              </div>
              <div className="unit-toggle">
                <label className="toggle-switch">
                  <input
                    type="checkbox"
                    checked={units === "metric"}
                    onChange={() =>
                      setUnits(units === "imperial" ? "metric" : "imperial")
                    }
                  />
                  <div className="slider">
                    <span className="label">°F</span>
                    <span className="label">°C</span>
                  </div>
                </label>
              </div>
            </div>
          </div>
          <div className="row">
            <Summary
              summary={weatherData.daily[0].summary}
              rainMessage={expectRain()}
            />
          </div>
          <div className="row">
            <div className="col">
              <BigCard
                title="Temperature"
                value={convertTemp(weatherData.current.temp, units)}
                unit={units === "metric" ? "°C" : "°F"}
                iconCode={weatherData.current.weather[0].id.toString()}
                isDaytime={
                  weatherData.current.dt > weatherData.current.sunrise &&
                  weatherData.current.dt < weatherData.current.sunset
                }
              />

              <BigCard
                title="Wind"
                value={convertWind(weatherData.current.wind_speed, units)}
                speed={units === "metric" ? "m/s" : "mph"}
                direction={`${getCompassDirection(weatherData.current.wind_deg)}`}
                iconClass={`wi-wind from-${Math.round(weatherData.current.wind_deg / 5) * 5}-deg`}
              />
            </div>
            <div className="col">
              <BigCard
                title="Precipitation"
                value={Math.round(weatherData.hourly[0].pop * 100)}
                unit="%"
                svgFileName={getRaindropSvg(weatherData.hourly[0].pop * 100)}
              />
              <BigCard
                title="UV Index"
                value={weatherData.current.uvi}
                unit=""
                svgFileName={getUvSvg(weatherData.current.uvi)}
              />
            </div>
          </div>
          <div className="row">
            <Hourly
              title="Hourly"
              time={weatherData.current.dt}
              temp0={convertTemp(weatherData.hourly[0].temp, units)}
              temp1={convertTemp(weatherData.hourly[1].temp, units)}
              temp2={convertTemp(weatherData.hourly[2].temp, units)}
              temp3={convertTemp(weatherData.hourly[3].temp, units)}
              temp4={convertTemp(weatherData.hourly[4].temp, units)}
              temp5={convertTemp(weatherData.hourly[5].temp, units)}
              temp6={convertTemp(weatherData.hourly[6].temp, units)}
              code0={weatherData.hourly[0].weather[0].id.toString()}
              code1={weatherData.hourly[1].weather[0].id.toString()}
              code2={weatherData.hourly[2].weather[0].id.toString()}
              code3={weatherData.hourly[3].weather[0].id.toString()}
              code4={weatherData.hourly[4].weather[0].id.toString()}
              code5={weatherData.hourly[5].weather[0].id.toString()}
              code6={weatherData.hourly[6].weather[0].id.toString()}
              isDaytime={
                weatherData.current.dt > weatherData.current.sunrise &&
                weatherData.current.dt < weatherData.current.sunset
              }
              timezoneOffset={weatherData.timezone_offset}
              daily={[weatherData.daily[0], weatherData.daily[1]]}
            />
          </div>
          <div className="row">
            <Weekly
              title="Weekly"
              day={weatherData.daily[0].dt}
              high0={convertTemp(weatherData.daily[0].temp.max, units)}
              low0={convertTemp(weatherData.daily[0].temp.min, units)}
              high1={convertTemp(weatherData.daily[1].temp.max, units)}
              low1={convertTemp(weatherData.daily[1].temp.min, units)}
              high2={convertTemp(weatherData.daily[2].temp.max, units)}
              low2={convertTemp(weatherData.daily[2].temp.min, units)}
              high3={convertTemp(weatherData.daily[3].temp.max, units)}
              low3={convertTemp(weatherData.daily[3].temp.min, units)}
              high4={convertTemp(weatherData.daily[4].temp.max, units)}
              low4={convertTemp(weatherData.daily[4].temp.min, units)}
              high5={convertTemp(weatherData.daily[5].temp.max, units)}
              low5={convertTemp(weatherData.daily[5].temp.min, units)}
              high6={convertTemp(weatherData.daily[6].temp.max, units)}
              low6={convertTemp(weatherData.daily[6].temp.min, units)}
            />
          </div>
        </div>
      )
      }
    </div >
  );
}

export default App;
