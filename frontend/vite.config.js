import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { viteStaticCopy } from 'vite-plugin-static-copy';
 
export default defineConfig({
  base: '/jeux-videops/',
  plugins: [
    react(),
    viteStaticCopy({
      targets: [{ src: '../games', dest: '.' }],
    }),
  ],
});