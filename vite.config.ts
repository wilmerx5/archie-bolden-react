/// <reference types="vitest"/>
/// <reference types="vite/client"/>


import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss()],
  test:{
    globals:true,
    environment:'jsdom',
    css:true
  }
})
