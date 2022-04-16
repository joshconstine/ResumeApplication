import React, { useRef } from "react";
import { Box, Button, FormControl, InputLabel, Input } from "@mui/material";
import { useDispatch } from "react-redux";
import { fetchCreateEvent } from "../../store/event";

const addEvent = () => {
  let eventNameRef = useRef("");
  let eventDateRef = useRef();
  let eventTimeRef = useRef();
  let notesRef = useRef();
  const dispatch = useDispatch();

  async function handleSubmit(e) {
    e.preventDefault();
    const event = {
      eventName: eventNameRef.current.value,
      eventDate: eventDateRef.current.value,
      eventTime: eventTimeRef.current.value,
      notes: notesRef.current.value,
    };
    await dispatch(fetchCreateEvent(event));
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
