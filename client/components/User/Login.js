import React, { useState, useRef } from "react";
import { connect } from "react-redux";
import { login } from "../../contexts/authContext";
import { useHistory, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useAuth } from "../../contexts/authContext";
import {
  Container,
  Box,
  Typography,
  Avatar,
  TextField,
  Button,
} from "@mui/material";
import { Form } from "react-bootstrap";

/**
 * COMPONENT
 */
const Login = () => {
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const dispatch = useDispatch();
  const history = useHistory();
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login, currentUser } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      await login(emailRef.current.value, passwordRef.current.value);
      history.push("/");
    } catch (error) {
      window.alert(error);
    }
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
        <Typography variant="h4">Log In</Typography>

        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <Form.Group id="email">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" ref={emailRef} required />
          </Form.Group>
          <Form.Group id="password">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" ref={passwordRef} required />
          </Form.Group>
          <Button
            disabled={loading}
            className="w-100"
            onClick={(e) => handleSubmit(e)}
          >
            Log In
          </Button>
          <Link to="/signup" variant="body2">
            Don't have an account? Sign Up
          </Link>
        </Box>
      </Box>
    </Container>
  );
};

export default Login;
