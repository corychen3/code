/*
 * @Author: Finch
 * @Date: 2025-03-20 15:16:06
 * @LastEditTime: 2025-03-30 22:29:56
 * @LastEditors: Finch
 * @Description:
 * @FilePath: \code\react-manager\src\router\index.tsx
 * 可以输入预定的版权声明、个性签名、空行等
 */
import { createBrowserRouter } from 'react-router-dom';
import About from '@/views/About';
import NotFound from '@/views/NotFound';
import Home from '@/views/Home';
import Welcome from '@/views/Welcome';
const router = createBrowserRouter([
	{
		path: '/',
		element: <Home />,
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
