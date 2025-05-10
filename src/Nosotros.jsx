import React from "react";
import "./Nosotros.css";
import VolverInicio from "./components/VolverInicio/VolverInicio";
const Nosotros = () => {
  return (
    <div className="nosotros-container">
      <h2>Sobre PetMatch</h2>
      <p>
        PetMatch es una plataforma dedicada a conectar mascotas con familias
        amorosas.
      </p>
      <p>
        🌟 Facilitamos el proceso de adopción con información detallada y guías
        para cuidadores responsables.
      </p>
      <p>
        🐶 Encuentra perros y gatos que buscan un hogar y dale la oportunidad de
        vivir una vida feliz.
      </p>
      <p>
        📅 También organizamos eventos de adopción y colaboramos con refugios
        locales.
      </p>
      <VolverInicio />
    </div>
  );
};

export default Nosotros;
