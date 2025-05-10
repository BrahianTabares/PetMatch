import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/PetMatch/", // muy importante para GitHub Pages
  plugins: [react()],
});
