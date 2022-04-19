import React, { useState, useEffect } from "react";
import { Box, Button, FormControl, InputLabel, Input } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { fetchApplication } from "../../store/singleApplication.js";
import { useHistory } from "react-router-dom";
import { fetchDeleteEvent } from "../../store/event";
import { useAuth } from "../../contexts/authContext";

const SingleApplication = (props) => {
  const history = useHistory();
  const { updateSelectedApplication, selectedApplication } = useAuth();

  const applicationId = props.match.params.id;
  console.log(updateSelectedApplication(applicationId));
  const dispatch = useDispatch();

  function handleSubmit() {
    console.log("submit");
    history.push(`/addEvent/${applicationId}`);
  }
  async function handleDelete(e, id) {
    console.log("delete", id);
    await dispatch(fetchDeleteEvent(id));
    await dispatch(fetchApplication(applicationId));
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

      {selectedApplication.Events?.map((event, i) => {
        return (
          <Box key={i}>
            <Box>
              {event.eventName}
              {event.eventDate}
            </Box>
            <Button onClick={(e) => handleDelete(e, event.id)}>
              {" "}
              Delete event
            </Button>
          </Box>
        );
      })}
      <Button onClick={handleSubmit}>add event</Button>
      <Button onClick={editClick}>edit</Button>
    </Box>
  );
};

export default SingleApplication;
