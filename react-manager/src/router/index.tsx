import { createBrowserRouter } from 'react-router-dom';
import About from '@/views/About';
import NotFound from '@/views/NotFound';
import Home from '@/views/Home';
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
		path: '*',
		element: <NotFound />,
	},
]);

export default router;
