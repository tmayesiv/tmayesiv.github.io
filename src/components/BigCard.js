import React from "react";
import "./BigCard.css";
import { getWeatherIconClass } from "../iconMap";

function BigCard({ title, value, unit, direction, iconClass, iconCode, isDaytime }) {
    // Determine the icon class: either use provided class or generate it from iconCode + isDaytime
    const resolvedIconClass = iconClass || (iconCode && getWeatherIconClass(iconCode, isDaytime));

    return (
        <div className="big-card">
            <h3 className="card-title">{title}</h3>
            <div className="card-content">
                {resolvedIconClass && <i className={`wi ${resolvedIconClass} weather-icon`}></i>}
                <p className="big-value">
                    {value}{unit} {direction}
                </p>
            </div>
        </div>
    );
}

export default BigCard;