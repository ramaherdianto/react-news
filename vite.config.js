import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://ramaherdianto.github.io/react-news",
  plugins: [react()],
});
