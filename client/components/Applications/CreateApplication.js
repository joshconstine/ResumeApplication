import React, { useEffect, useRef, useState } from "react";
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  Input,
  TextField,
  MenuItem,
  NativeSelect,
} from "@mui/material";
import { useHistory } from "react-router-dom";
import { useAuth } from "../../contexts/authContext";
import Select, { SelectChangeEvent } from "@mui/material/Select";

const CreateApplication = () => {
  let companyNameRef = useRef("");
  let positionNameRef = useRef();
  let positionDescriptionRef = useRef();
  let websiteURLRef = useRef();
  const history = useHistory();
  const { writeApplicationData, AddDocument } = useAuth();
  const [resumeUid, setResumeUid] = useState("");
  const [coverLetterUid, setCoverLetterUid] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    const application = {
      companyName: companyNameRef.current.value,
      positionName: positionNameRef.current.value,
      positionDescription: positionDescriptionRef.current.value,
      appliedAt: new Date().toISOString(),
      websiteURL: websiteURLRef.current.value,
      resumeUid: resumeUid,
      coverLetterUid: coverLetterUid,
    };
    await writeApplicationData(application);
    history.push("/applications");
  }
  const fourms = [
    { text: "Company Name", ref: companyNameRef },
    { text: "Position Name", ref: positionNameRef },

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

    var e = document.getElementById("documentSelcector");
    var documentType = e.value;

    if (documentType === "resume") {
      setResumeUid(AddDocument(fileArray[0]).uuid);
    } else {
      setCoverLetterUid(AddDocument(fileArray[0]).uuid);
    }
  };

  return (
    <Box className="">
      <h1>create application</h1>
      <Box className="column">
        <Box className="column" sx={{ flexDirection: "row" }}>
          {fourms.map((fourm, i) => {
            return (
              <Box key={i} sx={{ margin: 3 }}>
                {/* <FormControl>
                <InputLabel htmlFor="Name">{fourm.text}</InputLabel>
                <Input aria-describedby="my-helper-text" inputRef={fourm.ref} />
              </FormControl> */}
                <TextField
                  sx={{ paddingBottom: "2rem" }}
                  label={fourm.text}
                  type="text"
                  className="regFont"
                  inputRef={fourm.ref}
                  color="secondary"
                  focused
                />
              </Box>
            );
          })}
        </Box>
        <TextField
          sx={{ paddingBottom: "2rem" }}
          label="Position Description"
          type="text"
          className="regFont"
          inputRef={positionDescriptionRef}
          color="secondary"
          rows={10}
          fullWidth
          focused
          multiline
        />
        <FormControl sx={{ width: 200 }}>
          <InputLabel id="demo-simple-select-label">Document</InputLabel>
          <NativeSelect
            id="documentSelcector"
            label="document"
            // onChange={(e) => handleChange(e)}
            defaultValue="resume"
          >
            <option value={"resume"}>Resume</option>
            <option value={"cv"}>Cover Letter</option>
          </NativeSelect>
        </FormControl>
        <Box>
          <Box className="droparea" id="droparea">
            <p className="regFont">Add Resume/Cover letter here</p>
          </Box>
        </Box>

        <Button
          size="large"
          variant="contained"
          sx={{ backgroundColor: "#B363E6" }}
          className="styleButton"
          onClick={(e) => handleSubmit(e)}
          disableElevation
        >
          Save Application
        </Button>
      </Box>
    </Box>
  );
};

export default CreateApplication;
