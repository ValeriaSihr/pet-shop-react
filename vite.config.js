import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import svgr from "vite-plugin-svgr";


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  build: {
    sourcemap: true,
  }
});
// This configuration file sets up a Vite project with React using SWC for faster builds.
