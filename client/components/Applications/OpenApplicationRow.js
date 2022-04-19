import React from "react";
import { Box, Button } from "@mui/material";

import { useHistory, Link } from "react-router-dom";

import { connect, useSelector, useDispatch } from "react-redux";
import { useAuth } from "../../contexts/authContext";

const OpenApplicationRow = (props) => {
  const dispatch = useDispatch();
  const { deleteApplication } = useAuth();
  async function handleDelete() {
    deleteApplication(props.id);
  }

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
        <Link to={`/application/${props.id}`}>
          <Box className="companyInfo theme">{props.companyName}</Box>
        </Link>
        <Box className="companyInfo theme">{props.jobTitle}</Box>
        <Box className="companyInfo theme">4/19/2022</Box>
      </Box>
      <Box>
        <Button onClick={handleDelete}>delete</Button>
      </Box>
    </Box>
  );
};

export default OpenApplicationRow;
