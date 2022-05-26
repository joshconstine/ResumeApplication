import React from "react";
import { Box, Typography } from "@mui/material";
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
      <Box sx={{ display: "flex" }}>
        <Typography sx={{ width: "49%", fontFamily: "Fantasy" }} variant="h3">
          Templates Feature comming soon!
        </Typography>
      </Box>
    </Box>
  );
};

/**
 * CONTAINER
 */

export default TemplatesHome;
