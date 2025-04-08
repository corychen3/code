/*
 * @Author: Finch
 * @Date: 2025-04-08 18:41:49
 * @LastEditTime: 2025-04-08 19:26:46
 * @LastEditors: Finch
 * @Description:
 * @FilePath: \code\react-manager\src\views\login\index.tsx
 * 可以输入预定的版权声明、个性签名、空行等
 */
import React from 'react';
import { Button, Input, Form } from 'antd';
import './index.less';
type FieldType = {
	username?: string;
	password?: string;
};
const Login: React.FC = () => {
	const onFinish = () => {
		console.log('src/views/login/index.tsx:5--', 'work');
	};
	return (
		<div className='login-container'>
			<div className='login-form'>
				<div className='title'>请登录</div>
				<Form
					name='basic'
					wrapperCol={{ span: 24 }}
					style={{ maxWidth: 600 }}
					initialValues={{ remember: true }}
					onFinish={onFinish}
					autoComplete='off'
				>
					<Form.Item<FieldType> name='username' rules={[{ required: true, message: 'Please input your username!' }]}>
						<Input />
					</Form.Item>

					<Form.Item<FieldType> name='password' rules={[{ required: true, message: 'Please input your password!' }]}>
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
