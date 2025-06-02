// vite.config.ts
import { defineConfig } from "file:///home/project/node_modules/vite/dist/node/index.js";
import react from "file:///home/project/node_modules/@vitejs/plugin-react/dist/index.mjs";
import { marked } from "file:///home/project/node_modules/marked/lib/marked.esm.js";
import fs from "fs";
var vite_config_default = defineConfig({
  plugins: [
    react(),
    {
      name: "markdown",
      transform(code, id) {
        if (id.endsWith(".md")) {
          const content = fs.readFileSync(id, "utf-8");
          const html = marked(content);
          return `export default ${JSON.stringify(html)}`;
        }
      }
    }
  ],
  optimizeDeps: {
    exclude: ["lucide-react"]
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvaG9tZS9wcm9qZWN0XCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvaG9tZS9wcm9qZWN0L3ZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9ob21lL3Byb2plY3Qvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJztcbmltcG9ydCByZWFjdCBmcm9tICdAdml0ZWpzL3BsdWdpbi1yZWFjdCc7XG5pbXBvcnQgeyBtYXJrZWQgfSBmcm9tICdtYXJrZWQnO1xuaW1wb3J0IGZzIGZyb20gJ2ZzJztcblxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIHBsdWdpbnM6IFtcbiAgICByZWFjdCgpLFxuICAgIHtcbiAgICAgIG5hbWU6ICdtYXJrZG93bicsXG4gICAgICB0cmFuc2Zvcm0oY29kZSwgaWQpIHtcbiAgICAgICAgaWYgKGlkLmVuZHNXaXRoKCcubWQnKSkge1xuICAgICAgICAgIGNvbnN0IGNvbnRlbnQgPSBmcy5yZWFkRmlsZVN5bmMoaWQsICd1dGYtOCcpO1xuICAgICAgICAgIGNvbnN0IGh0bWwgPSBtYXJrZWQoY29udGVudCk7XG4gICAgICAgICAgcmV0dXJuIGBleHBvcnQgZGVmYXVsdCAke0pTT04uc3RyaW5naWZ5KGh0bWwpfWA7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgfSxcbiAgXSxcbiAgb3B0aW1pemVEZXBzOiB7XG4gICAgZXhjbHVkZTogWydsdWNpZGUtcmVhY3QnXSxcbiAgfSxcbn0pOyJdLAogICJtYXBwaW5ncyI6ICI7QUFBeU4sU0FBUyxvQkFBb0I7QUFDdFAsT0FBTyxXQUFXO0FBQ2xCLFNBQVMsY0FBYztBQUN2QixPQUFPLFFBQVE7QUFHZixJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTO0FBQUEsSUFDUCxNQUFNO0FBQUEsSUFDTjtBQUFBLE1BQ0UsTUFBTTtBQUFBLE1BQ04sVUFBVSxNQUFNLElBQUk7QUFDbEIsWUFBSSxHQUFHLFNBQVMsS0FBSyxHQUFHO0FBQ3RCLGdCQUFNLFVBQVUsR0FBRyxhQUFhLElBQUksT0FBTztBQUMzQyxnQkFBTSxPQUFPLE9BQU8sT0FBTztBQUMzQixpQkFBTyxrQkFBa0IsS0FBSyxVQUFVLElBQUksQ0FBQztBQUFBLFFBQy9DO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQUEsRUFDQSxjQUFjO0FBQUEsSUFDWixTQUFTLENBQUMsY0FBYztBQUFBLEVBQzFCO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
