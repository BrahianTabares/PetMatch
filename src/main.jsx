/*import { React, Navigate } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./ContenedorCarrusel";
import Registro from "./Registro";
import Requisitos from "./Requisitos";
import Nosotros from "./Nosotros";
import Dashboard from "./dashboard";
import NewPet from "./NewPet";
import EditPet from "./EditPet";
import { jwtDecode } from "jwt-decode";
import Catalogo from "./Catalogo";
import MascotaDetalles from "./MascotaDetalles";
import Contacto from "./Contacto";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <Routes>
      <Route path="*" element={<App />} />
      <Route path="/registro" element={<Registro />} />
      <Route
        path="/dashboard"
        element={
          // Solo los administradores pueden acceder a /dashboard
          localStorage.getItem("token") ? (
            (() => {
              try {
                const token = localStorage.getItem("token");
                const decoded = jwtDecode(token); // Decodifica el token
                return decoded.role === "administrator" ? (
                  <Dashboard />
                ) : (
                  <Navigate to="/" />
                );
              } catch (err) {
                console.error("Token inválido:", err);
                return <Navigate to="/" />;
              }
            })()
          ) : (
            <Navigate to="/" />
          )
        }
      />
      <Route path="/pets/new" element={<NewPet />} />
      <Route path="/pets/:id/edit" element={<EditPet />} />
      <Route path="/requisitos" element={<Requisitos />} />
      <Route path="/nosotros" element={<Nosotros />} />
      <Route path="/catalogo" element={<Catalogo />} />
      <Route path="/mascota/:id" element={<MascotaDetalles />} />
      <Route path="/contacto" element={<Contacto />} />
    </Routes>
  </Router>
);*/
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

// Elimina o comenta esta línea si no usas reportWebVitals
// import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, HashRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
);
