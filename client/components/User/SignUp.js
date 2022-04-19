import React, { useState, useRef } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, connect } from "react-redux";
import { Form } from "react-bootstrap";

import { LockOutlined } from "@mui/icons-material";
import {
  Container,
  Box,
  Typography,
  Avatar,
  TextField,
  Button,
} from "@mui/material";

import { useAuth } from "../../contexts/authContext";

/**
 * COMPONENT
 */
const SignUp = () => {
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const passwordConfirmRef = useRef("");
  const { signup, writeUserData } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      signup(emailRef.current.value, passwordRef.current.value);
      history.push("/");
    } catch {
      setError("Failed to create an account");
    }
    setLoading(false);
  }

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
          <Form.Group id="email">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" ref={emailRef} required />
          </Form.Group>
          <Form.Group id="password">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" ref={passwordRef} required />
          </Form.Group>
          <Form.Group id="password">
            <Form.Label>Password Confirmation</Form.Label>
            <Form.Control type="password" ref={passwordConfirmRef} required />
          </Form.Group>
          <Button
            onClick={(e) => handleSubmit(e)}
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
export default SignUp;
