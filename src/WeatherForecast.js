import React, { useState } from "react";
import axios from "axios";
import WeatherForecastData from "./WeatherForecastData";

import "./WeatherForecast.css"

export default function WeatherForecast(props) {
   const [loaded, setLoaded] = useState(false);
   const [forecast, setForecast] = useState(null);

    function displayForecast(response) {
        setForecast(response.data);
            //imgUrl: `${imgCodeForecast[forecast.list[0].weather[0].icon]}`,
            //icon: `http://openweathermap.org/img/wn/${forecast.list[0].weather[0].icon}@2x.png`,
        setLoaded(true); 
    }

    /*
    let imgCodeForecast = {
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
*/

    if (loaded && props.city === forecast.city.name) {
        return (
        <div className="WeatherForecast row">
            <WeatherForecastData data={forecast.list[0]}/>
            <WeatherForecastData data={forecast.list[1]}/>
            <WeatherForecastData data={forecast.list[2]}/>
            <WeatherForecastData data={forecast.list[3]}/>
            <WeatherForecastData data={forecast.list[4]}/>
        </div>
        );
    } else {
    let apiKey = "c21c69cfcac20320f0c03c2e080dbc19";
    let apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayForecast);
    
    return null;
    }
}