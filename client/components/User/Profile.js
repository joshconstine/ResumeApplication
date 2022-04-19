import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import EditUser from "./EditUser";
import { useHistory, Link } from "react-router-dom";
import { TextField, Typography, Box, Button } from "@mui/material";
import { updateUser, me } from "../../store/auth";

const Profile = () => {
  const user = useSelector((state) => state.auth);

  const [firstName, setFirstName] = useState(user.firstName || "");
  const [lastName, setLastName] = useState(user.lastName || "");
  const [email, setEmail] = useState(user.email);
  const [phoneNumber, setphoneNumber] = useState(user.phoneNumber || "");

  const dispatch = useDispatch();
  const history = useHistory();

  const handleUpdate = () => {
    const updatedUser = {
      firstName,
      lastName,
      email,
      phoneNumber,
    };
    dispatch(updateUser(updatedUser)).then(() => {
      dispatch(me());
    });
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: 5,
      }}
    >
      <Box sx={{ borderRadius: "25%" }}>
        <img
          className="circle"
          src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <TextField
          sx={{ paddingBottom: "2rem" }}
          label="First Name"
          type="text"
          value={firstName}
          onChange={(event) => {
            setFirstName(event.target.value);
          }}
        />
        <TextField
          sx={{ paddingBottom: "2rem" }}
          label="Last Name"
          type="text"
          value={lastName}
          onChange={(event) => {
            setLastName(event.target.value);
          }}
        />
        <TextField
          sx={{ paddingBottom: "2rem" }}
          label="Email"
          type="text"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
        <TextField
          sx={{ paddingBottom: "2rem" }}
          label="Phone Number"
          type="text"
          value={phoneNumber}
          onChange={(event) => {
            setphoneNumber(event.target.value);
          }}
        />
        <Button
          size="large"
          variant="contained"
          onClick={() => {
            handleUpdate();
          }}
        >
          update
        </Button>
      </Box>
    </Box>
  );
};

export default Profile;
