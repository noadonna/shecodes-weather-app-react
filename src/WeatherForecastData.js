import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastData(props) {
function hours() {
    let date = new Date(props.data.dt * 1000);
    let hours = date.getHours();
     if (hours < 10) {
        hours = `0${hours}`;
    }
    return `${hours}:00`;
}

function temperature() {
    let temperature = Math.round(props.data.main.temp);
    return `${temperature}°C`;
}

if (props.unit === "celsius") {
    return (
      <div className="WeatherForecastData col">
        {hours()}
        <WeatherIcon code={props.data.weather[0].icon} />
        <span class="temperature"> {temperature()}</span>
      </div>
    );
  } else {
    let temperature = Math.round(((props.data.main.temp * 9) / 5) + 32);
    return (
      <div className="WeatherForecastData col">
        {hours()}
        <WeatherIcon code={props.data.weather[0].icon} />
        <span class="temperature"> {temperature}°F</span>
      </div>
    );
  }
}