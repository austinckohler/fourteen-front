import React from "react";
import Container from "./Container";
import PeaksCard from "./PeaksCard";

function Peaks({ peaks }) {
  const peaksContainer = peaks.map((peak) => (
    <PeaksCard
      key={peak.id}
      name={peak.name}
      range={peak.range}
      rank={peak.rank}
      elevation={peak.elevation}
      lat={peak.lat}
      long={peak.long}
      town={peak.town}
      image={peak.image}
    />
  ));

  return (
    <>
      <h2>Peaks Container</h2>
      <div className="card-container">{peaksContainer}</div>
    </>
  );
}

export default Peaks;
