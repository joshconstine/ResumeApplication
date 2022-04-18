import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, connect } from "react-redux";
import {
  Container,
  Box,
  Typography,
  Avatar,
  TextField,
  Button,
} from "@mui/material";
import { LockOutlined } from "@mui/icons-material";
import { authenticate } from "../../store";

/**
 * COMPONENT
 */
const SignUp = (props) => {
  const { name, displayName, handleSubmit, error } = props;
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");

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
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlined />
        </Avatar>
        <Typography variant="h4">SignUp</Typography>

        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            id="firstName"
            label="First Name"
            name="firstName"
            variant="filled"
            margin="normal"
            fullWidth
            required
            autoComplete="first name"
            autoFocus
            error={!!firstNameError}
            helperText={firstNameError}
          />

          <TextField
            id="lastName"
            label="Last Name"
            name="lastName"
            variant="filled"
            margin="normal"
            fullWidth
            required
            autoComplete="last name"
            error={!!lastNameError}
            helperText={lastNameError}
          />

          <TextField
            id="email"
            label="Email"
            name="email"
            variant="filled"
            margin="normal"
            fullWidth
            required
            autoComplete="email"
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
          <Link to="/login" variant="body2">
            Already have an account? Log in
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

const mapSignup = (state) => {
  return {
    name: "signup",
    displayName: "Sign Up",
    error: state.auth.error,
  };
};

const mapDispatch = (dispatch) => {
  return {
    handleSubmit(evt) {
      evt.preventDefault();
      const email = evt.target.email.value;
      const password = evt.target.password.value;
      dispatch(authenticate(email, password, "signup"));
    },
  };
};

export default connect(mapSignup, mapDispatch)(SignUp);
