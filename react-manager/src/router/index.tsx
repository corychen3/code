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
