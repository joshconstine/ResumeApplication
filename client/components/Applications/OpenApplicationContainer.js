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

  return (
    <Box className="">
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
