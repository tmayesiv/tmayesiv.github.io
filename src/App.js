import React from "react";
import TemperatureCard from "./components/TemperatureCard";
import BigCard from "./components/BigCard";
import "./App.css";

function App(){
    return (
        <div className="app-container">
            <div className="grid-container">
                <div class="col">
                    <TemperatureCard title ="Temperature" temperature={25} unit="C"/>
                    <BigCard title ="Wind" value={12} unit="SW"/>
                </div>
                <div class="col">
                    <BigCard title ="Precipitation" value={10} unit="%"/>
                    <BigCard title ="Daylight" value={50} unit="%"/>
                </div>
                
            </div>
        </div>
    );
}

export default App;