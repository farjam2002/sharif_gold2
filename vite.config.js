// File: vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// FINAL VERSION – includes internal proxy to Node Secure Server
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    proxy: {
      "/api": {
        target: "http://localhost:8080",
        changeOrigin: true,
      },
    },
  },
});
