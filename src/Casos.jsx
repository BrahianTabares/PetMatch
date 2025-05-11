import React from "react";
import "./Casos.css";
import VolverInicio from "./components/VolverInicio/VolverInicio";
const Casos = () => {
  return (
    <div className="casos-exitosos">
      <h1>Casos Exitosos</h1>
      <p>Conoce las historias de mascotas que encontraron un hogar.</p>
      <div className="galeria">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKICzfxTalbB0qBB9vX6z0VQeeEyxhFEXLrA&s"
          alt="Maximo adoptado"
        />
        <img
          src="https://nupec.com/wp-content/uploads/2021/02/Captura-de-pantalla-2021-02-08-a-las-13.59.48.png"
          alt="Luna adoptada"
        />
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/8/8a/Golden_Retriever_9-year_old.jpg"
          alt="Rocky adoptado"
        />
      </div>
      <div>
        <VolverInicio />
      </div>
    </div>
  );
};

export default Casos;
