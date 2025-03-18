import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
export default defineConfig({
	//服务器配置
	server: {
		host: '127.0.0.1',
		port: 8080,
		proxy: {
			'/api': 'http://api-driver.marsview.cc',
		},
	},
	//别名路径配置
	resolve: {
		alias: {
			'@': path.resolve(__dirname, '/src'),
		},
	},
	plugins: [react()],
});
