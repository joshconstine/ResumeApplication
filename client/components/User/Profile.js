import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import EditUser from "./EditUser";
import { useHistory, Link } from "react-router-dom";
import { TextField, Typography, Box, Button } from "@mui/material";
import { updateUser, me } from "../../store/auth";
import Goal from "../Applications/Goal";
import { useAuth } from "../../contexts/authContext";
import { ref, set, getStorage, uploadBytes } from "firebase/storage";

const Profile = () => {
  const user = useSelector((state) => state.auth);
  const { currentUser, writeUserData, addPhoto, getPhoto } = useAuth();
  const [firstName, setFirstName] = useState(user.firstName || "");
  const [lastName, setLastName] = useState(user.lastName || "");
  const [email, setEmail] = useState(user.email);
  const [phoneNumber, setphoneNumber] = useState(user.phoneNumber || "");

  const dispatch = useDispatch();
  const history = useHistory();
  console.log("curusr", currentUser);

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
