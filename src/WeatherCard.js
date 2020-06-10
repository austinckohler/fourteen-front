import React from "react";

function WeatherCard({ weather, addToFav }) {
  function onClick() {
    addToFav(weather);
  }
  return (
    <div>
      <p onClick={onClick}>{weather}</p>
    </div>
  );
}

export default WeatherCard;
