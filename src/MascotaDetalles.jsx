import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./MascotaDetalles.css";
import VolverInicio from "./components/VolverInicio/VolverInicio";
const MascotaDetalles = () => {
  const { id } = useParams();
  const [mascota, setMascota] = useState(null);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const obtenerMascota = async () => {
      try {
        const respuesta = await fetch(`http://localhost:3001/api/pets/${id}`); // Ajusta el puerto según tu backend
        if (!respuesta.ok) {
          throw new Error("Mascota no encontrada");
        }
        const datos = await respuesta.json();
        setMascota(datos);
      } catch (err) {
        setError(err.message);
      } finally {
        setCargando(false);
      }
    };

    obtenerMascota();
  }, [id]);

  if (cargando) {
    return <h2 style={{ textAlign: "center" }}>Cargando...</h2>;
  }

  if (error) {
    return <h2 style={{ textAlign: "center", color: "red" }}>❌ {error}</h2>;
  }

  return (
    <div className="mascota-detalles-container">
      <h2>{mascota.name}</h2>
      <p>
        <strong>Edad:</strong> {mascota.age}
      </p>
      <p>
        <strong>Especie:</strong> {mascota.species}
      </p>
      <p>
        <strong>Raza:</strong> {mascota.breed}
      </p>
      <p>
        <strong>Descripción:</strong> {mascota.description}
      </p>
      <div>
        <VolverInicio destino="/catalogo" />
      </div>
    </div>
  );
};

export default MascotaDetalles;
