import React from "react";
import { Box } from "@mui/material";

const OpenApplicationRow = (props) => {
  console.log(props.companyName);
  return (
    <Box
      sx={{
        width: "90%",
        margin: "5%",
      }}
    >
      {props.companyName}
    </Box>
  );
};

export default OpenApplicationRow;
