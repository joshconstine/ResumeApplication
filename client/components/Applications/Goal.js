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
    <Box sx={{ alignSelf: "flex-start" }}>
      {!hasGoal ? (
        <>
          <Typography variant="h6" className="regFont">
            What Is Your Job Search Goal?
          </Typography>

          <Box className="column">
            <Box>
              <FormControl>
                <InputLabel htmlFor="Name"> # applications per day:</InputLabel>
                <Input aria-describedby="my-helper-text" inputRef={fourm.ref} />
              </FormControl>
            </Box>
            <Button
              size="large"
              variant="contained"
              sx={{ backgroundColor: "#B363E6", marginTop: 3 }}
              onClick={(e) => handleSubmit(e)}
            >
              save changes
            </Button>
          </Box>
        </>
      ) : (
        <Box>
          <Typography variant="h6" className="regFont">
            Your Current Goal Is:
          </Typography>

          <Box className="column">
            <Box>
              <FormControl>
                <InputLabel htmlFor="Name"> # applications per day</InputLabel>
                <Input
                  aria-describedby="my-helper-text"
                  inputRef={fourm.ref}
                  defaultValue={goal}
                />
              </FormControl>
            </Box>

            <Button
              size="large"
              variant="contained"
              sx={{ backgroundColor: "#B363E6", marginTop: 3 }}
              onClick={(e) => handleSubmit(e)}
            >
              save canges
            </Button>
          </Box>
        </Box>
      )}
      <Box sx={{ display: "flex" }}></Box>
    </Box>
  );
};

export default Goal;
