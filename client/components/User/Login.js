import React, { useState } from "react";
import { connect } from "react-redux";
import { authenticate } from "../../store";
import { useHistory, Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import {
  Container,
  Box,
  Typography,
  Avatar,
  TextField,
  Button,
} from "@mui/material";

/**
 * COMPONENT
 */
const Login = (props) => {
  const { name, displayName, handleSubmit, error } = props;
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const dispatch = useDispatch();
  const history = useHistory();

  return (
    <Container>
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography variant="h4">Log In</Typography>

        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            id="email"
            label="Email"
            name="email"
            variant="filled"
            margin="normal"
            fullWidth
            required
            autoComplete="email"
            autoFocus
            error={!!emailError}
            helperText={emailError}
          />

          <TextField
            id="password"
            label="Password"
            name="password"
            variant="filled"
            margin="normal"
            fullWidth
            required
            autoComplete="current-password"
            type="password"
            error={!!passwordError}
            helperText={passwordError}
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
          <Link to="/signup" variant="body2">
            Don't have an account? Sign Up
          </Link>
        </Box>
      </Box>
    </Container>
  );
};

/**
 * CONTAINER
 *   Note that we have two different sets of 'mapStateToProps' functions -
 *   one for Login, and one for Signup. However, they share the same 'mapDispatchToProps'
 *   function, and share the same Component. This is a good example of how we
 *   can stay DRY with interfaces that are very similar to each other!
 */
const mapLogin = (state) => {
  return {
    name: "login",
    displayName: "Login",
    error: state.auth.error,
  };
};

const mapDispatch = (dispatch) => {
  return {
    handleSubmit(evt) {
      evt.preventDefault();

      const username = evt.target.email.value;
      const password = evt.target.password.value;
      dispatch(authenticate(username, password, "login"));
    },
  };
};

export default connect(mapLogin, mapDispatch)(Login);
