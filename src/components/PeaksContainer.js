import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
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
      <CssBaseline />
      <Container maxWidth="1024">
        <Typography
          className="card-container"
          component="div"
          style={{
            backgroundColor: "#cfe8fc",
            height: "100%",
            marginTop: "2%",
            borderRadius: ".25%",
          }}
        >
          {peaksContainer}
        </Typography>
      </Container>

      {/* <h2>Peaks Container</h2> */}
    </>
  );
}

export default Peaks;
