import React, { useState, useEffect } from "react";
import { Box, Button, FormControl, InputLabel, Input } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { useAuth } from "../../contexts/authContext";

const SingleApplication = (props) => {
  const history = useHistory();
  const { updateSelectedApplication, selectedApplication, deleteEvent } =
    useAuth();

  const applicationId = props.match.params.id;
  console.log(updateSelectedApplication(applicationId));
  const dispatch = useDispatch();

  function handleSubmit() {
    console.log("submit");
    history.push(`/addEvent/${applicationId}`);
  }
  async function handleDelete(e, id) {
    deleteEvent(applicationId, id);
  }
  function editClick() {
    history.push(`/edit/application/${applicationId}`);
  }

  function renderEvents() {
    for (var event in selectedApplication.events) {
      var value = selectedApplication.events[event];
      console.log(value);
      return printEvent(value, event);
    }
  }
  function printEvent(event, value) {
    return (
      <Box>
        <Box>{event.eventName}</Box>
        <Box>{event.eventDate}</Box>
        <Button onClick={(e) => handleDelete(e, value)}> delete</Button>
      </Box>
    );
  }
  return (
    <Box className="twothirdContainer theme">
      <Box>
        <h1>single application</h1>
        {selectedApplication.companyName}
        {selectedApplication.positionName}
        {selectedApplication.positionDescription}
      </Box>
      {renderEvents()}

      <Button onClick={handleSubmit}>add event</Button>
      <Button onClick={editClick}>edit</Button>
    </Box>
  );
};

export default SingleApplication;
