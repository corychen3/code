import { message } from 'antd';
import axios, { AxiosError } from 'axios';

const instance = axios.create({
	// 基础URL，会自动加在请求URL前面
	baseURL: '/api',
	// 请求超时时间（毫秒）
	timeout: 8000,
	// 超时错误信息
	timeoutErrorMessage: '请求超时',
	// 是否携带凭证（cookies）
	withCredentials: true,
	// 其他常用配置选项（当前未使用）：
	/*
    // 请求头设置
    headers: {
        'Content-Type': 'application/json'
    },
    // 请求方法
    method: 'get',
    // URL 参数
    params: {},
    // 请求体数据
    data: {},
    // 响应类型
    responseType: 'json',
    // URL Path 参数
    url: '/user',
    // 取消令牌
    cancelToken: new axios.CancelToken(function (cancel) {})
    */
});

instance.interceptors.request.use(
	config => {
		const token = localStorage.getItem('token');
		if (token) {
			// Authorization 用于携带身份验证信息
			// 这里使用了自定义格式："Token::" + token
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
