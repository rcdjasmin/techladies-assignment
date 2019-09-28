import React from "react";
import WeatherData from './weatherData';

function WeatherApp() {
    return (
    <React.Fragment>
        <h1>Weather</h1>
        <WeatherData />
    </React.Fragment>
    );
  }

  export default WeatherApp;