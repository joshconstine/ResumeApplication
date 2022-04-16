import React, { useRef } from "react";
import { Box, Button, FormControl, InputLabel, Input } from "@mui/material";
import { fetchCreateApplication } from "../../store/application";
import { useDispatch } from "react-redux";

const CreateApplication = () => {
  let companyNameRef = useRef("");
  let positionNameRef = useRef();
  let positionDescriptionRef = useRef();
  let positionDateRef = useRef();
  let websiteURLRef = useRef();
  const dispatch = useDispatch();

  async function handleSubmit(e) {
    e.preventDefault();
    const application = {
      companyName: companyNameRef.current.value,
      positionName: positionNameRef.current.value,
      positionDescription: positionDescriptionRef.current.value,
      positionDate: positionDateRef.current.value,
      websiteURL: websiteURLRef.current.value,
    };
    await dispatch(fetchCreateApplication(application));
  }
  const fourms = [
    { text: "Company Name", ref: companyNameRef },
    { text: "Position Name", ref: positionNameRef },
    { text: "Position Description", ref: positionDescriptionRef },
    { text: "Date", ref: positionDateRef },
    { text: "Website Url:", ref: websiteURLRef },
  ];

  return (
    <Box className="twothirdContainer theme">
      <h1>create application</h1>
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

export default CreateApplication;
