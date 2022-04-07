import React, { useEffect } from "react";
import { connect, useSelector, useDispatch } from "react-redux";
import { Box, Button } from "@mui/material";
import { useHistory } from "react-router-dom";
import OpenApplicationsContainer from "./OpenApplicationContainer";
import ApplicationActions from "./ApplicationActions";
import { fetchApplications } from "../../store/application";
/**
 * COMPONENT
 */
export const ApplicationHome = (props) => {
  const { username } = props;
  const history = useHistory();
  const applications = useSelector((state) => state.applications);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchApplications());
  }, []);

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
