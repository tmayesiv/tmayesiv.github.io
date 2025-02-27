import React from "react";
import "./TemperatureCard.css";

function Weekly({ title }) {
    return (
        <div className="weekly-card">
            <h3 className="card-title">{title}</h3>
            <div className="card-content">
            <div className="day0">
                </div>
                <div className="day1">
                </div>
                <div className="day2">
                </div>
                <div className="day3">
                </div>
                <div className="day4">
                </div>
                <div className="day5">
                </div>
                <div className="day6">
                </div>
            </div>
        </div>
    );
}

export default Weekly;