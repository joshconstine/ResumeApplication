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
        height: 130,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: "#d3bbd2",
        paddingTop: 3,
        paddingLeft: { xs: 5, sm: 5, md: 5, lg: 20 },
        paddingRight: { xs: 5, sm: 5, md: 5, lg: 20 },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",

          flexWrap: "wrap",
          width: 150,
        }}
      >
        <Typography
          variant="p"
          className="color4"
          sx={{
            fontSize: 16,
            fontWeight: 600,
            fontStyle: "italic",
            marginBottom: 1,
          }}
        >
          Application Helper
        </Typography>
        <Typography variant="p" className="color4" sx={{ fontSize: 13 }}>
          'You miss 100% of the shots you dont take'
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          // alignItems: "left",
          width: 150,
        }}
      >
        <Typography
          variant="p"
          className="color4"
          sx={{
            fontSize: 16,
            fontWeight: 600,
            fontStyle: "italic",
            marginBottom: 1,
          }}
        >
          Explore
        </Typography>
        <Link to="/about">
          <Typography variant="p" className="color4" sx={{ fontSize: 13 }}>
            About
          </Typography>
        </Link>

        <Link to="/creator">
          <Typography variant="p" className="color4" sx={{ fontSize: 13 }}>
            Meet the Creator
          </Typography>
        </Link>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          // alignItems: "right"
          width: 150,
        }}
      >
        <Typography
          variant="p"
          className="color4"
          sx={{
            fontSize: 16,
            fontWeight: 600,
            fontStyle: "italic",
            marginBottom: 1,
          }}
        >
          More
        </Typography>
        <Typography
          variant="p"
          className="color4"
          noWrap
          component="div"
          sx={{ fontSize: 13 }}
        >
          Questions? Contact Us
        </Typography>
      </Box>
    </AppBar>
  );
};

export default Footer;
