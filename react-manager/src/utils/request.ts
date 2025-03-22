import { message } from 'antd';
import axios, { AxiosError } from 'axios';

const instance = axios.create({
	baseURL: '/api',
	timeout: 8000,
	timeoutErrorMessage: '请求超时',
	withCredentials: true,
});

instance.interceptors.request.use(
	config => {
		const token = localStorage.getItem('token');
		if (token) {
			config.headers.Authorization = 'Token::' + token;
		}
		return { ...config };
	},
	(error: AxiosError) => {
		return Promise.reject(error);
	},
);

instance.interceptors.response.use(res => {
	const data = res.data;
	if (data.code === 500001) {
		message.error(data.msg);
		localStorage.removeItem('token');
		location.href = '/login';
	} else if (data.code != 0) {
		return Promise.reject(data);
	}
	return data.data;
});

export default {
	get(url: string, params: any) {
		return instance.get(url, { params });
	},

	post(url: string, params: any) {
		return instance.post(url, params);
	},
};
