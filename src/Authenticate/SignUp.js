import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

export class SignUp extends Component {
  state = {
    username: "",
    password: "",
    error: "",
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ user: this.state }),
    })
      .then((response) => response)
      .then((result) => localStorage.setItem("token", result.token));
  };

  render() {
    return (
      <>
        <form noValidate onSubmit={this.handleSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="Newusername"
            label="Username"
            name="username"
            autoComplete="username"
            autoFocus
            value={this.state.username}
            onChange={this.handleChange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="Newpassword"
            autoComplete="current-password"
            value={this.state.password}
            onChange={this.handleChange}
          />
          <Button type="submit" fullWidth variant="contained" color="primary">
            Create Account
          </Button>
        </form>
      </>
    );
  }
}
export default SignUp;

// function SignUp() {
//   const classes = useStyles();
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   console.log("un", username);
//   console.log("pw", password);

//   const
//     //   .then((result) => {
//     //     localStorage.setItem("token", result.token);
//     //   });
//     // event.target.reset();
//   };
//   return (
//     <>
//       <form className={classes.form} noValidate onSubmit={handleSubmit}>
//         <TextField
//           variant="outlined"
//           margin="normal"
//           required
//           fullWidth
//           id="Newusername"
//           label="Username"
//           name="username"
//           autoComplete="username"
//           autoFocus
//           value={username}
//           onChange={
//             (event) => console.log("set un", setUsername(event.target.value))
//             // setUsername(event.target.value)
//           }
//         />
//         <TextField
//           variant="outlined"
//           margin="normal"
//           required
//           fullWidth
//           name="password"
//           label="Password"
//           type="password"
//           id="Newpassword"
//           autoComplete="current-password"
//           value={password}
//           onChange={
//             (event) => console.log("set pw", setPassword(event.target.value))
//             // setPassword(event.target.value
//           }
//         />
//         <Button
//           type="submit"
//           fullWidth
//           variant="contained"
//           color="primary"
//           className={classes.submit}
//         >
//           Create Account
//         </Button>
//       </form>
//     </>
//   );
// }

// export default SignUp;
