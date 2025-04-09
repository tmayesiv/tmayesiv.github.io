import React from "react";

function TimeDisplay({ unixTimestamp, timezoneOffset }) {
  // Apply the offset in seconds manually, then use getUTC* methods
  const date = new Date((unixTimestamp + timezoneOffset) * 1000);
  let hours = date.getUTCHours(); // ⬅️ use UTC so it doesn't shift again
  const period = hours >= 12 ? "p" : "a";

  hours = hours % 12;
  hours = hours === 0 ? 12 : hours;

  return <div>{hours}{period}</div>;
}

export default TimeDisplay;
