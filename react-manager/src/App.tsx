import React from 'react';
import { RouterProvider } from 'react-router-dom';
import router from './router';
import './App.less';
/*
 * @Author: Finch
 * @Date: 2025-04-08 18:54:41
 * @LastEditTime: 2025-04-08 19:00:40
 * @LastEditors: Finch
 * @Description:
 * @FilePath: \code\react-manager\src\App.tsx
 * 可以输入预定的版权声明、个性签名、空行等
 */
const App: React.FC = () => {
	return (
		<div>
			<RouterProvider router={router} />
		</div>
	);
};

export default App;
