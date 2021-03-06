import React, { useRef } from "react";
import { Box, Button, FormControl, InputLabel, Input } from "@mui/material";
import { useHistory } from "react-router-dom";
import { useAuth } from "../../contexts/authContext";

const addEvent = (props) => {
  let eventNameRef = useRef("");
  let eventDateRef = useRef();
  let eventTimeRef = useRef();
  let notesRef = useRef();
  const history = useHistory();
  const { addEvent } = useAuth();

  const id = props.match.params.id;

  async function handleSubmit(e) {
    e.preventDefault();
    const event = {
      eventName: eventNameRef.current.value,
      eventDate: new Date().toISOString(),
      notes: notesRef.current.value,
    };
    addEvent(event, id);
    history.push(`/application/${props.match.params.id}`);
  }
  const fourms = [
    { text: "Event Name", ref: eventNameRef },
    { text: "Event date", ref: eventDateRef },
    { text: "Event time", ref: eventTimeRef },
    { text: "notes:", ref: notesRef },
  ];

  return (
    <Box className="twothirdContainer theme">
      <h1>Create Event</h1>
      <Box className="column">
        {fourms.map((fourm, i) => {
          return (
            <Box key={i}>
              <FormControl>
                <InputLabel htmlFor="Name">{fourm.text}</InputLabel>
                <Input aria-describedby="my-helper-text" inputRef={fourm.ref} />
              </FormControl>
            </Box>
          );
        })}

        <Button onClick={(e) => handleSubmit(e)}>submit</Button>
      </Box>
    </Box>
  );
};

export default addEvent;
