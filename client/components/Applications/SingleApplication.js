import React, { useState, useEffect } from "react";
import { Box, Button, FormControl, InputLabel, Input } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { fetchApplication } from "../../store/singleApplication.js";
import { useHistory } from "react-router-dom";

const SingleApplication = (props) => {
  const history = useHistory();
  const selectedApplication = useSelector((state) => state.selectedApplication);

  const applicationId = props.match.params.id;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchApplication(applicationId));
  }, []);

  function handleSubmit() {
    console.log("submit");
    history.push(`/addEvent`);
  }
  function editClick() {
    console.log("edit");
    history.push(`/edit/application/${applicationId}`);
  }

  return (
    <Box className="twothirdContainer theme">
      <Box>
        <h1>single application</h1>
        {selectedApplication.companyName}
        {selectedApplication.positionName}
        {selectedApplication.positionDescription}
      </Box>
      <Button onClick={handleSubmit}>add event</Button>
      <Button onClick={editClick}>edit</Button>
    </Box>
  );
};

export default SingleApplication;
