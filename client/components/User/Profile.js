import React, { useState, useEffect } from "react";
import { useHistory, Link } from "react-router-dom";
import { TextField, Typography, Box, Button } from "@mui/material";
import Goal from "../Applications/Goal";
import { useAuth } from "../../contexts/authContext";
import { ref, set, getStorage, uploadBytes } from "firebase/storage";
import { ControlPointSharp } from "@mui/icons-material";

const Profile = () => {
  const {
    currentUser,
    writeUserData,
    addPhoto,
    getPhoto,
    updateUser,
    userInfo,
  } = useAuth();
  const user = userInfo;
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setphoneNumber] = useState("");

  useEffect(() => {
    setFirstName(userInfo.firstName);
    setLastName(userInfo.lastName);
    setEmail(userInfo.email);
    setphoneNumber(userInfo.phoneNumber);
  }, [userInfo]);
  const history = useHistory();

  const handleUpdate = () => {
    const updatedUser = {
      firstName,
      lastName,
      email,
      phoneNumber,
      uid: currentUser.uid,
    };
    updateUser(updatedUser);
  };
  useEffect(() => {
    const droparea = document.getElementById("droparea");

    ["dragenter", "dragover", "dragleave", "drop"].forEach((evtName) => {
      droparea.addEventListener(evtName, prevents);
    });

    ["dragenter", "dragover"].forEach((evtName) => {
      droparea.addEventListener(evtName, active);
    });

    ["dragleave", "drop"].forEach((evtName) => {
      droparea.addEventListener(evtName, inactive);
    });

    droparea.addEventListener("drop", handleDrop);
  }, []);
  const active = () => droparea.classList.add("green-border");

  const inactive = () => droparea.classList.remove("green-border");

  const prevents = (e) => e.preventDefault();

  const handleDrop = (e) => {
    const dt = e.dataTransfer;
    const files = dt.files;
    const fileArray = [...files];
    addPhoto(fileArray[0]);
  };
  const fetchPhoto = (e) => {
    const img = document.getElementById("droparea");

    getPhoto(img);
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
      <Box sx={{ borderRadius: "25%" }} className="column">
        <img
          id="droparea"
          className="circle"
          src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
        />
        <p>drag over to add a photo</p>
        <Button
          size="large"
          variant="contained"
          onClick={() => {
            writeUserData();
          }}
        >
          write data
        </Button>
        <Button
          size="large"
          variant="contained"
          onClick={() => {
            fetchPhoto();
          }}
        >
          getPhoto
        </Button>
      </Box>
      <Box className="column">
        <TextField
          sx={{ paddingBottom: "2rem" }}
          label="First Name"
          type="text"
          className="regFont"
          value={firstName}
          onChange={(event) => {
            setFirstName(event.target.value);
          }}
        />
        <TextField
          sx={{ paddingBottom: "2rem" }}
          label="Last Name"
          type="text"
          className="regFont"
          value={lastName}
          onChange={(event) => {
            setLastName(event.target.value);
          }}
        />
        <TextField
          sx={{ paddingBottom: "2rem" }}
          label="Email"
          type="text"
          className="regFont"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
        <TextField
          sx={{ paddingBottom: "2rem" }}
          label="Phone Number"
          type="text"
          className="regFont"
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
      <Goal />
    </Box>
  );
};

export default Profile;
