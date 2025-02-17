import React from "react";
import "./TemperatureCard.css";

function TemperatureCard({ title, temperature, unit}) {
    return (
        <div className="temperature-card">
            <h3 className="card-title">{title}</h3>
            <div className="card-content">
                <img src="/images/sun_temp_icon.svg" alt="sun icon" className="weather-icon" />
                <p className="temp-value">
                    {temperature}°{unit}
                </p>
            </div>
        </div>
    );
}

export default TemperatureCard;