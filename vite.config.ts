import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
const Dotenv = require("dotenv-webpack");
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), new Dotenv()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
