import React, { useEffect, useState } from "react";
import { HomeOutlined, TableOutlined, AreaChartOutlined } from "@ant-design/icons";
import { useLocation, useNavigate } from "react-router-dom";
import { Menu, type MenuProps } from "antd";
import Logo from "./components/logo";
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

const LayoutMenu = () => {
	const { pathname } = useLocation();
	const navigate = useNavigate();
	const [menuActive, setMenuActive] = useState(pathname);
	const [menuList] = useState([
		getItem("首页", "/home", <HomeOutlined />),
		getItem("数据大屏", "/dataScreen", <AreaChartOutlined />),
		getItem("超级表格", "/proTable", <TableOutlined />, [
			getItem("使用 Hooks", "/table/useHooks"),
			getItem("使用 Hooks", "/table/useHook")
		])
	]);

	useEffect(() => {
		console.log("pathname", pathname);
		setMenuActive(pathname);
	}, [pathname]);

	return (
		<div className="menu">
			<Logo />
			<Menu
				theme="dark"
				mode="inline"
				triggerSubMenuAction="click"
				selectedKeys={[menuActive]}
				defaultOpenKeys={["/proTable"]}
				items={menuList}
				onClick={({ key }) => {
					if (key) {
						navigate(key);
					}
				}}
			/>
		</div>
	);
};

export default LayoutMenu;