import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    proxy: {
      "/api/bookdemo": {
        target: "https://sklassics-ai.com",
        changeOrigin: true,
        secure: true, // Set to false only if using self-signed SSL
      },
      "/api/bookdemo/verify": {
        target: "https://sklassics-ai.com",
        changeOrigin: true,
        secure: true,
      },
    },
  },
  plugins: [
    react(),
    mode === "development" && componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
