import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Navbar.css";
import { jwtDecode } from "jwt-decode";

const Navbar = () => {
  const [submenuAdoptar, setSubmenuAdoptar] = useState(false);
  const [submenuCuenta, setSubmenuCuenta] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState(null); // Estado para el rol

  const navigate = useNavigate();

  // Verificar token y extraer rol al cargar el componente
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
      try {
        const decoded = jwtDecode(token);
        setUserRole(decoded.role || "adopter"); // Ajusta según cómo tu backend define el rol
      } catch (err) {
        console.error("Error al decodificar el token:", err);
      }
    }
  }, []);

  // Efecto para redirigir después de iniciar sesión
  /*useEffect(() => {
    if (isLoggedIn && userRole === "administrator") {
      navigate("/dashboard"); // Redirige a /dashboard para administradores
    } else if (isLoggedIn && userRole !== "administrator") {
      navigate("/"); // Cambiar de "/" a "/inicio" si esta es la vista principal
    }
  }, [isLoggedIn, userRole, navigate]);*/

  // Manejo del inicio de sesión
  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3001/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem("token", data.token);
        setIsLoggedIn(true);
        setSubmenuCuenta(false);
        setEmail("");
        setPassword("");
        setUserRole(data.role); // Asegúrate de actualizar el rol también
      } else {
        alert("Error: " + (data.message || "Credenciales incorrectas"));
      }
    } catch (error) {
      console.error("Error de login:", error);
      alert("Ocurrió un error al iniciar sesión");
    }
  };

  // Manejo de cierre de sesión
  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    setUserRole(null);
    navigate("/"); // Redirigir al inicio
  };

  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li>
          <Link to="/">Inicio</Link>
        </li>
        <li>
          <Link to="/nosotros" target="_blank" rel="noopener noreferrer">
            Nosotros
          </Link>
        </li>

        {/* Mostrar solo si el rol es "administrator" */}
        {userRole === "administrator" && (
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
        )}

        {/* Menú de "Adoptar" siempre visible */}
        <li
          className="submenu-container"
          onMouseEnter={() => setSubmenuAdoptar(true)}
          onMouseLeave={() => setSubmenuAdoptar(false)}
        >
          <Link to="#adoptar">Adoptar</Link>
          {submenuAdoptar && (
            <ul className="submenu">
              <li>
                <Link
                  to="/requisitos"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Requisitos de Adopción
                </Link>
              </li>
              <li>
                <Link
                  to="/catalogo" /*target="_blank" rel="noopener noreferrer"*/
                >
                  Conócelos Aquí
                </Link>
              </li>
              <li>
                <Link to="/Casos">Casos Exitosos</Link>
              </li>
            </ul>
          )}
        </li>

        <li>
          <Link to="/Contacto" target="_blank" rel="noopener noreferrer">
            Contactanos
          </Link>
        </li>

        {/* Menú de cuenta, muestra el login o el estado de sesión */}
        <li
          className="submenu-container"
          onMouseEnter={() => setSubmenuCuenta(true)}
          onMouseLeave={() => setSubmenuCuenta(false)}
        >
          <Link to="#cuenta">Cuenta</Link>
          {submenuCuenta && (
            <div className="submenu cuenta-submenu">
              {isLoggedIn ? (
                <div className="mensaje-login">
                  <p>✅ Sesión iniciada</p>
                  <button onClick={handleLogout}>Cerrar sesión</button>
                </div>
              ) : (
                <>
                  <form className="login-form" onSubmit={handleLogin}>
                    <label>Correo:</label>
                    <input
                      type="email"
                      placeholder="Ingresa tu correo"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                    <label>Contraseña:</label>
                    <input
                      type="password"
                      placeholder="••••••"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                    <button type="submit">Iniciar Sesión</button>
                  </form>
                  <Link
                    to="/registro"
                    className="registro-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Registrarse
                  </Link>
                </>
              )}
            </div>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
