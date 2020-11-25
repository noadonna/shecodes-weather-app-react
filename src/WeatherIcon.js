import React from "react";

export default function WeatherIcon(props) {
    const imgCode = {
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

return (
    <img
      src={imgCode[props.code]}
      alt="description"
      width="150"
    />
);
}