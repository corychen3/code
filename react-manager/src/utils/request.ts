/*
 * @Author: Finch
 * @Date: 2025-03-31 09:09:15
 * @LastEditTime: 2025-04-08 21:42:13
 * @LastEditors: Finch
 * @Description:
 * @FilePath: \code\react-manager\src\utils\request.ts
 * 可以输入预定的版权声明、个性签名、空行等
 */
import { message } from 'antd';
import axios, { AxiosError } from 'axios';
import { showLoading, hideLoading } from './loading';
import storage from '@/utils/storage';
import env from '@/config';
// const ENV = import.meta.env;
// console.log('src/utils/request.ts:7--', env);
const instance = axios.create({
	baseURL: '/api', // 修改为统一的api前缀
	timeout: 8000,
	timeoutErrorMessage: '请求超时',
	withCredentials: true,
});
instance.interceptors.request.use(config => {
	const token = storage.get({ key: 'token' });
	showLoading();
	if (token) {
		config.headers.Authorization = 'Token::' + token;
	}
	if (env.mock) {
		config.baseURL = env.mockApi;
	} else {
		config.baseURL = env.baseApi;
	}
	return { ...config };
});

instance.interceptors.response.use(
	res => {
		hideLoading();
		const data = res.data;
		//由于接口MOCK问题，暂时修改一下
		// if (data.code === 500001) {
		// 	message.error(data.msg);
		// 	storage.remove({ key: 'token' });
		// } else if (data.code != 0) {
		// 	return Promise.reject(data);
		// }
		return data.data;
	},
	(error: AxiosError) => {
		// 这里的Promise.reject(error)会将错误传递给调用处的catch
		message.error('请求失败：' + error.message);
		return Promise.reject(error);
	},
);

export default {
	get<T>(url: string, params: object): Promise<T> {
		return instance.get(url, { params });
		// .catch(error => {
		// // 这里可以捕获到上面reject的错误
		// console.error('捕获到错误：', error);
		// throw error; // 继续向外抛出错误
		// });
	},

	post<T>(url: string, params: object): Promise<T> {
		return instance.post(url, params);
	},
};
