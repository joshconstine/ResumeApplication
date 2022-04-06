import React from "react";
import { connect } from "react-redux";
import { Box, Button, Typography } from "@mui/material";
/**
 * COMPONENT
 */
export const ApplicationActions = (props) => {
  return (
    <Box className="theme oneThirdContainer">
      <Box
        sx={{
          width: "90%",
          height: "90%",
          margin: "2%",
          backgroundColor: "white",
          borderRadius: 5,
          padding: "2%",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Box className="ApplicationAction theme">2 more applications</Box>
        <Box className="ApplicationAction theme">Add Application</Box>
        <Box className="ApplicationAction theme">Historic Applications</Box>
      </Box>
    </Box>
  );
};

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    username: state.auth.username,
  };
};

export default connect(mapState)(ApplicationActions);
