

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    // importante para fallback para SPA
    historyApiFallback: true,
  },
});
