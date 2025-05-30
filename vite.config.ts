import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    base: './',
    build: {
        outDir: 'E:/server/resources/service-notify/frontend',
        emptyOutDir: true,
        minify: 'esbuild',
        reportCompressedSize: false,
    },
});
