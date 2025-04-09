import React from 'react';

export function isDaytimeAtLocation(dt, sunrise, sunset, offset) {
    const localTime = dt + offset;
    const sunriseLocal = sunrise + offset;
    const sunsetLocal = sunset + offset;

    return localTime >= sunriseLocal && localTime <= sunsetLocal;
}


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

export function getUvSvg(value) {
    const ranges = [
        { min: 0, max: .5, file: "wi-uv-0.svg" },
        { min: .5, max: 1.5, file: "wi-uv-1.svg" },
        { min: 1.5, max: 2.5, file: "wi-uv-2.svg" },
        { min: 2.5, max: 3.5, file: "wi-uv-3.svg" },
        { min: 3.5, max: 4.5, file: "wi-uv-4.svg" },
        { min: 4.5, max: 5.5, file: "wi-uv-5.svg" },
        { min: 5.5, max: 6.5, file: "wi-uv-6.svg" },
        { min: 6.5, max: 7.5, file: "wi-uv-7.svg" },
        { min: 7.5, max: 8.5, file: "wi-uv-8.svg" },
        { min: 8.5, max: 9.5, file: "wi-uv-9.svg" },
        { min: 9.5, max: 101, file: "wi-uv-10.svg" },
    ];

    const match = ranges.find(r => value >= r.min && value < r.max);
    return match ? match.file : "wi-uv-0.svg";
};