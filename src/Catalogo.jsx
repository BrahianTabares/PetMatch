import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Catalogo.css";
import Navbar from "./Navbar";
import VolverInicio from "./components/VolverInicio/VolverInicio";
const imagenesPerros = [
  "https://cdn.sanity.io/images/5vm5yn1d/pro/5cb1f9400891d9da5a4926d7814bd1b89127ecba-1300x867.jpg?fm=webp&q=80",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKICzfxTalbB0qBB9vX6z0VQeeEyxhFEXLrA&s",
];

const imagenesGatos = [
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7Rsfl6dIGPbojoNrUPdja0WjgGk8ESACRZg&s",
  "https://images.unsplash.com/photo-1592194996308-7b43878e84a6?auto=format&fit=crop&w=400&q=80",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8t5Qv9hoArKjwgA25zZgoNoKuhbVU2zc6-A&s",
];

// Contadores para alternar imágenes
let contadorPerro = 0;
let contadorGato = 0;

const getImagenPorTipo = (species) => {
  const especie = species.toLowerCase();
  if (especie.includes("perro") || especie.includes("dog")) {
    const imagen = imagenesPerros[contadorPerro % imagenesPerros.length];
    contadorPerro++;
    return imagen;
  } else if (especie.includes("gato") || especie.includes("cat")) {
    const imagen = imagenesGatos[contadorGato % imagenesGatos.length];
    contadorGato++;
    return imagen;
  } else {
    return "https://via.placeholder.com/200x150?text=Mascota";
  }
};

const Catalogo = () => {
  const [mascotas, setMascotas] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/api/pets")
      .then((res) => res.json())
      .then((data) => setMascotas(data))
      .catch((err) => {
        console.error("Error al obtener las mascotas:", err);
      });
  }, []);

  // Reiniciar contadores al renderizar nuevo catálogo
  contadorPerro = 0;
  contadorGato = 0;

  return (
    <div className="catalogo-container">
      <h2>Mascotas Disponibles para Adopción</h2>
      <div className="mascotas-grid">
        {mascotas.map((mascota) => (
          <div key={mascota.id} className="mascota-card">
            <img src={getImagenPorTipo(mascota.species)} alt={mascota.name} />
            <h3>{mascota.name}</h3>
            <p>
              {mascota.species} - {mascota.breed}
            </p>
            <Link to={`/mascota/${mascota.id}`}>Ver más</Link>
          </div>
        ))}
      </div>
      <VolverInicio />
    </div>
  );
};

export default Catalogo;
