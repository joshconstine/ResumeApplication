import React from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardActions,
  Typography,
} from "@mui/material";
import {
  fetchApplications,
  fetchDeleteApplication,
} from "../../store/application";
import { useHistory, Link } from "react-router-dom";

import { connect, useSelector, useDispatch } from "react-redux";

const OpenApplicationRow = (props) => {
  const dispatch = useDispatch();

  async function handleDelete() {
    await dispatch(fetchDeleteApplication(props.id));
    await dispatch(fetchApplications());
  }

  return (
    <Card sx={{ width: 345, margin: 5 }}>
      <CardContent>
        <Link to={`/application/${props.id}`}>
          <Box className="companyInfo theme">{props.companyName}</Box>
        </Link>
        <Typography variant="p">{props.jobTitle}</Typography>
      </CardContent>
      <CardActions>
        <Button onClick={handleDelete}>delete</Button>
      </CardActions>
    </Card>
  );
};

export default OpenApplicationRow;
