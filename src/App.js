import React, { useEffect, useState } from "react";
import TemperatureCard from "./components/TemperatureCard";
import BigCard from "./components/BigCard";
import SearchBar from "./components/SearchBar";
import { fetchWeather3, fetchWeatherByCoords } from "./services/weatherServices3";
import "./App.css";
import Hourly from "./components/Hourly";
import Weekly from "./components/Weekly";
import CityDisplay from "./components/CityDisplay";
import Autocomplete from "react-google-autocomplete";

function App() {

  //Create a state variable called 'weatherData' to store the fetched weather data.
  //Initially, it's set to null because no data has been fetched yet.
  const [weatherData, setWeatherData] = useState(null);
  const GOOGLE_KEY = process.env.REACT_APP_GOOGLE_API_KEY;

  //Define an asynchronous function 'handleSearch' that takes a city name as an input.
  //This function will trigger when the user submits a search in the SearchBar component.
  const handleSearch = async (cityName) => {
    try {
      //Call the 'fetchWeather3' function with the city name to get the weather data.
      //The 'await' keyword will pause the function until the promise is resolved with data.
      const data = await fetchWeather3(cityName);
      //Update the 'weatherData' state with the fetched data.
      setWeatherData(data);
    } catch (error) {
      //Log erros if any occur
      console.error("Error fetching weather data:", error);
    }
  };



  //useEffect hook to get the user's current location when the component mounts.
  //If the location is obtained, fetch the weather data for that location.
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          //Get the latitude and longitude from the position object.
          const { latitude, longitude } = position.coords;
          //Call the fetchWeather3 function with the coordinates to get the weather data.
          fetchWeatherByCoords(latitude, longitude)
            .then((data) => {
              //Update the weatherData state with the fetched data.
              setWeatherData(data);
            })
            .catch((error) => {
              //Log any errors that occur during the fetch.
              console.error("Error fetching weather data:", error);
            });
        },

        (error) => {
          //Log any errors that occur during the geolocation process.
          console.error("Error getting location:", error);
        }
      );
    }
  }, []);

  return (
    <div className="app-container">
      {/*Render the SearchBar component and pass the handleSearch function as a prop called 'onSearch'.
          When the user submits a search (presses Enter), SearchBar calls this function.*/}
      {/*<SearchBar onSearch={handleSearch} />**/}
      <Autocomplete
        apiKey={GOOGLE_KEY}
        onPlaceSelected={(place) => {
          handleSearch(place.formatted_address)
          console.log(place.formatted_address)
        }}
        
        style={{display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "10px auto",
          padding: "10px",
          backgroundColor: "#f5f5f5",
          borderRadius: "10px",
          boxShadow: "0px 0px 15px rgba(0, 0, 0, 0.3)",
          width: "100%",
          height: "30px",
          maxWidth: "400px",
          borderWidth: "0",
        }}
        />
      {/*Conditionally render the weather information only if weatherData exists.*/}
      {weatherData && (
        <div className="grid-container">
          <div className="city-name">
            <CityDisplay
              lat={parseFloat(weatherData.lat)}
              lon={parseFloat(weatherData.lon)}

            />
          </div>
          <div className="row">
            <div className="col">
              <TemperatureCard
                title="Temperature"
                temperature={Math.round(weatherData.current.temp)}
                unit="F"
              />
              <BigCard
                title="Wind"
                value={Math.round(weatherData.current.wind_speed)}
                unit="mph"
              />
            </div>
            <div className="col">
              <BigCard
                title="Humidity"
                value={weatherData.current.humidity}
                unit="%"
              />
              <BigCard
                title="UV Index"
                value={weatherData.current.uvi}
                unit=""
              />
            </div>
          </div>
          <div className="row">
            <Hourly 
              title="Hourly"
              time={weatherData.current.dt}
              temp0={Math.round(weatherData.current.temp)}
              temp1={Math.round(weatherData.hourly[2].temp)}
              temp2={Math.round(weatherData.hourly[3].temp)}
              temp3={Math.round(weatherData.hourly[4].temp)}
              temp4={Math.round(weatherData.hourly[5].temp)}
              temp5={Math.round(weatherData.hourly[6].temp)}
              temp6={Math.round(weatherData.hourly[7].temp)}
              />
          </div>
          <div className="row">
            <Weekly 
            title="Weekly"
            day={weatherData.daily[0].dt}
            high0={Math.round(weatherData.daily[0].temp.max)}
            low0={Math.round(weatherData.daily[0].temp.min)}
            high1={Math.round(weatherData.daily[1].temp.max)}
            low1={Math.round(weatherData.daily[1].temp.min)}
            high2={Math.round(weatherData.daily[2].temp.max)}
            low2={Math.round(weatherData.daily[2].temp.min)}
            high3={Math.round(weatherData.daily[3].temp.max)}
            low3={Math.round(weatherData.daily[3].temp.min)}
            high4={Math.round(weatherData.daily[4].temp.max)}
            low4={Math.round(weatherData.daily[4].temp.min)}
            high5={Math.round(weatherData.daily[5].temp.max)}
            low5={Math.round(weatherData.daily[5].temp.min)}
            high6={Math.round(weatherData.daily[6].temp.max)}
            low6={Math.round(weatherData.daily[6].temp.min)}
            />
          </div>
        </div>
      )
      }
    </div >
  );
}

export default App;
