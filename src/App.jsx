import { React, Navigate } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ContenedorCarrusel from "./ContenedorCarrusel";
import Registro from "./Registro";
import Requisitos from "./Requisitos";
import Nosotros from "./Nosotros";
import Dashboard from "./Dashboard";
import NewPet from "./NewPet";
import EditPet from "./EditPet";
import { jwtDecode } from "jwt-decode";
import Catalogo from "./Catalogo";
import MascotaDetalles from "./MascotaDetalles";
import Contacto from "./Contacto";
import Navbar from "./Navbar";
import Casos from "./Casos";
function App() {
  return (
    <div>
      <Routes>
        <Route path="*" element={<ContenedorCarrusel />} />
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
        <Route path="/casos" element={<Casos />} />
        <Route path="/mascota/:id" element={<MascotaDetalles />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
    </div>
  );
}

export default App;
