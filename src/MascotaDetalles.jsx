import React from "react";
import { useParams } from "react-router-dom";
import "./MascotaDetalles.css";

const detallesMascotas = {
  1: {
    nombre: "Max",
    edad: "3 años",
    descripcion: "Un perro amistoso y juguetón.",
  },
  2: {
    nombre: "Luna",
    edad: "2 años",
    descripcion: "Gata cariñosa que ama dormir al sol.",
  },
  3: {
    nombre: "Rocky",
    edad: "4 años",
    descripcion: "Perro protector y muy leal.",
  },
};

const MascotaDetalles = () => {
  const { id } = useParams();
  const mascota = detallesMascotas[id];

  if (!mascota) {
    return (
      <h2 style={{ textAlign: "center", color: "red" }}>
        ❌ Mascota no encontrada
      </h2>
    );
  }

  return (
    <div className="mascota-detalles-container">
      <h2>{mascota.nombre}</h2>
      <p>
        <strong>Edad:</strong> {mascota.edad}
      </p>
      <p>
        <strong>Descripción:</strong> {mascota.descripcion}
      </p>
    </div>
  );
};

export default MascotaDetalles;
