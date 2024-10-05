import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  // build: {
  //   ssr: "./server.js",
  //   outDir: "dist-ssr",
  // },
  // server: {
  //   port: 5173,
  //   proxy: {
  //     "/api": {
  //       target: "http://localhost:3000",
  //       changeOrigin: true,
  //     },
  //   },
  // },
  optimizeDeps: {
    include: ["react", "react-dom", "axios", "express", "dotenv"],
  },
});
