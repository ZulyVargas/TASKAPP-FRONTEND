import React from "react";
import "../styles/Login.scss";
import { Grid, Paper, Container, Avatar, TextField, Link } from "@mui/material";
import Button from "./Button";

function Login() {
  return (
    <Grid container id="GridLogin" component="main">
      <Container
        align="center"
        className="Paper"
        component={Paper}
        elevation={10}
        maxWidth={"xs"}
      >
        <Avatar id="AvatarLogin"></Avatar>
        <h2>Login Account</h2>
        <TextField
          id="mail"
          label="email"
          variant="standard"
          placeholder="Enter your user email"
          fullWidth
          required
        />
        <TextField
          id="passwd"
          label="password"
          variant="standard"
          placeholder="Enter your password"
          type="password"
          fullWidth
          required
        />
        <Button id="login" content="Log in" type="submit"></Button>
        <br></br>
        <Link href="#" id="forgotPasswd">
          Forgot Password?
        </Link>
        <br></br>
        <Link href="#" id="newAccount">
          Create new account!{" "}
        </Link>
      </Container>
    </Grid>
  );
}

export default Login;
