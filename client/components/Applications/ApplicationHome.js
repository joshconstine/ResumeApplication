import React, { useEffect } from "react";
import { connect, useSelector, useDispatch } from "react-redux";
import { Box, Button } from "@mui/material";
import OpenApplicationsContainer from "./OpenApplicationContainer";
import ApplicationActions from "./ApplicationActions";
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
      }}
    >
      <h3>Welcome, {username}</h3>
      {/* <Box className="theme twothirdContainer">applications</Box> */}
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "space-center",
        }}
      >
        <OpenApplicationsContainer />
        <ApplicationActions />
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
