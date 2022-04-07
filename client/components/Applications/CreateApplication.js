import React, { useRef } from "react";
import {
  Container,
  AppBar,
  Toolbar,
  Typography,
  Box,
  Card,
  CardMedia,
  CardContent,
  Button,
  FormControl,
  InputLabel,
  Input,
  FormHelperText,
} from "@mui/material";
import { fetchCreateApplication } from "../../store/application";
import { connect, useSelector, useDispatch } from "react-redux";

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

  return (
    <Box className="twothirdContainer theme">
      <h1>create application</h1>
      <Box>
        <FormControl>
          <InputLabel htmlFor="Name">Company Name</InputLabel>
          <Input aria-describedby="my-helper-text" inputRef={companyNameRef} />
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="Price">Position Name</InputLabel>
          <Input aria-describedby="my-helper-text" inputRef={positionNameRef} />
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="Name">Position Description</InputLabel>
          <Input
            aria-describedby="my-helper-text"
            inputRef={positionDescriptionRef}
          />
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="Price">Date </InputLabel>
          <Input aria-describedby="my-helper-text" inputRef={positionDateRef} />
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="Price">Website Url: </InputLabel>
          <Input aria-describedby="my-helper-text" inputRef={websiteURLRef} />
        </FormControl>
        <Button onClick={(e) => handleSubmit(e)}>submit</Button>
      </Box>
    </Box>
  );
};

export default CreateApplication;
