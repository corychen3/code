import { message } from 'antd';
import axios, { AxiosError } from 'axios';

const instance = axios.create({
	baseURL: '/api',
	timeout: 8000,
	timeoutErrorMessage: '请求超时',
	withCredentials: true,
});

instance.interceptors.request.use(config => {
	const token = localStorage.getItem('token');
	if (token) {
		config.headers.Authorization = 'Token::' + token;
	}
	return { ...config };
});

instance.interceptors.response.use(
	res => {
		const data = res.data;
		if (data.code === 500001) {
			message.error(data.msg);
			localStorage.removeItem('token');
			location.href = '/login';
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
	get(url: string, params: any) {
		return instance.get(url, { params }).catch(error => {
			// 这里可以捕获到上面reject的错误
			console.error('捕获到错误：', error);
			throw error; // 继续向外抛出错误
		});
	},

	post(url: string, params: any) {
		instance.post(url, params);
	},
};
