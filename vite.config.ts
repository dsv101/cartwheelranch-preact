import { defineConfig } from 'vite';
import preact from '@preact/preset-vite';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [preact()],
	resolve: {
		alias: {
		  src: "/src",
		  "@assets": "/src/assets",
		  "@components": "/src/components",
		  "@pages": "/src/pages",
		},
	  },
});
