import React, { useState } from "react";
import "./Registro.css";

const Registro = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "adopter", // valor predeterminado
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Las contraseñas no coinciden");
      return;
    }

    const { name, email, password, role } = formData;

    try {
      const response = await fetch("http://localhost:3001/api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password, role }),
      });

      const data = await response.json();

      if (response.ok) {
        alert("Registro exitoso. Ahora puedes iniciar sesión.");
        // Redirigir o limpiar formulario si lo deseas
      } else {
        alert(`Error: ${data.message || "No se pudo registrar"}`);
      }
    } catch (error) {
      console.error("Error al registrar:", error);
      alert("Error de conexión con el servidor");
    }
  };

  return (
    <div className="registro-container">
      <h2>Registro de Usuario</h2>
      <form onSubmit={handleSubmit} className="registro-form">
        <label>Nombre completo:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label>Correo electrónico:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label>Contraseña:</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />

        <label>Confirmar contraseña:</label>
        <input
          type="password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
        />

        <label>Tipo de usuario:</label>
        <select name="role" value={formData.role} onChange={handleChange}>
          <option value="adopter">Adoptante</option>
          <option value="administrator">Administrador</option>
        </select>

        <button type="submit">Registrarse</button>
      </form>
    </div>
  );
};

export default Registro;
