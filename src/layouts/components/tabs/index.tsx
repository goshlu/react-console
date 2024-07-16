import { Tabs } from "antd";
// import { useEffect, useState } from "react";
// import { useLocation } from "react-router-dom";
import { useState } from "react";
import { type Location } from "react-router-dom";
import useLocationListen from "@/hooks/useLocationListen";

import "./index.less";

const LayoutTabs = () => {
	// const { pathname } = useLocation();
	const [activeValue, setActiveValue] = useState("");
	const [tabsList] = useState([
		{
			label: "首页",
			key: "/home"
		}
		// {
		// 	label: "超级表格",
		// 	key: "/proTable"
		// },
		// {
		// 	label: "数据大屏",
		// 	key: "/dataScreen"
		// },
		// {
		// 	label: "使用 Hooks",
		// 	key: "/useHooks"
		// },
		// {
		// 	label: "使用 Component",
		// 	key: "/useComponent"
		// },
		// {
		// 	label: "数据可视化",
		// 	key: "/dashboard"
		// },
		// {
		// 	label: "内嵌页面",
		// 	key: "/embedded"
		// },
		// {
		// 	label: "基础 Form",
		// 	key: "/basicForm"
		// },
		// {
		// 	label: "校验 Form",
		// 	key: "/validateForm"
		// },
		// {
		// 	label: "动态 Form",
		// 	key: "/dynamicForm"
		// },
		// {
		// 	label: "水型图",
		// 	key: "/waterChart"
		// }
	]);

	useLocationListen((location: Location) => {
		const { pathname } = location;
		setActiveValue(pathname);
	});

	const tabsClick = (path: string) => {
		console.log(path);
	};

	const delTabs = (path: string) => {
		console.log(path);
	};

	return (
		<Tabs
			activeKey={activeValue}
			onChange={tabsClick}
			hideAdd
			type="editable-card"
			onEdit={path => {
				delTabs(path as string);
			}}
			items={tabsList}
		/>
	);
};

export default LayoutTabs;
