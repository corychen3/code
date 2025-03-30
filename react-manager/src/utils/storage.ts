/*
 * @Author: Finch
 * @Date: 2025-03-30 21:38:05
 * @LastEditTime: 2025-03-30 22:20:55
 * @LastEditors: Finch
 * @Description:
 * @FilePath: \code\react-manager\src\utils\storage.ts
 * 可以输入预定的版权声明、个性签名、空行等
 */

interface localStore {
	key: string; //键值
	value?: any; //值
}

export default {
	set(store: localStore) {
		sessionStorage.setItem(store.key, JSON.stringify(store.value));
	},
	get(store: localStore) {
		const value = sessionStorage.getItem(store.key);
		if (!value) return `here is not a key named ${store.key}`;
		try {
			return JSON.parse(value);
		} catch (error) {
			return value;
		}
	},
	remove(store: localStore) {
		sessionStorage.removeItem(store.key);
	},
	clear() {
		sessionStorage.clear();
	},
};
