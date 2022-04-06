import React from "react";
import { connect } from "react-redux";
import { Box, Button } from "@mui/material";
import { useHistory } from "react-router-dom";
/**
 * COMPONENT
 */
export const TemplatesHome = (props) => {
  const { username } = props;
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
      <h3>Welcome, {username}</h3>
      <Box
        sx={{
          width: "90%",
          display: "flex",
          justifyContent: "space-evenly",
          flexWrap: "wrap",
          padding: 5,
        }}
        className="theme"
      >
        templates
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

export default connect(mapState)(TemplatesHome);
