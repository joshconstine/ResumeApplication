import React from "react";
import { Box, Button } from "@mui/material";

const OpenApplicationRow = (props) => {
  return (
    <Box
      sx={{
        width: "95%",
        height: 100,
        backgroundColor: "gray",
        margin: 2,
        padding: 2,
        display: "flex",
        alignItems: "center",
        borderRadius: 5,

        justifyContent: " space-between",
      }}
    >
      <Box
        sx={{
          width: "80%",
          height: 75,
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
      <Box>
        <Button>delete</Button>
      </Box>
    </Box>
  );
};

export default OpenApplicationRow;