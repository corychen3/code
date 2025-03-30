import React, { useEffect } from 'react';
import request from '@/utils/request';
const Welcome: React.FC = () => {
	useEffect(() => {
		request.post('/api', {}).then(res => {
			let token = res;
			console.log('src/views/Welcome/index.tsx:7--', token);
		});
	});
	return (
		<div>
			<h1>Welcome to React Manager</h1>
			<p>This is the Welcome page of your application.</p>
		</div>
	);
};

export default Welcome;
