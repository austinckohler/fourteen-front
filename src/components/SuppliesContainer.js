import React from "react";
import Supplies from "./Supplies";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  typography: {
    margin: theme.spacing(2),
  },
}));

function SuppliesContainer({ supplies, markComplete, delSupply }) {
  const classes = useStyles();
  const showSupplies = supplies.map((supply) => (
    <Supplies
      key={supply.id}
      supply={supply}
      category={supply.category}
      item={supply.item}
      markComplete={markComplete}
      delSupply={delSupply}
    />
  ));

  return (
    <>
      <CssBaseline />
      <Container maxWidth="1024">
        <Typography
          className="supplies-container"
          component="div"
          style={{
            backgroundColor: "#cfe8fc",
            height: "100%",
            marginTop: "2%",
            borderRadius: ".25%",
          }}
        >
          <Typography
            className={classes.typography}
            component="h2"
            variant="h3"
          >
            Camping Item Checklist
          </Typography>
          <Typography
            className={classes.typography}
            component="h4"
            variant="h4"
          >
            Are you prepared for exploration?
          </Typography>
          <Typography className={classes.typography}>{showSupplies}</Typography>

          <Typography
            className={classes.typography}
            component="h4"
            variant="h4"
            align="center"
            style={{ marginBottom: "2%", paddingBottom: "2%" }}
          >
            Now Go Explore!
          </Typography>
        </Typography>
      </Container>
    </>
  );
}

export default SuppliesContainer;
