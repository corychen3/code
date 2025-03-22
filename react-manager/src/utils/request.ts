import axios from 'axios';

const instance = axios.create({
	baseURL: '/api',
	timeout: 8000,
	timeoutErrorMessage: '请求超时',
	withCredentials: true,
});

export default {
	get(url: string, params: any) {
		instance.get(url, { params });
	},

	post(url: string, params: any) {
		instance.post(url, params);
	},
};
