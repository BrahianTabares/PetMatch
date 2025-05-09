import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [submenuAdoptar, setSubmenuAdoptar] = useState(false);
  const [submenuCuenta, setSubmenuCuenta] = useState(false);

  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li>
          <a href="/nosotros" target="_blank" rel="noopener noreferrer">
            Nosotros
          </a>
        </li>

        {/* Opción Adoptar con Submenú */}
        <li
          className="submenu-container"
          onMouseEnter={() => setSubmenuAdoptar(true)}
          onMouseLeave={() => setSubmenuAdoptar(false)}
        >
          <a href="#adoptar">Adoptar</a>
          {submenuAdoptar && (
            <ul className="submenu">
              <li>
                <a href="/requisitos" target="_blank" rel="noopener noreferrer">
                  Requisitos de Adopción
                </a>
              </li>

              <li>
                <a href="#conocelos">Conócelos Aquí</a>
              </li>
              <li>
                <a href="#casos">Casos Exitosos</a>
              </li>
            </ul>
          )}
        </li>

        <li>
          <a href="#contactanos">Contáctanos</a>
        </li>

        {/* Opción Cuenta con Submenú */}
        <li
          className="submenu-container"
          onMouseEnter={() => setSubmenuCuenta(true)}
          onMouseLeave={() => setSubmenuCuenta(false)}
        >
          <a href="#cuenta">Cuenta</a>
          {submenuCuenta && (
            <div className="submenu cuenta-submenu">
              <form className="login-form">
                <label>Correo:</label>
                <input type="email" placeholder="Ingresa tu correo" />
                <label>Contraseña:</label>
                <input type="password" placeholder="••••••" />
                <button type="submit">Iniciar Sesión</button>
              </form>
              <a
                href="/registro"
                className="registro-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Registrarse
              </a>
            </div>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
