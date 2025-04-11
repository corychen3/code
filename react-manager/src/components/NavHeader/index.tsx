import { MenuUnfoldOutlined } from '@ant-design/icons';
import { Breadcrumb, Switch, Dropdown } from 'antd';
import type { MenuProps } from 'antd';
import style from './index.module.less';
const NavHeader = () => {
	const breadItems = [
		{
			herf: '首页',
			title: (
				<>
					<MenuUnfoldOutlined />
					<span>首页</span>
				</>
			),
		},
		{
			herf: '首页',
			title: (
				<>
					<span>工作台</span>
				</>
			),
		},
	];
	const items: MenuProps['items'] = [
		{
			key: '1',
			label: '	1st menu item',
		},
		{
			key: '2',
			label: (
				<a target='_blank' rel='noopener noreferrer' href='https://www.aliyun.com'>
					2nd menu item
				</a>
			),
		},
	];
	return (
		<div className={style.navHeader}>
			<div className='left'>
				<Breadcrumb items={breadItems} />
			</div>
			<div className={style.right}>
				<Switch checkedChildren='暗黑' unCheckedChildren='默认' />
				<Dropdown menu={{ items }} placement='bottom' arrow>
					<span className={style.dropText}>Finch</span>
				</Dropdown>
			</div>
		</div>
	);
};
export default NavHeader;
