// src/pages/admin/Dashboard.jsx
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Dashboard.css"; // Importa el CSS aquí
import Navbar from "./Navbar";
const Dashboard = () => {
  const [pets, setPets] = useState([]);
  console.log("pets", pets);
  useEffect(() => {
    fetch("http://localhost:3001/api/pets")
      .then((res) => res.json())
      .then((data) => setPets(data))
      .catch((error) => console.error("Error al cargar mascotas:", error));
  }, []);

  return (
    <div className="dashboard-container">
      <Navbar />
      <h1>Panel de Administración</h1>
      <Link to="/pets/new">
        <button>Registrar nueva mascota</button>
      </Link>

      <h2>Lista de mascotas</h2>
      <ul className="pets-list">
        {pets.map((pet) => (
          <li key={pet.id}>
            {pet.name} - {pet.species}
            <Link to={`/pets/${pet.id}/edit`}>
              <button>Editar</button>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
