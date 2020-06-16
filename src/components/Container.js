import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import PeaksCard from "./PeaksCard";

export default function SimpleContainer() {
  return (
    <>
      <CssBaseline />
      <Container maxWidth="sm">
        <Typography
          component={<PeaksCard />}
          style={{ backgroundColor: "#cfe8fc", height: "100vh" }}
        />
      </Container>
    </>
  );
}
