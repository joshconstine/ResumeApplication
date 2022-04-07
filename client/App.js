import React from "react";
import Navbar from "./components/Navbars/Navbar";
import Routes from "./Routes";
import Footer from "./components/Navbars/Footer/Footer";

const App = () => {
  return (
    <div>
      <Navbar />

      <Routes />
      <Footer />
    </div>
  );
};

export default App;
