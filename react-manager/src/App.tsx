/*
 * @Author: Finch
 * @Date: 2025-04-08 18:54:41
 * @LastEditTime: 2025-04-08 20:07:23
 * @LastEditors: Finch
 * @Description:
 * @FilePath: \code\react-manager\src\App.tsx
 * 可以输入预定的版权声明、个性签名、空行等
 */
import React from 'react';
import { RouterProvider } from 'react-router-dom';
import router from './router';
import { ConfigProvider } from 'antd';
import './App.less';
const App: React.FC = () => {
	return (
		<div>
			<ConfigProvider
				theme={{
					token: {
						colorPrimary: '#cb7250',
					},
				}}
			>
				<RouterProvider router={router} />
			</ConfigProvider>
		</div>
	);
};

export default App;
