import React from "react";
import { useNavigate } from "react-router-dom";
import "./VolverInicio";

const VolverInicio = ({ destino = "/" }) => {
  const navigate = useNavigate();

  const handleVolver = () => {
    navigate(destino);
  };

  return (
    <div className="volver-inicio">
      <button onClick={handleVolver} className="btn-volver">
        ⬅ Volver
      </button>
    </div>
  );
};

export default VolverInicio;
