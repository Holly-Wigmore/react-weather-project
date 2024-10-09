import React from "react";
import { WeatherSvg } from "weather-icons-animated";

export default function WeatherIcon(props) {
  const codeMapping = {
    "clear-sky-day": "sunny",
    "clear-sky-night": "clear-night",
    "few-clouds-day": "partlycloudy",
    "few-clouds-night": "partlycloudy-night",
    "scattered-clouds-day": "partlycloudy",
    "scattered-clouds-night": "partlycloudy-night",
    "broken-clouds-day": "cloudy",
    "broken-clouds-night": "cloudy",
    "shower-rain-day": "rainy",
    "shower-rain-night": "rainy",
    "rain-day": "pouring",
    "rain-night": "pouring",
    "thunderstorm-day": "lightning-rainy",
    "thunderstorm-night": "lightning-rainy",
    "snow-day": "snowy",
    "snow-night": "snowy",
    "mist-day": "cloudy",
    "mist-night": "cloudy",
  };
  return <WeatherSvg state={codeMapping[props.code]} width={64} height={64} />;
}
