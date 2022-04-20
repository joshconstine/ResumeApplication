import React from "react";
import { useAuth } from "../../contexts/authContext";
import LogoutIcon from "@mui/icons-material/Logout";
import HomeIcon from "@mui/icons-material/Home";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ShowChartIcon from "@mui/icons-material/ShowChart";
import LoginIcon from "@mui/icons-material/Login";
import { Link, useHistory } from "react-router-dom";

import {
  Container,
  AppBar,
  Toolbar,
  Typography,
  Box,
  Tooltip,
  IconButton,
} from "@mui/material";
const Navbar = () => {
  const history = useHistory();
  const { currentUser, logout } = useAuth();
  async function handleClick(e) {
    try {
      history.push("/");
      await logout();
    } catch (error) {
      window.alert(error);
    }
  }
  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "white",
        border: "none",
        boxShadow: "none",
        borderBottom: 0.5,
        borderColor: "black",
      }}
    >
      <Container
        sx={{
          mr: 2,
          display: "flex",
          flexDirection: { xs: "column", sm: "column", md: "row" },
          justifyContent: "space-between",
          alignItems: { xs: "center", sm: "center", md: "flex-end" },
        }}
      >
        <Typography variant="h6" noWrap component="div">
          {/* <img src="/logo.png" alt="image" className="logo" /> */}
        </Typography>
        {currentUser ? (
          <Box
            sx={{
              mr: 2,
              display: "flex",
              width: 300,
              justifyContent: "space-between",
              paddingBottom: 2,
              paddingLeft: 2,
            }}
          >
            <Typography onClick={() => history.push("/")}>
              <Tooltip title="Home">
                <IconButton>
                  <HomeIcon sx={{ fontSize: 40, color: "#B363E6" }} />
                </IconButton>
              </Tooltip>
            </Typography>
            <Typography onClick={() => history.push("./profile")}>
              <Tooltip title="Profile">
                <IconButton>
                  <AccountBoxIcon sx={{ fontSize: 40, color: "#B363E6" }} />
                </IconButton>
              </Tooltip>
            </Typography>

            <Typography onClick={logout}>
              <Tooltip title="Logout">
                <IconButton>
                  <LogoutIcon sx={{ fontSize: 40, color: "#B363E6" }} />
                </IconButton>
              </Tooltip>
            </Typography>
          </Box>
        ) : (
          <Box sx={{ mr: 2, display: "flex" }}></Box>
        )}
      </Container>
    </AppBar>
  );
};

export default Navbar;
