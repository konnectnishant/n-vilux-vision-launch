// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'
// import path from 'path'
//
// export default defineConfig({
//   // base: '/n-vilux-vision-launch/',
//   base: '/',
//   plugins: [react()],
//   resolve: {
//     alias: {
//       '@': path.resolve(__dirname, './src'),
//     },
//   },
// })

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  base: '/', // ✅ Required for custom domain at root (viluxventures.com)
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});