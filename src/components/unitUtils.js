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