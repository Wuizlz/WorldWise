// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import eslint from "vite-plugin-eslint";

export default defineConfig({
  base: "/WorldWise/",          // or "./" for relative paths
  plugins: [react(), eslint()],
});
