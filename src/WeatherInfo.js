import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherForecast from "./WeatherForecast";
import WeatherTemperature from "./WeatherTemperature";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props) {
    return (
        <div className="WeatherInfo">
          <h1>{props.data.city}</h1>
          <h2><FormattedDate date={props.data.date} /></h2>
          <WeatherIcon code={props.data.icon} alt={props.data.description}/>
          <br />
          <span className="weatherLocal text-capitalize">{props.data.description}</span>
          <br />
          <WeatherTemperature
          celsius={props.data.temperature}
          unit={props.unit}
          setUnit={props.setUnit} />
          <div className="weatherIndicators">
            Humidity: {props.data.humidity}% | Wind: {props.data.wind}km/h
          </div>
        </div>
    )
}