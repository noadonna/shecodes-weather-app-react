import React from "react";
import axios from "axios";

export default function Weather() {
    function displayWeather(response) {
    alert(`The weather in city is ${response.data.main.temp}°C`);
    }
    let apiKey = "c21c69cfcac20320f0c03c2e080dbc19";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Tilburg&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayWeather);
    return <h2>Weather App</h2>
}