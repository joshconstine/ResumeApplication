import React from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardActions,
  CardHeader,
  Typography,
} from "@mui/material";
import { useHistory, Link } from "react-router-dom";

import { useAuth } from "../../contexts/authContext";
import { ConnectingAirportsOutlined } from "@mui/icons-material";

const OpenApplicationCard = (props) => {
  const { deleteApplication, updateSelectedApplication } = useAuth();
  async function handleDelete() {
    deleteApplication(props.id);
  }
  const handleClick = () => {
    updateSelectedApplication(props.id);
  };

  return (
    <Card sx={{ width: 345, margin: 5 }}>
      <Link to={`/application/${props.id}`} onClick={handleClick}>
        <CardHeader
          sx={{ backgroundColor: "#D3BBD2", width: "80%", margin: 2 }}
          title={props.application.companyName}
        />
      </Link>
      <CardContent>
        <Typography variant="p">{props.application.jobTitle}</Typography>
        <Typography variant="p">applied on: 4/20/2022</Typography>
      </CardContent>
      <CardActions>
        <Button onClick={handleDelete}>delete</Button>
      </CardActions>
    </Card>
  );
};

export default OpenApplicationCard;
