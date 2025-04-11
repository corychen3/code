/*
 * @Author: Finch
 * @Date: 2025-03-20 15:16:06
 * @LastEditTime: 2025-04-08 18:49:34
 * @LastEditors: Finch
 * @Description:
 * @FilePath: \code\react-manager\src\router\index.tsx
 * 可以输入预定的版权声明、个性签名、空行等
 */
import { createBrowserRouter, Navigate } from 'react-router-dom';
import About from '@/views/about';
import NotFound from '@/views/notFound';
import Welcome from '@/views/welcome';
import Login from '@/views/login';
import Layout from '@/layout';
const router = createBrowserRouter([
	{
		path: '/',
		element: <Navigate to='/welcome' />,
	},
	{
		path: '/login',
		element: <Login />,
	},
	{
		element: <Layout />,
		children: [
			{
				path: '/welcome',
				element: <Welcome />,
			},
		],
	},
	{
		path: '/about',
		element: <About />,
	},

	{
		path: '*',
		element: <NotFound />,
	},
]);

export default router;
