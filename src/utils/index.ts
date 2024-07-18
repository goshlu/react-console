import { RouteObject } from "@/routers/interface";

/**
 * @description 递归查询对应的路由
 * @param {String} path 当前访问地址
 * @param {Array} routes 路由列表
 * @returns array
 */
export const searchRoute = (path: string, routes: RouteObject[] = []): RouteObject => {
	let result: RouteObject = {};
	for (let item of routes) {
		if (item.path === path) return item;
		if (item.children) {
			const res = searchRoute(path, item.children);
			if (Object.keys(res).length) result = res;
		}
	}
	return result;
};

/**
 * @desc 递归当前路由的所有关联路由，生成面包屑导航栏
 * @param {String} path 当前访问地址
 * @param {Array} menuList 菜单列表
 * @returns array
 */
export const getBreadcrumbList = (path: string, menuList: Menu.MenuOptions[]) => {
	let tempPath: any[] = [];
	try {
		const getNodePath = (node: Menu.MenuOptions) => {
			tempPath.push(node);
			// 找到符合条件的节点，通过throw终止掉递归
			if (node.path === path) {
				throw new Error("done");
			}
			if (node.children && node.children.length > 0) {
				for (let i = 0; i < node.children.length; i++) {
					getNodePath(node.children[i]);
				}
				// 当前节点的字节带你遍历完依旧没有找到，则删除路径中该节点
				tempPath.pop();
			} else {
				tempPath.pop();
			}
		};
		for (let i = 0; i < menuList.length; i++) {
			getNodePath(menuList[i]);
		}
	} catch (e) {
		return tempPath.map(item => item.meta.title);
	}
};

/**
 * @desc 双重递归，找到所有面包屑，生成对象存到store中，不用每次都递归去查找了
 * @param {String} menuList 当前菜单列表
 * @reutns Object
 */
export const findAllBreadcrumb = (
	menuList: Menu.MenuOptions[]
): {
	[key: string]: any;
} => {
	let handleBreadcrumbList: any = [];
	const loop = (menuItem: Menu.MenuOptions) => {
		// 下面判断代码解释 *** !item?.children?.length   ==>   (item.children && item.children.length > 0)
		if (menuItem?.children?.length) menuItem.children.forEach(item => loop(item));
		else handleBreadcrumbList[menuItem.path] = getBreadcrumbList(menuItem.path, menuList);
	};
	menuList.forEach(item => loop(item));
	return handleBreadcrumbList;
};

/**
 * 下载文件
 * @param {String} href
 * @param {String} fileName
 */
export function downloadFile(href: string, fileName: string) {
	const a = document.createElement("a");
	a.href = href;
	a.download = fileName;
	document.body.appendChild(a);
	a.click();
	document.body.removeChild(a);
}

/**
 * 下载流数据文件
 * @param {FileStream} streamData
 * @param {String} fileName
 * @param {ContentType} type
 */
export function downloadStreamFile(streamData: BlobPart, fileName = "", type?: any) {
	let blob = new Blob([streamData], { type });
	const fileUrl = window.URL.createObjectURL(blob);
	downloadFile(fileUrl, fileName);
	window.URL.revokeObjectURL(fileUrl); // 释放内存
}
