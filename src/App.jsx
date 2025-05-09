import React from "react";
import Navbar from "./Navbar";
import Carrusel from "./Carrusel";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="main-content">
        {"Carrusel"}
        <Carrusel />
      </div>
    </>
  );
};

export default App;
