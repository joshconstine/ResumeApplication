import React, { useEffect } from "react";
import { connect, useSelector, useDispatch } from "react-redux";
import { Box, Button, Typography, Container } from "@mui/material";
import OpenApplicationsContainer from "./OpenApplicationContainer";
import ApplicationActions from "./ApplicationActions";
import { fontFamily } from "@mui/system";
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
      <Typography sx={{ fontFamily: "Fantasy", margin: 5 }} variant="h3">
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
