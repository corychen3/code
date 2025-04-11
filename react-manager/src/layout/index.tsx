import React from 'react';
import { Layout, Menu } from 'antd';
import { DesktopOutlined, UserOutlined } from '@ant-design/icons';
import { Outlet } from 'react-router-dom';
import NavHeader from '@/components/NavHeader';
import styles from './index.module.less';
const { Content, Footer, Sider } = Layout;

const items = [
	{
		key: '1',
		icon: <DesktopOutlined />,
		label: '桌面',
	},
	{
		key: '2',
		icon: <UserOutlined />,
		label: '用户',
	},
];
//

const App: React.FC = () => {
	return (
		<Layout>
			<Sider>
				<div className={styles.logo}>
					<div className={styles.logoImg}></div>
					<span className={styles.logoTitle}>Finch货运</span>
				</div>
				<Menu theme='dark' mode='inline' items={items} />
			</Sider>
			<Layout>
				<NavHeader />
				<Content style={{ margin: '24px 16px 0' }}>
					<div
						style={{
							padding: 24,
							minHeight: 360,
						}}
					>
						<Outlet />
					</div>
				</Content>
				<Footer style={{ textAlign: 'center' }}>Ant Design ©{new Date().getFullYear()} Created by Ant UED</Footer>
			</Layout>
		</Layout>
	);
};

export default App;
