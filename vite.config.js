import { defineConfig } from 'vite';
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const clientDir = fileURLToPath(new URL('./client', import.meta.url));

export default defineConfig({
  root: 'client',                                   
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        home: resolve(clientDir, 'index.html'),
        assistant: resolve(clientDir, 'assistente.html'),
        roadmap: resolve(clientDir, 'roadmap.html'),
      },
    },
  },
  server: { port: 5173, open: true }
});
