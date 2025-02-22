import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/elitefit-task-manager/',  // Add this line for GitHub Pages
  plugins: [react()],
});
