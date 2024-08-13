import { defineConfig } from 'vite';
import { viteStaticCopy } from 'vite-plugin-static-copy';
import preact from '@preact/preset-vite';

const shoelaceAssetsPath = 'node_modules/@shoelace-style/shoelace/dist/assets'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		viteStaticCopy({
      targets: [
        {
          src: shoelaceAssetsPath,
          dest: 'shoelace',
        },
      ],
    }),
		preact(),
	],
	resolve: {
		alias: [
			{
				find: 'src',
				replacement: '/src',
			},
			{
				find: '@assets',
				replacement: '/src/assets',
			},
			{
				find: '@components',
				replacement: '/src/components',
			},
			{
				find: '@pages',
				replacement: '/src/pages',
			},
			{
				find: /\/assets\/icons\/(.+)/,
				replacement: `${shoelaceAssetsPath}/icons/$1`,
			}
		]
	},
});
