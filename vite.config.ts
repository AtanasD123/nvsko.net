import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig(({ mode }) => ({
  // --- THIS is the base path for the PRODUCTION BUILD ---
  base: "/nvsko.net/", // <= Move the base option to the TOP LEVEL HERE

  server: {
    // Optional: You can remove this line entirely, or set it to '/'
    // if you want your local dev server accessible at localhost:8080/
    // base: "/nvsko.net/", // <= You can remove or change this line
    host: "::",
    port: 8080,
  },
  plugins: [
    react()
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));