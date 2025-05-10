import React from "react";
import Navbar from "./Navbar";
import Carrusel from "./Carrusel";

// AuthRedirect.jsx
/*import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

const AuthRedirect = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      try {
        const decoded = jwtDecode(token);

        if (decoded.role === "administrator") {
          navigate("/dashboard", { replace: true });
        } else if (decoded.role === "adopter") {
          navigate("/", { replace: true });
        }
      } catch (err) {
        console.error("Token inválido", err);
      }
    } else {
      navigate("/", { replace: true });
    }
  }, [navigate]);

  return null;
};*/

const App = () => {
  return (
    <>
      <Navbar />
      <div className="main-content">
        {"Carrusel"}
        <Carrusel />
      </div>
    </>
  );
};

export default App;
