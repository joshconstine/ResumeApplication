import React from "react";
import { connect } from "react-redux";
import { Box, Button } from "@mui/material";
import { useHistory } from "react-router-dom";
/**
 * COMPONENT
 */
export const TemplatesHome = (props) => {
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

export default TemplatesHome;
