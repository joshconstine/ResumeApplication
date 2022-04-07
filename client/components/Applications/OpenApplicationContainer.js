import React, { useEffect } from "react";
import { connect, useSelector, useDispatch } from "react-redux";
import { Box, Button, Typography } from "@mui/material";
import OpenApplicationRow from "./OpenApplicationRow";
import { useHistory } from "react-router-dom";
import { fetchApplications } from "../../store/application";

/**
 * COMPONENT
 */
export const OpenApplicationsContainer = (props) => {
  // let applications = [
  //   {
  //     companyName: "Facebook",
  //     jobTitle: "fullstack-dev",
  //   },
  //   {
  //     companyName: "google",
  //     jobTitle: "frontend-dev",
  //   },
  //   {
  //     companyName: "uber",
  //     jobTitle: "backend-dev",
  //   },
  // ];
  const history = useHistory();
  const applications = useSelector((state) => state.applications);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchApplications());
  }, []);
  return (
    <Box className="theme twothirdContainer">
      {applications ? (
        applications.map((application, i) => {
          return (
            <OpenApplicationRow
              companyName={application.companyName}
              jobTitle={application.positionName}
              id={application.id}
              key={i}
            />
          );
        })
      ) : (
        <>no applications</>
      )}
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

export default connect(mapState)(OpenApplicationsContainer);
