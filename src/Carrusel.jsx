import React, { useState, useEffect } from "react";
import "./Carrusel.css";

const datos = [
  {
    id: 1,
    titulo: "Mascota en adopción",
    imagen: "/public/Imagenes/Perro.jpeg",
    descripcion: "Conoce a Max, un perro amigable en busca de hogar.",
  },
  {
    id: 2,
    titulo: "Requisitos de adopción",
    imagen: "/public/Imagenes/Requisitos.png",
    descripcion: "Infórmate sobre cómo puedes adoptar una mascota.",
  },
  {
    id: 3,
    titulo: "Casos exitosos",
    imagen: "https://via.placeholder.com/200",
    descripcion: "Mira historias felices de adopciones recientes.",
  },
];

const Carrusel = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % datos.length);
    }, 5000); // Cambia cada 5 segundos

    return () => clearInterval(intervalo);
  }, []);

  return (
    <div className="carrusel">
      <h2>{datos[index].titulo}</h2>
      <img src={datos[index].imagen} alt="Imagen del carrusel" />
      <p>{datos[index].descripcion}</p>
    </div>
  );
};

export default Carrusel;
