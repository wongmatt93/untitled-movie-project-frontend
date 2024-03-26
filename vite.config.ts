import legacy from "@vitejs/plugin-legacy";
import react from "@vitejs/plugin-react";
import compressionPlugin from "vite-plugin-compression";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), legacy(), compressionPlugin()],
});

export const testConfig = {
  globals: true,
  environment: "jsdom",
  setupFiles: "./src/setupTests.ts",
};
