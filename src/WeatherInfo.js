import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
    return (
        <div className="WeatherInfo">
          <h1>{props.data.city}</h1>
          <h2><FormattedDate date={props.data.date} /></h2>
          <img
            className="main-icon"
            src={props.data.imgUrl}
            alt={props.data.description}
            width="120"
          />
          <br />
          <span className="weatherLocal text-capitalize">{props.data.description}</span>
          <br />
          <WeatherTemperature celsius={props.data.temperature} />
          <div className="weatherIndicators">
            Humidity: {props.data.humidity}% | Wind: {props.data.wind}km/h
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
    )
}