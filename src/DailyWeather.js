import React, { useState, useEffect } from "react";
import Axios from "axios";
import "./DailyWeather.css";
import DailyWeatherDay from "./DailyWeatherDay";

export default function DailyWeather(props) {
  let [ready, setReady] = useState(false);
  let [forecast, setForecast] = useState(null);

  useEffect(() => {
    setReady(false);
    let apiKey = "754b84e4ec96a5481tfao024db3b3aff";
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${props.city}&key=${apiKey}&units=metric`;

    Axios.get(apiUrl).then(handleResponse);
  }, [props.city]);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setReady(true);
  }

  if (ready) {
    return (
      <div className="DailyWeather">
        <div className="row">
          {forecast.map(function (dailyForecast, index) {
            if (index < 5) {
              return (
                <div className="col" key={index}>
                  <DailyWeatherDay data={dailyForecast} />
                </div>
              );
            }
            return null;
          })}
        </div>
      </div>
    );
  } else {
    return <div>Loading forecast...</div>;
  }
}
