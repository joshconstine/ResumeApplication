import React, { useEffect } from "react";
import { connect, useSelector, useDispatch } from "react-redux";
import { Box, Button, Typography } from "@mui/material";
import OpenApplicationsContainer from "./OpenApplicationContainer";
import ApplicationActions from "./ApplicationActions";
import { fontFamily } from "@mui/system";
/**
 * COMPONENT
 */
export const ApplicationHome = (props) => {
  const { username } = props;

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        flexWrap: "wrap",
      }}
    >
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "space-center",
        }}
      >
        <Box sx={{ display: "flex" }}>
          <Typography sx={{ width: "49%", fontFamily: "Fantasy" }} variant="h3">
            Applications{" "}
          </Typography>
          <ApplicationActions />
        </Box>
        <OpenApplicationsContainer />
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

export default connect(mapState)(ApplicationHome);
