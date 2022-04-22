import React from "react";
import { Box, Typography } from "@mui/material";
import OpenApplicationsContainer from "./OpenApplicationContainer";
import ApplicationActions from "./ApplicationActions";
/**
 * COMPONENT
 */
export const ApplicationHome = (props) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        flexWrap: "wrap",
      }}
    >
      <Typography variant="p" className="header">
        My Applications
      </Typography>
      <ApplicationActions />
      <OpenApplicationsContainer />
    </Box>
  );
};

/**
 * CONTAINER
 */

export default ApplicationHome;
