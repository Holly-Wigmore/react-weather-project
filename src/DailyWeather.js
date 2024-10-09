import React, { useState } from "react";
import Axios from "axios";
import "./DailyWeather.css";
import DailyWeatherDay from "./DailyWeatherDay";

export default function DailyWeather(props) {
  const [ready, setReady] = useState(false);
  const [forecast, setForecast] = useState(null);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setReady(true);
  }

  if (ready) {
    return (
      <div className="DailyWeather">
        <div className="row">
          <div className="col">
            <DailyWeatherDay data={forecast[0]} />
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = "754b84e4ec96a5481tfao024db3b3aff";
    let longitude = props.coordinates.longitude;
    let latitude = props.coordinates.latitude;
    let unit = "metric";
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lat=${latitude}&lon=${longitude}&key=${apiKey}&units=${unit}`;

    Axios.get(apiUrl).then(handleResponse);

    return null;
  }
}
