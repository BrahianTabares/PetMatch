import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./NewPet.css";
import Navbar from "./Navbar";
import { API_URL } from "./api/config";
const NewPet = () => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    species: "",
    breed: "",
    description: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem("token"); // 🔐 obtenemos el token del localStorage

    try {
      const response = await fetch(`${API_URL}/api/pets`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`, // ✅ enviamos el token al backend
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Mascota registrada con éxito");
        navigate("/dashboard");
      } else {
        const error = await response.json();
        alert("Error: " + (error.message || "No autorizado"));
      }
    } catch (error) {
      console.error("Error al registrar mascota:", error);
      alert("Ocurrió un error al registrar la mascota");
    }
  };

  return (
    <div>
      <Navbar />
      <div className="new-pet-container">
        <h2>Registrar Nueva Mascota</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Nombre:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Edad:
            <input
              type="number"
              name="age"
              value={formData.age}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Especie:
            <input
              type="text"
              name="species"
              value={formData.species}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Raza:
            <input
              type="text"
              name="breed"
              value={formData.breed}
              onChange={handleChange}
            />
          </label>
          <label>
            Descripción:
            <input
              type="text"
              name="description"
              value={formData.description}
              onChange={handleChange}
            />
          </label>
          <button type="submit">Registrar</button>
        </form>
      </div>
    </div>
  );
};

export default NewPet;
