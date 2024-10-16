import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import DailyWeather from "./DailyWeather.js";
import Forecast from "./Forecast";

export default function Weather(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [forecast, setForecast] = useState({ ready: false });
  function getResponse(response) {
    setForecast({
      ready: true,
      temperature: response.data.temperature.current,
      description: response.data.condition.description,
      icon: response.data.condition.icon,
      city: response.data.city,
      wind: response.data.wind.speed,
      humidity: response.data.temperature.humidity,
      date: new Date(response.data.time * 1000),
    });
  }

  function search() {
    let unit = "metric";
    let apiKey = "754b84e4ec96a5481tfao024db3b3aff";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=${unit}`;
    axios.get(apiUrl).then(getResponse);
  }
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function handleCitySearch(event) {
    setCity(event.target.value);
  }
  if (forecast.ready) {
    return (
      <div className="weather shadow-lg">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-8">
              <input
                type="search"
                placeholder="Enter a City"
                className="form-control"
                autoFocus="on"
                onChange={handleCitySearch}
              />
            </div>
            <div className="col-4">
              <input type="submit" value="Search" className="btn w-100" />
            </div>
          </div>
        </form>
        <Forecast data={forecast} />
        <DailyWeather city={forecast.city} />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
