import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default ({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

  return defineConfig({
    plugins: [react()],
    define: {
      "process.env": process.env,
    },
    server: {
      proxy: {
        // with options
        "/place-api": {
          target: "https://maps.googleapis.com/maps/api",
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/place-api/, ""),
        },
      },
    },
  });
};
