import React, { useEffect, useState } from "react";
// import { HomeOutlined, TableOutlined, AreaChartOutlined } from "@ant-design/icons";
import { useLocation, useNavigate } from "react-router-dom";
import { Menu, type MenuProps } from "antd";
import Logo from "./components/logo";
import { rootRouter } from "@/routers";
import { globalStore } from "@/stores";
import { observer } from "mobx-react";

import "./index.less";

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
	label: React.ReactNode,
	key: React.Key,
	icon?: React.ReactNode,
	children?: MenuItem[],
	type?: "group"
): MenuItem {
	return {
		key,
		icon,
		children,
		label,
		type
	} as MenuItem;
}

// 递归处理Menu数据
const handleMenuData = (rootRouter: any[], authRouter: any[], newArr: MenuItem[] = []) => {
	rootRouter.forEach(item => {
		console.log("item", rootRouter, item.path);
		if (authRouter.includes(item.path)) {
			if (!item?.children?.length) {
				let currentItem = getItem(item?.meta?.title, item.path, item?.meta?.icon);
				return newArr.push(currentItem);
			}
			// 一个子路由时特殊处理
			if (item?.children?.length === 1) {
				let currentItem = getItem(item?.meta?.title, item.children[0].path, item?.meta?.icon);
				return newArr.push(currentItem);
			}
			newArr.push(getItem(item?.meta?.title, item.path, item?.meta?.icon, handleMenuData(item?.children, authRouter)));
		}
	});
	return newArr;
};

const LayoutMenu = observer(() => {
	const { pathname } = useLocation();
	const navigate = useNavigate();
	// const { permissions } = globalStore;

	const { permissions, isCollapse } = globalStore;

	const [menuActive, setMenuActive] = useState(pathname);
	// const [menuList] = useState([
	// 	getItem("首页", "/home", <HomeOutlined />),
	// 	getItem("数据大屏", "/dataScreen", <AreaChartOutlined />),
	// 	getItem("超级表格", "/proTable", <TableOutlined />, [
	// 		getItem("使用 Hooks", "/table/useHooks"),
	// 		getItem("使用 Hooks", "/table/useHook")
	// 	])
	// ]);
	const [menuList, setMenuList] = useState<any[]>([]);

	useEffect(() => {
		console.log("pathname", pathname);
		setMenuActive(pathname);
		setMenuList(handleMenuData(rootRouter, permissions));
	}, [pathname]);

	return (
		<div className="menu">
			<Logo isCollapse={isCollapse} />
			<Menu
				theme="dark"
				mode="inline"
				triggerSubMenuAction="click"
				selectedKeys={[menuActive]}
				// defaultOpenKeys={["/proTable"]}
				defaultOpenKeys={[menuActive]}
				items={menuList}
				onClick={({ key }) => {
					if (key) {
						navigate(key);
					}
				}}
			/>
		</div>
	);
});

export default LayoutMenu;
