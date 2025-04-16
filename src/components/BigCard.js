import React from "react";
import "./BigCard.css";
import { getWeatherIconClass } from "../iconMap";

function BigCard({ title, value, unit, speed, direction, iconClass, iconCode, isDaytime, svgFileName }) {
    // Determine the icon class: either use provided class or generate it from iconCode + isDaytime
    const resolvedIconClass = iconClass || (iconCode && getWeatherIconClass(iconCode, isDaytime));

    return (
        <div className="big-card">
            <h3 className="card-title">{title}</h3>
            <div className="card-content">
                <div className="left"> 
                {svgFileName ? (
                    <img
                        src={`${process.env.PUBLIC_URL}/images/custom/${svgFileName}`}
                        alt={title}
                        className="custom-svg-icon"
                    />
                ) : resolvedIconClass ? (
                    <i className={`wi ${resolvedIconClass} weather-icon`}></i>
                ) : null}
                </div>
                <div className="right">
                <p className="big-value">
                    {value}<span className="units">{unit}</span><span className="speed">{speed}</span>
                </p>
                </div>
            </div>
        </div>
    );
}

export default BigCard;