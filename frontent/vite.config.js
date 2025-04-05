// import { fileURLToPath } from "url";
import { dirname, resolve } from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// __dirname ko ESM me resolve karna
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);

export default defineConfig({
  server: {
    proxy: {
      "/api/" : {
        target: "http://localhost:7000" ,
        secure: false, 
      }
    }
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"), // ✅ path.resolve ko replace kiya
    },
  },
});
