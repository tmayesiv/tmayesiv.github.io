import React from "react";
import "./BigCard.css";
import DayDisplay from "./DayDisplay";

function Weekly({ title, day, high0, low0, high1, low1, high2, low2, high3, low3, high4, low4, high5, low5, high6, low6 }) {
    return (
        <div className="weekly-card">
            <h3 className="card-title">{title}</h3>
            <div className="card-content">
                <div className="day0">
                    <div className="high">{high0}°</div>
                    <div className="low">{low0}°</div>
                    <div className="day"><DayDisplay unixTimestamp={day} /></div>
                </div>
                <div className="day1">
                    <div className="high">{high1}°</div>
                    <div className="low">{low1}°</div>
                    <div className="day"><DayDisplay unixTimestamp={day + 86400} /></div>
                </div>
                <div className="day2">
                    <div className="high">{high2}°</div>
                    <div className="low">{low2}°</div>
                    <div className="day"><DayDisplay unixTimestamp={day + 86400 * 2} /></div>
                </div>
                <div className="day3">
                    <div className="high">{high3}°</div>
                    <div className="low">{low3}°</div>
                    <div className="day"><DayDisplay unixTimestamp={day + 86400 * 3} /></div>
                </div>
                <div className="day4">
                    <div className="high">{high4}°</div>
                    <div className="low">{low4}°</div>
                    <div className="day"><DayDisplay unixTimestamp={day + 86400 * 4} /></div>
                </div>
                <div className="day5">
                    <div className="high">{high5}°</div>
                    <div className="low">{low5}°</div>
                    <div className="day"><DayDisplay unixTimestamp={day + 86400 * 5} /></div>
                </div>
                <div className="day6">
                    <div className="high">{high6}°</div>
                    <div className="low">{low6}°</div>
                    <div className="day"><DayDisplay unixTimestamp={day + 86400 * 6} /></div>
                </div>
            </div>
        </div>
    );
}

export default Weekly;