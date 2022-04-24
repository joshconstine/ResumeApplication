import React from "react";
import { Box, Typography } from "@mui/material";
import OpenApplicationsContainer from "./OpenApplicationContainer";
import ApplicationActions from "./ApplicationActions";
/**
 * COMPONENT
 */
export const ApplicationHome = (props) => {
  return (
    <Box className="column">
      <Box
        className="column"
        sx={{
          alignSelf: "flex-start",
          paddingLeft: "5%",
          alignItems: "flex-start",
        }}
      >
        <Typography variant="p" className="header">
          My Applications
        </Typography>
      </Box>

      <ApplicationActions />
      <OpenApplicationsContainer />
    </Box>
  );
};

/**
 * CONTAINER
 */

export default ApplicationHome;
