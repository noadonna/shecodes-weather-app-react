import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";

import "./Weather.css";

export default function Weather(props) {
  const [weather, setWeather] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function displayWeather(response) {
    setWeather({
      ready: true,
      date: new Date(response.data.dt * 1000),
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].main,
      city: response.data.name,
      icon: response.data.weather[0].icon,
      imgUrl: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

   function updateCity(event) {
    setCity(event.target.value);
  }

    function search() {
    let apiKey = "c21c69cfcac20320f0c03c2e080dbc19";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayWeather);
  }

  let form = (
    <form className="form-inline justify-content-center"
    onSubmit={handleSubmit}>
      <input
        className="form-control searchField"
        type="search"
        onChange={updateCity}
        placeholder="Enter a city..."
      />
      <button type="Submit" className="btn btn-light mb-2"><i className="fas fa-search" id="searchIcon"></i></button>
    </form>
  );

  if(weather.ready) {
  return (
    <div className="Weather">
      <div className="border">
        <div className="location">
         {form}
        </div>
        <WeatherInfo data={weather}/>
        <WeatherForecast city={weather.city}/>
      </div>

      <div className="footer">
        <a href="https://github.com/noadonna/shecodes-weather-app-react">
          Open-source code
        </a>{" "}
        by Carine
      </div>
    </div>
  );
} else {
    search();
    return "Loading...";
  }
}
