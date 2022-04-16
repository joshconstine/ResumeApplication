import React, { useRef } from "react";
import { Box, Button, FormControl, InputLabel, Input } from "@mui/material";
import { fetchCreateGoal } from "../../store/auth";
import { useDispatch } from "react-redux";

const Goal = () => {
  let goalRef = useRef("");

  const dispatch = useDispatch();

  async function handleSubmit(e) {
    e.preventDefault();
    const goal = {
      goalRef: goalRef.current.value,
    };
    await dispatch(fetchCreateGoal(goal));
  }
  const fourms = [{ text: "Goal", ref: goalRef }];

  return (
    <Box className="twothirdContainer theme">
      <h1>Goal</h1>
      <Box className="column">you currently dont have any goals set!</Box>
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
