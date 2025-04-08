import request from '@/utils/request';
import { Login } from '@/types/api';
const loginApi = (params: Login.params) => {
	return request.post('/user/login', params);
};
export default {
	loginApi,
};
