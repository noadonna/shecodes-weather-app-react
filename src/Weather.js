import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";

import "./Weather.css";

export default function Weather(props) {
  const [city, setCity] = useState(props.defaultCity);
  //const [loaded, setLoaded] = useState(false);
  const [weather, setWeather] = useState({ ready: false });

  function displayWeather(response) {
    setWeather({
      ready: true,
      date: new Date(response.data.dt * 1000),
      imgUrl: `${imgCode[response.data.weather[0].icon]}`,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      description: response.data.weather[0].main,
      city: response.data.name
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

   let imgCode = {
    "01d": "https://ssl.gstatic.com/onebox/weather/256/sunny.png",
    "01n": "https://ssl.gstatic.com/onebox/weather/256/sunny.png",
    "02d": "https://ssl.gstatic.com/onebox/weather/256/partly_cloudy.png",
    "02n": "https://ssl.gstatic.com/onebox/weather/256/partly_cloudy.png",
    "03d": "https://ssl.gstatic.com/onebox/weather/256/partly_cloudy.png",
    "03n": "https://ssl.gstatic.com/onebox/weather/256/partly_cloudy.png",
    "04d": "https://ssl.gstatic.com/onebox/weather/256/cloudy.png",
    "04n": "https://ssl.gstatic.com/onebox/weather/256/cloudy.png",
    "09d": "https://ssl.gstatic.com/onebox/weather/256/rain_heavy.png",
    "09n": "https://ssl.gstatic.com/onebox/weather/256/rain_heavy.png",
    "10d": "https://ssl.gstatic.com/onebox/weather/256/rain.png",
    "10n": "https://ssl.gstatic.com/onebox/weather/256/rain.png",
    "11d": "https://ssl.gstatic.com/onebox/weather/256/thunderstorms.png",
    "11n": "https://ssl.gstatic.com/onebox/weather/256/thunderstorms.png",
    "13d": "https://ssl.gstatic.com/onebox/weather/256/snow.png",
    "13n": "https://ssl.gstatic.com/onebox/weather/256/snow.png",
    "50d": "https://ssl.gstatic.com/onebox/weather/256/snow.png",
    "50n": "https://ssl.gstatic.com/onebox/weather/256/snow.png",
  };

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
      <button type="Submit" className="btn btn-light mb-2"><i className="fas fa-map-marker-alt" id="locationIcon"></i></button>
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
