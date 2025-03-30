import { createRoot } from 'react-dom/client';
import LoadingResquest from './Loading';

// let loadingInstance: any = null;

const showLoading = () => {
	const dom = document.createElement('div');
	dom.setAttribute('id', 'loading');
	document.body.appendChild(dom);
	createRoot(dom).render(<LoadingResquest />);
	// loadingInstance = createRoot(dom).render(<LoadingResquest />);
};

const hideLoading = () => {
	const dom = document.getElementById('loading');
	if (dom) {
		document.body.removeChild(dom);
	}
};
export { showLoading, hideLoading };
