import React, { useState, useEffect } from "react";
import { Box, Button, FormControl, InputLabel, Input } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { fetchApplication } from "../../store/singleApplication.js";

const SingleApplication = (props) => {
  const selectedApplication = useSelector((state) => state.selectedApplication);

  const applicationId = props.match.params.id;
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("applicationId", applicationId);
    dispatch(fetchApplication(applicationId));
  }, []);

  return (
    <Box className="twothirdContainer theme">
      <h1>single application</h1>
      {selectedApplication.companyName}
      {selectedApplication.positionName}
      {selectedApplication.positionDescription}
    </Box>
  );
};

export default SingleApplication;
