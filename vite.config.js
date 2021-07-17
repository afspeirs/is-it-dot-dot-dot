import path from 'path';
import { defineConfig } from 'vite';
import loadVersion from 'vite-plugin-package-version';
import reactJsx from 'vite-react-jsx';
import reactRefresh from '@vitejs/plugin-react-refresh';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		loadVersion(),
		reactJsx(),
		reactRefresh(),
	],
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src'),
		},
	},
});
