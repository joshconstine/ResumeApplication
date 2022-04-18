import React, { useState } from "react";
import { useSelector } from "react-redux";
import EditUser from "./EditUser";
import { useHistory, Link } from "react-router-dom";
import { TextField, Typography, Box, Button } from "@mui/material";

const Profile = () => {
  const user = useSelector((state) => state.auth);

  const [view, setView] = useState("");
  const history = useHistory();

  const currentView = (view) => {
    switch (view) {
      case "edit":
        return <EditUser />;
      default:
        return <></>;
    }
  };

  const handleView = (newView) => {
    if (newView === view) {
      setView("");
    } else {
      setView(newView);
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png" />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h3>
          Hello, {user.firstName} {user.lastName}!
        </h3>
        <h4>Email: {user.email}</h4>
        <h4>Phone: {user.phoneNumber}</h4>
        <Link to="/applications">
          <h4>open Applications: {user.Applications.length}</h4>
        </Link>

        <Button
          size="large"
          variant="contained"
          style={{ marginBottom: "2rem" }}
        >
          Past applications
        </Button>
        <Button
          size="large"
          variant="contained"
          style={{ marginBottom: "2rem" }}
          onClick={() => {
            handleView("edit");
          }}
        >
          Edit User
        </Button>
        <div>{currentView(view)}</div>
      </Box>
    </Box>
  );
};

export default Profile;
