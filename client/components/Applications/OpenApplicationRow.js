import React from "react";
import { Box } from "@mui/material";

const OpenApplicationRow = (props) => {
  return (
    <Box
      sx={{
        width: "90%",
        height: 75,
        margin: "5%",
        backgroundColor: "white",
        borderRadius: 5,
        padding: 2,
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <Box className="companyInfo theme">{props.companyName}</Box>
      <Box className="companyInfo theme">{props.jobTitle}</Box>
      <Box className="companyInfo theme">4/19/2022</Box>
    </Box>
  );
};

export default OpenApplicationRow;
