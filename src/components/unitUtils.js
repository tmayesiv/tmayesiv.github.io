import React from 'react';

export const convertTemp = (tempF, toUnits) => {
    return toUnits === "metric"
    ? Math.round(((tempF - 32) * 5) / 9)
    : Math.round(tempF);
};

export const convertWind = (windMph, toUnits) => {
    return toUnits === "metric"
    ? (windMph * 0.44704).toFixed(1)
    : Math.round(windMph);
};

export function getRaindropSvg(value) {
    const ranges = [
        { min: 0, max: 4, file: "wi-raindrop-0.svg" },
        { min: 4, max: 15, file: "wi-raindrop-10.svg" },
        { min: 15, max: 25, file: "wi-raindrop-20.svg" },
        { min: 25, max: 35, file: "wi-raindrop-30.svg" },
        { min: 35, max: 45, file: "wi-raindrop-40.svg" },
        { min: 45, max: 55, file: "wi-raindrop-50.svg" },
        { min: 55, max: 65, file: "wi-raindrop-60.svg" },
        { min: 65, max: 75, file: "wi-raindrop-70.svg" },
        { min: 75, max: 85, file: "wi-raindrop-80.svg" },
        { min: 85, max: 95, file: "wi-raindrop-90.svg" },
        { min: 95, max: 101, file: "wi-raindrop-100.svg" },
    ];

    const match = ranges.find(r => value >= r.min && value < r.max);
    return match ? match.file : "wi-raindrop-0.svg";
};