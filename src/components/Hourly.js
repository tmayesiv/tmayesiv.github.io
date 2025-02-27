import React from "react";
import "./TemperatureCard.css";
import TimeDisplay from "./TimeDisplay";

function Hourly({ title , time , temp0, temp1, temp2, temp3, temp4, temp5, temp6}) {
    return (
        <div className="hourly-card">
            <h3 className="card-title">{title}</h3>
            <div className="card-content">
                <div className="hour0"> {/* current hour */}
                    <div className="temp">{temp0}
                    </div>
                    <div className="time"><TimeDisplay unixTimestamp={time} />
                    </div>
                </div>
                <div className="hour1"> {/* current hour + 1 */}
                <div className="temp">{temp1}
                    </div>
                    <div className="time"><TimeDisplay unixTimestamp={parseInt(time)+3600} />
                    </div>
                </div>
                <div className="hour2"> {/* current hour + 2 */}
                <div className="temp">{temp2}
                    </div>
                    <div className="time"><TimeDisplay unixTimestamp={parseInt(time)+3600*2} />
                    </div>
                </div>
                <div className="hour3"> {/* current hour + 3 */}
                <div className="temp">{temp3}
                    </div>
                    <div className="time"><TimeDisplay unixTimestamp={parseInt(time)+3600*3} />
                    </div>
                </div>
                <div className="hour4"> {/* current hour + 4 */}
                <div className="temp">{temp4}
                    </div>
                    <div className="time"><TimeDisplay unixTimestamp={parseInt(time)+3600*4} />
                    </div>
                </div>
                <div className="hour5"> {/* current hour + 5 */}
                <div className="temp">{temp5}
                    </div>
                    <div className="time"><TimeDisplay unixTimestamp={parseInt(time)+3600*5} />
                    </div>
                </div>
                <div className="hour6"> {/* current hour + 6 */}
                <div className="temp">{temp6}
                    </div>
                    <div className="time"><TimeDisplay unixTimestamp={parseInt(time)+3600*6} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hourly;