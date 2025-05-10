import React from "react";
import { Link } from "react-router-dom";
import "./Catalogo.css";

const mascotas = [
  { id: 1, nombre: "Max", imagen: "/public/Imagenes/Perro.jpeg" },
  { id: 2, nombre: "Luna", imagen: "/public/Imagenes/Luna.jpg" },
  { id: 3, nombre: "Rocky", imagen: "/public/Imagenes/Rocky.jpg" },
];

const Catalogo = () => {
  return (
    <div className="catalogo-container">
      <h2>Mascotas Disponibles para Adopción</h2>
      <div className="mascotas-grid">
        {mascotas.map((mascota) => (
          <div key={mascota.id} className="mascota-card">
            <img src={mascota.imagen} alt={mascota.nombre} />
            <h3>{mascota.nombre}</h3>
            <Link to={`/mascota/${mascota.id}`}>Ver más</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Catalogo;
