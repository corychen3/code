/*
 *
 * 　　┏┓　　　┏┓+ +
 * 　┏┛┻━━━┛┻┓ + +
 * 　┃　　　　　　　┃
 * 　┃　　　━　　　┃ ++ + + +
 *  ████━████ ┃+
 * 　┃　　　　　　　┃ +
 * 　┃　　　┻　　　┃
 * 　┃　　　　　　　┃ + +
 * 　┗━┓　　　┏━┛
 * 　　　┃　　　┃
 * 　　　┃　　　┃ + + + +
 * 　　　┃　　　┃
 * 　　　┃　　　┃ +  神兽保佑
 * 　　　┃　　　┃    代码无bug
 * 　　　┃　　　┃　　+
 * 　　　┃　 　　┗━━━┓ + +
 * 　　　┃ 　　　　　　　┣┓
 * 　　　┃ 　　　　　　　┏┛
 * 　　　┗┓┓┏━┳┓┏┛ + + + +
 * 　　　　┃┫┫　┃┫┫
 * 　　　　┗┻┛　┗┻┛+ + + +
 *
 *
 * @Author: your name
 * @Date: 2025-03-20 15:25:19
 * @LastEditTime: 2025-03-30 21:44:35
 * @LastEditors: your name
 * @Description:
 * @FilePath: \code\react-manager\src\views\Home\index.tsx
 * 可以输入预定的版权声明、个性签名、空行等
 */

import { Button } from 'antd';
import request from '@/utils/request';

const Home = () => {
	const handleClick = () => {
		console.log('src/views/Home/index.tsx:6--', '...');
		request.post('/api', {}).then(res => {
			let token = res;
			console.log('src/views/Welcome/index.tsx:7--', token);
		});
	};
	return (
		<div>
			Home
			<Button type='primary' onClick={handleClick}>
				Loading
			</Button>
		</div>
	);
};
export default Home;
