import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  // muy importante para GitHub Pages
  plugins: [react()],
  base: "https://brahiantabares.github.io/PetMatch",
});
