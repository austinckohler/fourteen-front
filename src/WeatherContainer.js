import React from "react";
import WeatherCard from "./WeatherCard";

function WeatherContainer({ weather, addToFav }) {
  const weatherA = Object.values(weather);

  const coords = weatherA.map((w) => (
    <WeatherCard key={w.id} weather={w} addToFav={addToFav} />
  ));
  return (
    <div>
      <h2>{coords}</h2>
    </div>
  );
}

export default WeatherContainer;
