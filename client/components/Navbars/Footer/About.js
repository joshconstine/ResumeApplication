import React, { useRef } from "react";
import { Box, Typography } from "@mui/material";

const About = () => {
  return (
    <Box className="column" sx={{ marginTop: "20%" }}>
      <Box sx={{ margin: 4 }}>
        <Typography varient="h1">about</Typography>
      </Box>
      <Typography varient="p">
        have a stressful job search comming up. Stary orginized with this simple
        tool! Track your applications, send yourself helpfull text message
        reminders, create templates and more.
      </Typography>
    </Box>
  );
};
export default About;
