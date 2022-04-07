import React from "react";
import { Link, useHistory } from "react-router-dom";
import {
  Container,
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
} from "@mui/material";
import { red } from "@mui/material/colors";

const Footer = () => {
  //we take in logout and current user so our navbar can display accuratley
  const history = useHistory();

  return (
    // <>
    <AppBar
      position="fixed"
      display="flex"
      sx={{
        top: "auto",
        bottom: 0,
        height: 100,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        marginLeft: 0,
        marginRight: 0,
        backgroundColor: "#d98f8f",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          width: 125,
          padding: 1,
        }}
      >
        <Typography
          variant="p"
          sx={{
            fontSize: 14,
            fontWeight: 600,
            fontStyle: "italic",
            marginBottom: 0.5,
          }}
        >
          Application Helper
        </Typography>
        <Typography variant="p" sx={{ fontSize: 11 }}>
          We're on a mission to show people the real value of their $
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          // alignItems: "left",

          padding: 1,
        }}
      >
        <Typography
          variant="p"
          sx={{
            fontSize: 14,
            fontWeight: 600,
            fontStyle: "italic",
            marginBottom: 0.5,
          }}
        >
          Explore
        </Typography>
        <Link to="/about">
          <Typography variant="p" sx={{ fontSize: 11 }}>
            About
          </Typography>
        </Link>
        <Link to="/creator">
          <Typography variant="p" sx={{ fontSize: 11 }}>
            Meet the Creator
          </Typography>
        </Link>
      </Box>

      <Box
        sx={{
          padding: 1,

          display: "flex",
          flexDirection: "column",
          // alignItems: "right",
          padding: 1,
        }}
      >
        <Typography
          variant="p"
          sx={{
            fontSize: 14,
            fontWeight: 600,
            fontStyle: "italic",
            marginBottom: 0.5,
          }}
        >
          More
        </Typography>
        <Typography variant="p" noWrap component="div" sx={{ fontSize: 12 }}>
          Questions? Contact Us
        </Typography>

        <Typography
          variant="p"
          noWrap
          component="div"
          sx={{ fontSize: 12 }}
          onClick={() => history.push("/login")}
        >
          Already a user? sign in
        </Typography>
      </Box>
    </AppBar>
  );
};

export default Footer;
