import React from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardActions,
  Typography,
} from "@mui/material";
import { useHistory, Link } from "react-router-dom";

import { useAuth } from "../../contexts/authContext";

const OpenApplicationRow = (props) => {
  const { deleteApplication } = useAuth();
  async function handleDelete() {
    deleteApplication(props.id);
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
