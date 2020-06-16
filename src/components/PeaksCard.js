import React from "react";
import Container from "./Container";

function PeaksCard({ name, range, rank, elevation, lat, long, town, image }) {
  return (
    <div>
      <div className="cards">
        <h2>{name}</h2>
        <h3>{range}</h3>
        <img src={image} alt={name} className="mountain-photos" />
        <ul>
          <li>Elevation: {elevation}</li>
          <li>
            Latitude and Longitude: ~{lat}, ~{long}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default PeaksCard;
