import React from "react";
import "./Contacto.css";
import VolverInicio from "./components/VolverInicio/VolverInicio";
const Contacto = () => {
  return (
    <div className="contacto-container">
      <h2>Contáctanos</h2>
      <p>
        Si tienes preguntas o quieres adoptar una mascota, aquí están nuestras
        formas de contacto:
      </p>

      <div className="contacto-info">
        <p>
          <strong>📧 Email:</strong> contacto@petmatch.com
        </p>
        <p>
          <strong>📞 Teléfono:</strong> 300 123 4567
        </p>
        <p>
          <strong>📍 Dirección:</strong> Calle 123, Ciudad, Colombia
        </p>
      </div>

      <h3>Redes Sociales</h3>
      <p>
        📌{" "}
        <a href="https://facebook.com/PetMatch" target="_blank">
          Facebook
        </a>
      </p>
      <p>
        📌{" "}
        <a href="https://instagram.com/PetMatch" target="_blank">
          Instagram
        </a>
      </p>
      <p>
        📌{" "}
        <a href="https://twitter.com/PetMatch" target="_blank">
          Twitter
        </a>
      </p>

      <VolverInicio />
    </div>
  );
};

export default Contacto;
