import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import Registro from "./Registro";
import Requisitos from "./Requisitos";
import Nosotros from "./Nosotros";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/registro" element={<Registro />} />
      <Route path="/requisitos" element={<Requisitos />} />
      <Route path="/nosotros" element={<Nosotros />} />
    </Routes>
  </Router>
);
