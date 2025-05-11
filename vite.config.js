import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "https://brahiantabares.github.io/PetMatch", // muy importante para GitHub Pages
  plugins: [react()],
});
