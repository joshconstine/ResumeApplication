import React, { useEffect, useRef } from "react";
import { Box, Button, FormControl, InputLabel, Input } from "@mui/material";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { useAuth } from "../../contexts/authContext";

const CreateApplication = () => {
  let companyNameRef = useRef("");
  let positionNameRef = useRef();
  let positionDescriptionRef = useRef();
  let websiteURLRef = useRef();
  const dispatch = useDispatch();
  const history = useHistory();
  const { writeApplicationData } = useAuth();

  async function handleSubmit(e) {
    e.preventDefault();
    const application = {
      companyName: companyNameRef.current.value,
      positionName: positionNameRef.current.value,
      positionDescription: positionDescriptionRef.current.value,
      appliedAt: new Date().toISOString(),
      websiteURL: websiteURLRef.current.value,
    };
    await writeApplicationData(application);
    history.push("/applications");
  }
  const fourms = [
    { text: "Company Name", ref: companyNameRef },
    { text: "Position Name", ref: positionNameRef },
    { text: "Position Description", ref: positionDescriptionRef },
    { text: "Website Url:", ref: websiteURLRef },
  ];
  useEffect(() => {
    const droparea = document.getElementById("droparea");

    ["dragenter", "dragover", "dragleave", "drop"].forEach((evtName) => {
      droparea.addEventListener(evtName, prevents);
    });

    ["dragenter", "dragover"].forEach((evtName) => {
      droparea.addEventListener(evtName, active);
    });

    ["dragleave", "drop"].forEach((evtName) => {
      droparea.addEventListener(evtName, inactive);
    });

    droparea.addEventListener("drop", handleDrop);
  }, []);

  const active = () => droparea.classList.add("green-border");

  const inactive = () => droparea.classList.remove("green-border");

  const prevents = (e) => e.preventDefault();

  const handleDrop = (e) => {
    const dt = e.dataTransfer;
    const files = dt.files;
    const fileArray = [...files];
    console.log(files); // FileList
    console.log(fileArray);
  };

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
        <Box>
          <Box className="droparea" id="droparea">
            <i className="far fa-images"></i>
            <p>Add Resume/Cover letter here</p>
          </Box>
        </Box>
        <Button onClick={(e) => handleSubmit(e)}>submit</Button>
      </Box>
    </Box>
  );
};

export default CreateApplication;
