import React from "react";
import { connect } from "react-redux";
import { Box, Button } from "@mui/material";
import { Link } from "react-router-dom";
/**
 * COMPONENT
 */
export const ApplicationActions = (props) => {
  return (
    <Box className="optionsRow">
      {/* <Box className="actions">{props.goal} more applications</Box> */}
      <Link to={"/createApplication"}>
        <Button
          size="large"
          variant="contained"
          sx={{ backgroundColor: "#B363E6" }}
          className="styleButton"
          disableElevation
        >
          Add ApplicationActions
        </Button>
      </Link>
      <Link to={"/goal"}>
        <Button
          size="large"
          variant="contained"
          sx={{ backgroundColor: "#B363E6" }}
          className="styleButton"
          disableElevation
        >
          Add Goal
        </Button>
      </Link>
      <Button
        size="large"
        variant="contained"
        sx={{ backgroundColor: "#B363E6" }}
        className="styleButton"
        disableElevation
      >
        Historical ApplicationActions
      </Button>
    </Box>
  );
};

export default ApplicationActions;
