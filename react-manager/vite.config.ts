import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// 确保安装了 @types/estree 类型定义文件以避免类型错误
// npm install @types/estree --save-dev

// 确保安装了 @types/json-schema 类型定义文件以避免类型错误
// npm install @types/json-schema --save-dev




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
