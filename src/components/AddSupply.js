import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";

export class AddSupply extends Component {
  state = {
    category: "",
    item: "",
  };

  onSubmit = (event) => {
    event.preventDefault();
    this.props.addSupply(this.state);
    this.setState(" ");
  };

  onChange = (event) =>
    this.setState({ [event.target.name]: event.target.value });

  render() {
    return (
      <Container maxWidth="1024">
        <Typography
          className="supplies-container"
          component="div"
          style={{
            height: "100%",
            marginTop: "2%",
            borderRadius: ".25%",
          }}
        >
          <form
            onSubmit={this.onSubmit}
            style={{ display: "flex", padding: "10px" }}
          >
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              id="category"
              label="Category"
              name="Category"
              autoFocus
              value={this.state.category}
              onChange={this.onChange}
            />
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              name="item"
              label="Item"
              id="password"
              value={this.state.item}
              onChange={this.onChange}
            />

            <Button
              type="submit"
              size="small"
              variant="contained"
              color="primary"
            >
              Add Item
            </Button>

            {/* <input
          type="text"
          name="category"
          placeholder="Add a category for the new item"
          value={this.state.category}
          onChange={this.onChange}
          style={{
            flex: "10",
            padding: "2px",
            borderRadius: "50px",
            textIndent: "10px",
          }}
        />
        <input
          type="text"
          name="category"
          placeholder="Add an item..."
          value={this.state.item}
          onChange={this.onChange}
          style={{
            flex: "10",
            padding: "2px",
            borderRadius: "50px",
            textIndent: "10px",
          }}
        />
        <input
          type="submit"
          className="btn"
          style={{
            flex: "1",
            padding: "1px",
            borderRadius: "5px",
            textAlign: "center",
          }}
        /> */}
          </form>
        </Typography>
      </Container>
    );
  }
}

export default AddSupply;
