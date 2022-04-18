import React from "react";
import { connect } from "react-redux";
import { Box, Button, Typography, AppBar } from "@mui/material";
import { Link } from "react-router-dom";
/**
 * COMPONENT
 */
export const ApplicationActions = (props) => {
  return (
    <Box className="optionsRow">
      <Box className="actions">{props.goal} more applications</Box>
      <Link to={"/createApplication"}>
        <Box className="actions">Add Application</Box>
      </Link>
      <Link to={"/goal"}>
        <Box className="actions">Add Goal</Box>
      </Link>
      <Box className="actions">Historic Applications</Box>
    </Box>
  );
};

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    goal: state.auth.goal,
  };
};

export default connect(mapState)(ApplicationActions);
