import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import Registro from "./Registro";
import Requisitos from "./Requisitos";
import Nosotros from "./Nosotros";
import Catalogo from "./Catalogo";
import MascotaDetalles from "./MascotaDetalles";
import Contacto from "./Contacto";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/registro" element={<Registro />} />
      <Route path="/requisitos" element={<Requisitos />} />
      <Route path="/nosotros" element={<Nosotros />} />
      <Route path="/catalogo" element={<Catalogo />} />
      <Route path="/mascota/:id" element={<MascotaDetalles />} />
      <Route path="/contacto" element={<Contacto />} />
    </Routes>
  </Router>
);
