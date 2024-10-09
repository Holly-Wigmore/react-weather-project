import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import FormattedDate from "./FormattedDate";

export default function Weather(props) {
  const [ready, setReady] = useState(false);
  const [forecast, setForecast] = useState({});
  function getResponse(response) {
    setReady(true);
    setForecast({
      temperature: response.data.temperature.current,
      description: response.data.condition.description,
      icon: response.data.condition.icon_url,
      city: response.data.city,
      wind: response.data.wind.speed,
      humidity: response.data.temperature.humidity,
      date: new Date(response.data.time * 1000),
    });

    console.log(response.data);
  }

  if (ready) {
    return (
      <div className="weather">
        <form>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a City"
                className="form-control"
                autoFocus="on"
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary w-100"
              />
            </div>
          </div>
        </form>
        <h1>{props.defaultCity}</h1>
        <ul>
          <li>
            <FormattedDate date={forecast.date} />
          </li>
          <li className="text-capitalize">{forecast.description}</li>
        </ul>
        <div className="row mt-3">
          <div className="col-6">
            <div className="clearfix">
              <img
                src={forecast.icon}
                alt={forecast.description}
                className="float-left"
              />
              <div className="float-left">
                <span className="temperature">
                  {Math.round(forecast.temperature)}
                </span>
                <span className="unit">°C</span>
              </div>
            </div>
          </div>
          <div className="col-6">
            <ul>
              <li>Humidity: {forecast.humidity}%</li>
              <li>Wind: {forecast.wind}km/h</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    let unit = "metric";
    let apiKey = "754b84e4ec96a5481tfao024db3b3aff";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apiKey}&units=${unit}`;
    axios.get(apiUrl).then(getResponse);
    return "Loading...";
  }
}
