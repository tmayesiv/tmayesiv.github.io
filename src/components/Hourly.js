import React from "react";
import "./Weekly.css";
import TimeDisplay from "./TimeDisplay";
import { getWeatherIconClass } from "../iconMap";

function Hourly({ title, time, temp0, temp1, temp2, temp3, temp4, temp5, temp6, code0, code1, code2, code3, code4, code5, code6, isDaytime, timezoneOffset }) {
    const hourlyData = [
        { temp: temp0, code: code0, offset: 0 },
        { temp: temp1, code: code1, offset: 1 },
        { temp: temp2, code: code2, offset: 2 },
        { temp: temp3, code: code3, offset: 3 },
        { temp: temp4, code: code4, offset: 4 },
        { temp: temp5, code: code5, offset: 5 },
        { temp: temp6, code: code6, offset: 6 }
    ];

    return (
        <div className="hourly-card">
            <h3 className="card-title">{title}</h3>
            <div className="card-content">
                {hourlyData.map((hour, index) => {
                    const iconClass = getWeatherIconClass(hour.code, isDaytime);
                    return (
                        <div className={`hour${index}`} key={index}>
                            <i className={`wi ${iconClass} weather-icon`}></i>
                            <div className="temp">{hour.temp}°</div>
                            <div className="time">
                                <TimeDisplay unixTimestamp={parseInt(time) + hour.offset * 3600} timezoneOffset={timezoneOffset} />
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default Hourly;