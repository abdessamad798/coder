import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { marked } from 'marked';
import fs from 'fs';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: 'markdown',
      transform(code, id) {
        if (id.endsWith('.md')) {
          const content = fs.readFileSync(id, 'utf-8');
          const html = marked(content);
          return `export default ${JSON.stringify(html)}`;
        }
      },
    },
  ],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});