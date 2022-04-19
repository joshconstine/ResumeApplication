import React, { useEffect } from "react";
import { connect, useSelector, useDispatch } from "react-redux";
import { Box, Button, Typography } from "@mui/material";
import OpenApplicationRow from "./OpenApplicationRow";
import { useHistory, Link } from "react-router-dom";
import { useAuth } from "../../contexts/authContext";

/**
 * COMPONENT
 */
export const OpenApplicationsContainer = (props) => {
  const { usersApplications } = useAuth();

  useEffect(() => {}, [usersApplications]);
  function renderApplications(applications) {
    if (usersApplications.length === 0) {
      return <h1>no open applications</h1>;
    } else {
      return usersApplications.map((application, i) => {
        return (
          <OpenApplicationRow
            key={i}
            companyName={application.companyName}
            jobTitle={application.positionName}
            id={i}
          />
        );
      });
    }
  }

  return (
    <Box className="theme twothirdContainer">
      {usersApplications.map((application, i) => {
        return (
          <OpenApplicationRow
            key={i}
            companyName={application.companyName}
            jobTitle={application.positionName}
            id={application.uid}
          />
        );
      })}
    </Box>
  );
};

/**
 * CONTAINER
 */

export default OpenApplicationsContainer;
