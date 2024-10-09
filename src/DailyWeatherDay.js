import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function DailyWeatherDay(props) {
  function maxTemp() {
    let temperature = Math.round(props.data.temperature.maximium);
    return `${temperature}°`;
  }
  function minTemp() {
    let temperature = Math.round(props.data.temperature.minimum);
    return `${temperature}°`;
  }

  function day() {
    let date = new Date(props.data.time * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
  }
  return (
    <div>
      <div className="DailyWeather-Day">{day()}</div>
      <WeatherIcon code={props.data.condition.icon} />
      <div className="DailyWeather-Temp">
        <span className="DailyWeather-Max">{maxTemp()}</span>{" "}
        <span className="DailyWeather-Min">{minTemp()}</span>
      </div>
    </div>
  );
}
