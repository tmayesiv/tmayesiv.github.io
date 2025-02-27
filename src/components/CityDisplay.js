import React, { useEffect, useState } from "react";
import "./TemperatureCard.css";
import { fetchCityByCoords } from "../services/weatherServices3";

function CityDisplay({ lat, lon }) {

        const [cityData, setCityData] = useState(null);
        const [error, setError] = useState(null);
      
        useEffect(() => {
          // Define an async function to call our fetchCityByCoords
          const getCityData = async () => {
            try {
              const data = await fetchCityByCoords(lat, lon);
              setCityData(data);
            } catch (err) {
              setError(err.message);
            }
          };
      
          // Call it immediately in the effect
          getCityData();
        }, [lat, lon]);
      
        if (error) {
          return <div>Error: {error}</div>;
        }
      
        if (!cityData) {
          return <div>Loading...</div>;
        }
      
        const city = cityData[0].name;
        const state = cityData[0].state;
        // The shape of cityData depends on your API. For example,
        // OpenWeather reverse geocoding returns an array.
        return (
          <h3>
            {city}, {state}
          </h3>
        );

}

export default CityDisplay;