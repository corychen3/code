import React, { useEffect } from 'react';
import request from '@/utils/request';
import { Button } from 'antd';
import storage from '@/utils/storage';
const Welcome: React.FC = () => {
	useEffect(() => {
		request.post('/api', {}).then(res => {
			let token = res;
			console.log('src/views/Welcome/index.tsx:7--', token);
		});
	});
	const handle = (type: number) => {
		if (type === 1) {
			storage.set({ key: 'Finch', value: { name: 'CHENJIAMING' } });
		} else if (type === 2) {
			console.log('src/views/Welcome/index.tsx:16--', storage.get({ key: 'Finch' }));
		} else if (type === 3) {
			storage.remove({ key: 'Finch' });
		} else {
			storage.clear();
		}
	};
	return (
		<div>
			<h1>Welcome to React Manager</h1>
			<p>This is the Welcome page of your application.</p>
			<Button onClick={() => handle(1)}>SET</Button>
			<Button onClick={() => handle(2)}>GET</Button>
			<Button onClick={() => handle(3)}>REMOVE</Button>
			<Button onClick={() => handle(4)}>CLEAR</Button>
		</div>
	);
};

export default Welcome;
