import React from 'react';
import { Button, Input, Form } from 'antd';
import api from '@/api';
import { Login as loginType } from '@/types/api';
import styles from './index.module.less';
type FieldType = {
	userName?: string;
	userPwd?: string;
};
const Login: React.FC = () => {
	const onFinish = async (values: loginType.params) => {
		const login = await api.loginApi(values);
		console.log('src/views/login/index.tsx:5--', login);
	};
	return (
		<div className={styles.loginContainer}>
			<div className={styles.loginForm}>
				<div className={styles.title}>请登录</div>
				<Form
					name='basic'
					wrapperCol={{ span: 24 }}
					style={{ maxWidth: 600 }}
					initialValues={{ remember: true }}
					onFinish={onFinish}
					autoComplete='off'
				>
					<Form.Item<FieldType> name='userName' rules={[{ required: true, message: 'Please input your username!' }]}>
						<Input />
					</Form.Item>

					<Form.Item<FieldType> name='userPwd' rules={[{ required: true, message: 'Please input your password!' }]}>
						<Input.Password />
					</Form.Item>

					<Form.Item>
						<Button block type='primary' htmlType='submit'>
							登录
						</Button>
					</Form.Item>
				</Form>
			</div>
		</div>
	);
};

export default Login;
