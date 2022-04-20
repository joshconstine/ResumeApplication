import React, { useRef } from "react";
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  Input,
  Typography,
} from "@mui/material";

const Goal = () => {
  let goalRef = useRef("");
  const goal = "";

  async function handleSubmit(e) {
    e.preventDefault();

    // await dispatch(fetchCreateGoal(goalRef.current.value));
  }
  const fourm = { text: "Goal", ref: goalRef };
  let hasGoal = true;
  if (goal === null) hasGoal = false;
  return (
    <Box>
      <Typography variant="h6" className="regFont">
        Job search Goal
      </Typography>
      {!hasGoal ? (
        <>
          <Box className=" regFont column">
            you currently dont have any goals set add a goal below and we will
            help you acomplish it
          </Box>
          <Box className="column">
            <Box>
              <FormControl>
                <InputLabel htmlFor="Name">{fourm.text}</InputLabel>
                <Input aria-describedby="my-helper-text" inputRef={fourm.ref} />
              </FormControl>
            </Box>

            <Button onClick={(e) => handleSubmit(e)}>submit</Button>
          </Box>
        </>
      ) : (
        <Box>
          <Box className=" regFont column">
            current goal {goal} applications per day
          </Box>
          <Box className="column">
            <Box>
              <FormControl>
                <InputLabel htmlFor="Name">update goal</InputLabel>
                <Input
                  aria-describedby="my-helper-text"
                  inputRef={fourm.ref}
                  defaultValue={goal}
                />
              </FormControl>
            </Box>

            <Button onClick={(e) => handleSubmit(e)}>submit</Button>
          </Box>
        </Box>
      )}
      <Box sx={{ display: "flex" }}></Box>
    </Box>
  );
};

export default Goal;
