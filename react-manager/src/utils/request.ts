import { message } from 'antd';
import axios, { AxiosError } from 'axios';
import { showLoading, hideLoading } from './loading';
import storage from '@/utils/storage';
const instance = axios.create({
	baseURL: '/api',
	timeout: 8000,
	timeoutErrorMessage: '请求超时',
	withCredentials: true,
});
const ENV = import.meta.env;
instance.interceptors.request.use(config => {
	const token = storage.get({ key: 'token' });
	showLoading();
	if (token) {
		config.headers.Authorization = 'Token::' + token;
	}
	if (ENV.VITE_MOCK === 'true') {
		config.baseURL = ENV.VITE_MOCK_API;
	} else {
		config.baseURL = ENV.BASE_URL;
	}
	return { ...config };
});

instance.interceptors.response.use(
	res => {
		hideLoading();
		const data = res.data;
		if (data.code === 500001) {
			message.error(data.msg);
			storage.remove({ key: 'token' });
			// location.href = '/login';
		} else if (data.code != 0) {
			// 这里使用Promise.reject(data)会触发后续的catch处理
			return Promise.reject(data);
		}
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
