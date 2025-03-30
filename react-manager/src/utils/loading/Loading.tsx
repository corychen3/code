import { Spin } from 'antd';
import React from 'react';
import './loading.less';
// import { LoadingOutlined } from '@ant-design/icons';
const contentStyle: React.CSSProperties = {
	padding: 40,
	background: 'rgba(0, 0, 0, 0.05)',
	borderRadius: 4,
};

interface LoadingProps {
	tip?: string;
}
const content = <div style={contentStyle} />;
const LoadingResquest: React.FC<LoadingProps> = ({ tip = 'Loading' }) => {
	return (
		<>
			{/* <Spin indicator={<LoadingOutlined spin />} size='small' /> */}
			<Spin tip={tip} size='large' className='sty-loading'>
				{content}
			</Spin>
		</>
	);
};

export default LoadingResquest;
