import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import react from "@vitejs/plugin-react";

export default defineConfig(({ command }) => {
  const config = {
    plugins: [react(), tsconfigPaths()],
    base: "/",
  };

  if (command !== "serve") {
    config.base = "/portfolio/";
  }

  return config;
});
