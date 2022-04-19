import React, { useEffect } from "react";
import { connect, useSelector, useDispatch } from "react-redux";
import { Box, Button, Typography } from "@mui/material";
import OpenApplicationRow from "./OpenApplicationRow";
import { useHistory, Link } from "react-router-dom";
import { deleteApplication, fetchApplications } from "../../store/application";

/**
 * COMPONENT
 */
export const OpenApplicationsContainer = (props) => {
  const history = useHistory();
  const applications = [];
  const singleApplication = useSelector((state) => state.selectedApplication);
  const dispatch = useDispatch();

  useEffect(() => {}, [applications]);

  function renderApplications(applications) {
    if (applications.length === 0) {
      return <h1>no open applications</h1>;
    } else {
      return applications.map((application, i) => {
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
      {applications.map((application, i) => {
        return (
          <OpenApplicationRow
            key={i}
            companyName={application.companyName}
            jobTitle={application.positionName}
            id={i}
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
