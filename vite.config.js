import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/elitefit-task-manager/',  
  plugins: [react()],
});
