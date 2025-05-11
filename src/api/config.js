const dev = process.env.NODE_ENV === "development"; // Verifica si estás en desarrollo

export const API_URL = dev
  ? "http://localhost:3001" // URL para el entorno local
  : "https://tubackend.onrender.com"; // URL para el entorno de producción (en Render o el servicio que uses)
