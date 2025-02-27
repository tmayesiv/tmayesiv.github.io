import React from "react";

function TimeDisplay({ unixTimestamp }) {
    const date = new Date(unixTimestamp * 1000);

    const hours = date.getHours();
    const minutes = date.getMinutes();

    if (hours < 13) {
    return (
      <div>
        {hours}a
      </div>
    );
  } else {
    return (
      <div>
        {hours - 12}p
      </div>
    );}
  }
  
  export default TimeDisplay;
  