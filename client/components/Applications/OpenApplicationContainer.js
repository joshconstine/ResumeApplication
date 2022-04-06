import React from "react";
import { connect } from "react-redux";
import { Box, Button, Typography } from "@mui/material";
import OpenApplicationRow from "./OpenApplicationRow";
/**
 * COMPONENT
 */
export const OpenApplicationsContainer = (props) => {
  let applications = [
    {
      companyName: "Facebook",
      jobTitle: "fullstack-dev",
    },
    {
      companyName: "google",
      jobTitle: "frontend-dev",
    },
    {
      companyName: "uber",
      jobTitle: "backend-dev",
    },
  ];

  return (
    <Box className="theme twothirdContainer">
      {applications ? (
        applications.map((application, i) => {
          return (
            <OpenApplicationRow
              companyName={application.companyName}
              jobTitle={application.jobTitle}
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
