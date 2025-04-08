/*
 * @Author: Finch
 * @Date: 2025-03-20 15:16:06
 * @LastEditTime: 2025-04-08 18:49:34
 * @LastEditors: Finch
 * @Description:
 * @FilePath: \code\react-manager\src\router\index.tsx
 * 可以输入预定的版权声明、个性签名、空行等
 */
import { createBrowserRouter } from 'react-router-dom';
import About from '@/views/about';
import NotFound from '@/views/notFound';
import Home from '@/views/home';
import Welcome from '@/views/welcome';
import Login from '@/views/login';
const router = createBrowserRouter([
	{
		path: '/',
		element: <Home />,
	},
	{
		path: '/login',
		element: <Login />,
	},
	{
		path: '/about',
		element: <About />,
	},
	{
		path: '/welcome',
		element: <Welcome />,
	},
	{
		path: '*',
		element: <NotFound />,
	},
]);

export default router;
