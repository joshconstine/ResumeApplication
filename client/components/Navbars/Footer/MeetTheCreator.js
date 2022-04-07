import React, { useRef } from "react";
import { Box, Typography, Avatar, Link } from "@mui/material";

var team = [
  {
    name: "Joshua Constine",
    github: "https://github.com/joshconstine",
    linkedin: "https://www.linkedin.com/in/joshua-constine/",
    image: "https://ca.slack-edge.com/T024FPYBQ-U02T6DKJ875-8e062ebdd3c5-512",
  },
];

const MeetTheCreator = () => {
  return (
    <Box className="column" sx={{ marginTop: "10%", marginBottom: 10 }}>
      <Box sx={{ margin: 4 }}>
        <Typography varient="h1">Meet The Creator:</Typography>
      </Box>
      {team.map((member, i) => {
        return (
          <Box key={i} className="column" sx={{ padding: 2 }}>
            <Avatar src={member.image} sx={{ height: 300, width: 300 }} />
            <Typography varient="h4">{member.name}</Typography>
            <Link
              href={member.github}
              target="_blank"
              rel="noreferrer noopener"
              varient="h4"
            >
              Github
            </Link>
            <Link
              href={member.linkedin}
              target="_blank"
              rel="noreferrer noopener"
              varient="h4"
            >
              LinkedIn
            </Link>
          </Box>
        );
      })}
    </Box>
  );
};
export default MeetTheCreator;
