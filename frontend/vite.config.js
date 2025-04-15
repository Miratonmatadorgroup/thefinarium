import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [tailwindcss(), react()],
  preview: {
    host: true,
    port: 3000,
    allowedHosts: ["thefinarium.com", "www.thefinarium.com"],
    historyApiFallback: true,
  },
});
