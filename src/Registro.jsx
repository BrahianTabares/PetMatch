import React, { useState } from "react";
import "./Registro.css"; // Importa el archivo CSS

const Registro = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    correo: "",
    contraseña: "",
    confirmarContraseña: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Datos enviados:", formData);
  };

  return (
    <div className="registro-container">
      <h2>Registro de Usuario</h2>
      <form onSubmit={handleSubmit} className="registro-form">
        <label>Nombre:</label>
        <input
          type="text"
          name="nombre"
          value={formData.nombre}
          onChange={handleChange}
          required
        />

        <label>Correo electrónico:</label>
        <input
          type="email"
          name="correo"
          value={formData.correo}
          onChange={handleChange}
          required
        />

        <label>Contraseña:</label>
        <input
          type="password"
          name="contraseña"
          value={formData.contraseña}
          onChange={handleChange}
          required
        />

        <label>Confirmar contraseña:</label>
        <input
          type="password"
          name="confirmarContraseña"
          value={formData.confirmarContraseña}
          onChange={handleChange}
          required
        />

        <button type="submit">Registrarse</button>
      </form>
    </div>
  );
};

export default Registro;
