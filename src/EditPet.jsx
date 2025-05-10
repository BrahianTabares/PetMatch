import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./EditPet.css"; // Agregamos el archivo CSS
import Navbar from "./Navbar"; // Asegúrate de importar el componente Navbar
const EditPet = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [species, setSpecies] = useState("");
  const [age, setAge] = useState(""); // Nuevo estado para la edad
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Cargar datos de la mascota al cargar el componente
  useEffect(() => {
    const fetchPetData = async () => {
      try {
        const response = await fetch(`http://localhost:3001/api/pets/${id}`);
        if (!response.ok) {
          throw new Error("No se pudo obtener los datos de la mascota");
        }
        const data = await response.json();
        setName(data.name || "");
        setSpecies(data.species || "");
        setAge(data.age || ""); // Asignar la edad al estado
        setDescription(data.description || "");
      } catch (err) {
        setError("Error al cargar la mascota");
      } finally {
        setLoading(false);
      }
    };
    fetchPetData();
  }, [id]);

  // Manejar la actualización de la mascota
  const handleUpdate = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem("token");
    if (!token) {
      alert("No estás autenticado. Por favor, inicia sesión.");
      return;
    }

    const updatedData = { name, species, age, description }; // Agregar la edad al objeto

    try {
      const response = await fetch(`http://localhost:3001/api/pets/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`, // Incluir el token JWT
        },
        body: JSON.stringify(updatedData),
      });

      if (response.ok) {
        alert("Mascota actualizada con éxito");
        navigate("/dashboard");
      } else {
        const errorData = await response.json();
        setError(errorData.message || "Error al actualizar la mascota");
      }
    } catch (err) {
      setError("Error al conectar con el servidor");
    }
  };

  if (loading) return <p>Cargando datos...</p>;

  return (
    <div>
      <Navbar />
      <div className="edit-pet-container">
        <h2>Editar Mascota</h2>
        {error && <p className="error-message">{error}</p>}
        <form onSubmit={handleUpdate} className="edit-pet-form">
          <label>Nombre:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <br />

          <label>Especie:</label>
          <input
            type="text"
            value={species}
            onChange={(e) => setSpecies(e.target.value)}
            required
          />
          <br />

          <label>Edad:</label>
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            required
          />
          <br />

          <label>descripción:</label>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
          <br />
          <button type="submit">Actualizar</button>
        </form>
      </div>
    </div>
  );
};

export default EditPet;
