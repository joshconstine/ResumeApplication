import React, { useRef } from "react";
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  Input,
  Typography,
} from "@mui/material";
import { fetchCreateGoal } from "../../store/auth";
import { connect, useSelector, useDispatch } from "react-redux";

const Goal = () => {
  let goalRef = useRef("");

  const dispatch = useDispatch();

  async function handleSubmit(e) {
    e.preventDefault();

    await dispatch(fetchCreateGoal(goalRef.current.value));
  }
  const fourms = [{ text: "Goal", ref: goalRef }];

  return (
    <Box>
      <Typography variant="h6" className="regFont">
        Job search Goal
      </Typography>
      <Box className=" regFont column">
        you currently dont have any goals set!
      </Box>
      <Box sx={{ display: "flex" }}>
        <Box className="column">
          {fourms.map((fourm, i) => {
            return (
              <Box key={i}>
                <FormControl>
                  <InputLabel htmlFor="Name">{fourm.text}</InputLabel>
                  <Input
                    aria-describedby="my-helper-text"
                    inputRef={fourm.ref}
                  />
                </FormControl>
              </Box>
            );
          })}

          <Button onClick={(e) => handleSubmit(e)}>submit</Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Goal;
