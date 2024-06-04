import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"), 
        },
    },
    server: {
        proxy: {
            "/api": {
                target: "http://localhost:8000",
                // target: "https://server.filierestechniques.com", // Remplacez ceci par l'URL de votre backend Laravel
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/api/, "/api"),
            },
        },
    },

    base: "vite/deploy"
});