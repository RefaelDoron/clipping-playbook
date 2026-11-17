import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/clipping-playbook/",
  build: {
    outDir: "docs",
    emptyOutDir: true,
    assetsDir: "assets",
  },
  preview: {
    port: 4173,
    host: "0.0.0.0",
  },
});
