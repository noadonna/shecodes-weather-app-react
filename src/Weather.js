import React, { useState } from "react";
import axios from "axios";

import "./Weather.css";

export default function Weather() {
    let [city, setCity] = useState("Enter City");
  const [loaded, setLoaded] = useState(false);
  const [weather, setWeather] = useState({});

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "c21c69cfcac20320f0c03c2e080dbc19";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayWeather);
  }

  function displayWeather(response) {
    setLoaded(true);
    setWeather({
      date: "Monday, October 26, 10:12",
      imgUrl: `${imgCode[response.data.weather[0].icon]}`,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      description: response.data.weather[0].main
    });
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
    <form onSubmit={handleSubmit}>
      <input
        className="searchField"
        type="search"
        onChange={updateCity}
        placeholder="Enter a city..."
      />
      <button type="Submit"><i className="fas fa-search" id="searchIcon"></i></button>
      <button type="Submit"><i className="fas fa-map-marker-alt" id="locationIcon"></i></button>
    </form>
  );

  function updateCity(event) {
    setCity(event.target.value);
  }

  if(loaded) {
  return (
    <div className="Weather">
      <div className="border">
        <div className="location">
         {form}
        </div>
        <div className="weatherInfo">
          <h1>{city}</h1>
          <h2>{weather.date}</h2>
          <img
            className="main-icon"
            src={weather.imgUrl}
            alt={weather.description}
            width="120"
          />
          <br />
          <span className="weatherLocal">{weather.description}</span>
          <br />
          <span className="tempLocal">{Math.round(weather.temperature)}</span>
          <span className="units">
            <a href="/" className="active">
              °C
            </a>
            |<a href="/">°F</a>
          </span>
          <div className="weatherIndicators">
            Humidity: {weather.humidity}% | Wind: {weather.wind}km/h
          </div>
           <div class="predictions">
                <div class="row">
                    <div class="col">
                        <span class="day">Mon</span>
                        <br />
                        <span class="date"> 14/9 </span>
                        <br />
                        <img src="https://ssl.gstatic.com/onebox/weather/256/sunny.png" alt="sunny" width="40" />
                        <br />
                        <span class="dayTemp">21°C</span>
                    </div>
                    <div class="col">
                        <span class="day">Tue</span>
                        <br />
                        <span class="date">15/9 </span>
                        <br />
                        <img src="https://ssl.gstatic.com/onebox/weather/256/cloudy.png" alt="cloudy" width="40" />
                        <br />
                        <span class="dayTemp">19°C</span>
                    </div>
                    <div class="col">
                        <span class="day">Wed</span>
                        <br />
                        <span class="date">16/9 </span>
                        <br />
                        <img src="https://ssl.gstatic.com/onebox/weather/256/partly_cloudy.png" alt="partly_cloudy"
                            width="40" />
                        <br />
                        <span class="dayTemp">20°C</span>
                    </div>
                    <div class="col">
                        <span class="day">Thu</span>
                        <br />
                        <span class="date">17/9 </span>
                        <br />
                        <img src="https://ssl.gstatic.com/onebox/weather/256/partly_cloudy.png" alt="partly_cloudy"
                            width="40" />
                        <br />
                        <span class="dayTemp">23°C</span>
                    </div>
                    <div class="col">
                        <span class="day">Fri</span>
                        <br />
                        <span class="date">18/9 </span>
                        <br />
                        <img src="https://ssl.gstatic.com/onebox/weather/256/sunny.png" alt="sunny" width="40" />
                        <br />
                        <span class="dayTemp">24°C</span>
                    </div>
                </div>
            </div>
        </div>
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
    return (
         <div className="Weather">
      <div className="border">
        <div className="location">
         {form}
        </div>
        <div className="weatherInfo">
          <h1>Amsterdam</h1>
          <h2>Monday, October 26, 10:12</h2>
          <img
            className="main-icon"
            src="https://ssl.gstatic.com/onebox/weather/256/sunny.png"
            alt="Sunny"
            width="120"
          />
          <br />
          <span className="weatherLocal">Sunny</span>
          <br />
          <span className="tempLocal">{24}</span>
          <span className="units">
            <a href="/" className="active">
              °C
            </a>
            |<a href="/">°F</a>
          </span>
          <div className="weatherIndicators">
            Humidity: 35% | Wind: 4km/h
          </div>
           <div class="predictions">
                <div class="row">
                    <div class="col">
                        <span class="day">Mon</span>
                        <br />
                        <span class="date"> 14/9 </span>
                        <br />
                        <img src="https://ssl.gstatic.com/onebox/weather/256/sunny.png" alt="sunny" width="40" />
                        <br />
                        <span class="dayTemp">21°C</span>
                    </div>
                    <div class="col">
                        <span class="day">Tue</span>
                        <br />
                        <span class="date">15/9 </span>
                        <br />
                        <img src="https://ssl.gstatic.com/onebox/weather/256/cloudy.png" alt="cloudy" width="40" />
                        <br />
                        <span class="dayTemp">19°C</span>
                    </div>
                    <div class="col">
                        <span class="day">Wed</span>
                        <br />
                        <span class="date">16/9 </span>
                        <br />
                        <img src="https://ssl.gstatic.com/onebox/weather/256/partly_cloudy.png" alt="partly_cloudy"
                            width="40" />
                        <br />
                        <span class="dayTemp">20°C</span>
                    </div>
                    <div class="col">
                        <span class="day">Thu</span>
                        <br />
                        <span class="date">17/9 </span>
                        <br />
                        <img src="https://ssl.gstatic.com/onebox/weather/256/partly_cloudy.png" alt="partly_cloudy"
                            width="40" />
                        <br />
                        <span class="dayTemp">23°C</span>
                    </div>
                    <div class="col">
                        <span class="day">Fri</span>
                        <br />
                        <span class="date">18/9 </span>
                        <br />
                        <img src="https://ssl.gstatic.com/onebox/weather/256/sunny.png" alt="sunny" width="40" />
                        <br />
                        <span class="dayTemp">24°C</span>
                    </div>
                </div>
            </div>
        </div>
      </div>
      <div className="footer">
        <a href="https://github.com/noadonna/shecodes-weather-app-react">
          Open-source code
        </a>{" "}
        by Carine
      </div>
    </div>
    );
  }
}
