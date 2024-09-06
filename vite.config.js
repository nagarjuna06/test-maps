import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/maps": {
        target: "https://basemaps.cartocdn.com/rastertiles/voyager",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/maps/, ""),
      },
    },
  },
});
