import React, { useState, useEffect } from "react";
import "./Carrusel.css";

const datos = [
  {
    id: 1,
    titulo: "Mascota en adopción",
    imagen:
      "https://media.es.wired.com/photos/657cb5b81e17b099f8f9e15c/16:9/w_3008,h_1692,c_limit/gatos%20172050389.jpg",
    descripcion: "Conoce a Maximo, un gato amigable en busca de hogar.",
  },
  {
    id: 4,
    titulo: "Mascota en adopción",
    imagen: `https://nupec.com/wp-content/uploads/2021/02/Captura-de-pantalla-2021-02-08-a-las-13.59.48.png`,
    descripcion:
      "Conoce a Luna, una hermosa gatica amigable en busca de hogar.",
  },
  {
    id: 3,
    titulo: "Mascota en adopción",
    imagen:
      "https://upload.wikimedia.org/wikipedia/commons/8/8a/Golden_Retriever_9-year_old.jpg",
    descripcion: "Conoce a Rocky, un perro amigable en busca de hogar.",
  },
  {
    id: 2,
    titulo: "Requisitos de adopción",
    imagen: "/PetMatch/Imagenes/Requisitos.png",
    descripcion: "Infórmate sobre cómo puedes adoptar una mascota.",
  },
  {
    id: 5,
    titulo: "Casos exitosos",
    imagen:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKICzfxTalbB0qBB9vX6z0VQeeEyxhFEXLrA&s",
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
