import React from "react";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
    backgroundColor: "rgba(242, 35, 53, 0.6)",
    cursor: "pointer",
  },
}));

function Supplies({ id, supply, category, item, markComplete, delSupply }) {
  const classes = useStyles();
  return (
    <div className="item-divider">
      <Checkbox
        defaultUnChecked
        color="default"
        inputProps={{ "aria-label": "checkbox with default color" }}
        onChange={(event) => markComplete(event, supply.id)}
      />
      <p className="supply-items" style={{ display: "inline" }}>
        {" "}
        {item} | {category}{" "}
      </p>
      <Button
        type="submit"
        halfWidth
        variant="contained"
        color="secondary"
        className={classes.button}
        startIcon={<DeleteIcon />}
        onClick={(event) => delSupply(event, supply.id)}
      >
        Delete Item
      </Button>
      <p
        className="supply-items"
        style={{
          textDecoration: supply.completed ? "line-through" : "none",
          textIndent: "1.75%",
        }}
      >
        {item} | {category}
      </p>
    </div>
  );
}
export default Supplies;
