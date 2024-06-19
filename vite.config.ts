import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    base: './',
    build: {
        outDir: 'A:/Alone/PROJECTS/GTA5/LAtruckers/server/resources/ServiceNotify/frontend',
        emptyOutDir: true,
        minify: 'esbuild',
        reportCompressedSize: false,
    },
});
