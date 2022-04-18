import React from "react";
import { connect } from "react-redux";
import { Box, Button } from "@mui/material";
import { useHistory } from "react-router-dom";
/**
 * COMPONENT
 */
export const Home = (props) => {
  const history = useHistory();

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          width: "90%",
          height: 500,
          display: "flex",
          justifyContent: "space-evenly",
          flexWrap: "wrap",
          padding: 5,
        }}
        className="theme"
      >
        <Box className="homeScreenOption">
          <Button onClick={() => history.push("/applications")}>
            My Applications
          </Button>
        </Box>
        <Box className="homeScreenOption">
          <Button onClick={() => history.push("/calendar")}>Calendar</Button>
        </Box>
        <Box className="homeScreenOption">
          <Button onClick={() => history.push("/events")}>Events</Button>
        </Box>
        <Box className="homeScreenOption">
          <Button onClick={() => history.push("/templates")}>Templates</Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
