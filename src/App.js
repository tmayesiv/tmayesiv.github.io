import React from "react";
import TemperatureCard from "./components/TemperatureCard";
import "./App.css";

function App(){
    return (
        <div className="app-container">
            <div className="grid-container">

                <TemperatureCard title ="Temperature" temperature={25} unit="C"/>
                
            </div>
        </div>
    );
}

export default App;