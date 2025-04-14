import React from "react";

function DayDisplay({ unixTimestamp }) {
    const date = new Date(unixTimestamp * 1000);

    const day = date.getDay();

    if (day === 0) {
        return (
            "Sun"
        );
    }
    else if (day === 1) {
        return (
            "Mon"
        );
    }
    else if (day === 2) {
        return (
            "Tue"
        );
    }
    else if (day === 3) {
        return (
            "Wed"
        );
    }
    else if (day === 4) {
        return (
            "Thu"
        );
    }
    else if (day === 5) {
        return (
            "Fri"
        );
    }
    else if (day === 6) {
        return (
            "Sat"
        );
    }
}

export default DayDisplay;
