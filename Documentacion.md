# 🐾 Frontend - Aplicación de Gestión de Mascotas

Este repositorio contiene la interfaz de usuario desarrollada en React para la aplicación de gestión de mascotas. Permite a los usuarios ver el catálogo de mascotas, consultar sus detalles y, si son administradores, realizar tareas como agregar, editar o eliminar registros de mascotas.

## 🚀 Tecnologías utilizadas

- React.js
- React Router DOM
- Fetch API
- CSS Modules
- Vite

## 📂 Estructura del Proyecto

src/
├── App.jsx
├── main.jsx
├── components/
│ └── VolverInicio/
│ └── VolverInicio.jsx
├── editpet.jsx
├── main.jsx
├── mascotaDetalle.jsx
├── navbar.jsx
├── newpet.jsx
├── nosotros.jsx
├── registro.jsx
├── requisitos.jsx
├── carrusel.jsx
├── catalogo.jsx
├── dashboard.jsx
├── contacto.jsx
├── contenedorCarrusel.jsx
└── assets/

## 📦 Instalación y ejecución

1. Clona este repositorio:

```bash
git clone git@github.com:BrahianTabares/PetMatch.git
```

# Entra a la carpeta:

cd PetMatch

# Instala las dependencias:

npm install

# Inicia la aplicación:

npm run dev

💡 Asegúrate de que el backend esté corriendo en http://localhost:3001 para que las peticiones funcionen correctamente.

# 🔄 Navegación entre vistas

- Página de inicio → Carrusel con bienvenida y opciones.

- Catálogo → Lista de mascotas disponibles.

- Mascota Detalles → Vista individual con opción de “Volver al Catálogo”.

- El botón “VolverInicio” navega hacia el catálogo o al inicio según la vista.

# 🧪 Sugerencias de mejora

- Agregar validación de formularios.
- Manejar rutas privadas para usuarios administradores: aunque distingue entre un usuario y un admin es importante mejorar esta parte ya que se debe recargar la pagina cuando se inicia sesión

- Usar context API para gestión de autenticación.

# 🔗 Repositorio relacionado

Este frontend se conecta con el backend de la aplicación. Repositorio del backend 👉 https://github.com/kenviela/PetMatch_api
