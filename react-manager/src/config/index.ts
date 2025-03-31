/*
 * @Author: Finch
 * @Date: 2025-03-31 09:44:57
 * @LastEditTime: 2025-03-31 10:28:02
 * @LastEditors: Finch
 * @Description:
 * @FilePath: \code\react-manager\src\config\index.ts
 * 可以输入预定的版权声明、个性签名、空行等
 */
type ENV = 'production' | 'staging' | 'development';
const env: ENV = (document.documentElement.dataset.env as ENV) || 'development';
const config = {
	production: {
		baseApi: '/api',
		loadupApi: 'http://api-driver-dev.marsview.cc',
		mock: false,
		mockApi: 'http://127.0.0.1:4523/m1/5989184-5677599-default/users/login',
	},
	staging: {
		baseApi: '/api',
		loadupApi: 'http://api-driver-dev.marsview.cc',
		mock: false,
		mockApi: 'http://127.0.0.1:4523/m1/5989184-5677599-default/users/login',
	},
	development: {
		baseApi: '/api',
		loadupApi: 'http://api-driver-dev.marsview.cc',
		mock: true,
		mockApi: 'http://127.0.0.1:4523/m1/5989184-5677599-default/users/login',
	},
};
export default { ...config[env] };
