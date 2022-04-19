import React, { useContext, useState, useEffect } from "react";
import Navbar from "./components/Navbars/Navbar";
import Routes from "./Routes";
import Footer from "./components/Navbars/Footer/Footer";
import { Container } from "@mui/material";

import { AuthProvider } from "./contexts/authContext";

const App = () => {
  return (
    <AuthProvider>
      <Container>
        <Navbar />

        <Routes />
        <Footer />
      </Container>
    </AuthProvider>
  );
};

export default App;
