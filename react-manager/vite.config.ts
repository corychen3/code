/*
 * @Author: Finch
 * @Date: 2025-03-18 10:33:39
 * @LastEditTime: 2025-04-08 21:44:17
 * @LastEditors: Finch
 * @Description:
 * @FilePath: \code\react-manager\vite.config.ts
 * 可以输入预定的版权声明、个性签名、空行等
 */
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
			'/api': {
				target: 'http://127.0.0.1:4523',
				changeOrigin: true,
				rewrite: path => path.replace(/^\/api/, '/m1/6178686-5871089-default/api'),
			},
		},
	},
	//别名路径配置
	resolve: {
		alias: {
			'@': path.resolve(__dirname, 'src'), // 修改为相对路径
		},
	},
	plugins: [react()],
});
