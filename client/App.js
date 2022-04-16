import React from "react";
import Navbar from "./components/Navbars/Navbar";
import Routes from "./Routes";
import Footer from "./components/Navbars/Footer/Footer";
import { Container } from "@mui/material";

const App = () => {
  return (
    <Container>
      <Navbar />

      <Routes />
      <Footer />
    </Container>
  );
};

export default App;
