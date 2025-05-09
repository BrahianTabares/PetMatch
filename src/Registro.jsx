import React, { useState } from "react";
import "./Registro.css";

const Registro = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    correo: "",
    contraseña: "",
    confirmarContraseña: "",
    rol: "adoptante",
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

        {/* Campo de selección para el rol */}
        <label>Tipo de usuario:</label>
        <select
          name="rol"
          value={formData.rol}
          onChange={handleChange}
          required
        >
          <option value="adoptante">Adoptante</option>
          <option value="admin">Administrador</option>
        </select>

        <button type="submit">Registrarse</button>
      </form>
    </div>
  );
};

export default Registro;
