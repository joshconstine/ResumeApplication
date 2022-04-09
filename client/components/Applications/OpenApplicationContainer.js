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
  const applications = useSelector((state) => state.auth.Applications);
  const dispatch = useDispatch();

  function renderApplications(applications) {
    console.log(applications);
    if (applications.length === 0) {
      return <h1>no open applications</h1>;
    } else {
      return applications.map((application, i) => {
        return (
          <OpenApplicationRow
            companyName={application.companyName}
            jobTitle={application.positionName}
            id={application.id}
            key={i}
          />
        );
      });
    }
  }

  return (
    <Box className="theme twothirdContainer">
      {/* {applications ? (
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
      )} */}
      {renderApplications(applications)}
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
