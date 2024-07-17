import { Tabs } from "antd";
// import { useEffect, useState } from "react";
// import { useLocation } from "react-router-dom";
import { useState } from "react";
import { type Location } from "react-router-dom";
import { globalStore } from "@/stores";
import { observer } from "mobx-react";
import useLocationListen from "@/hooks/useLocationListen";

import "./index.less";

const LayoutTabs = observer(() => {
	// const { pathname } = useLocation();
	const [activeValue, setActiveValue] = useState("");
	const { themeConfig } = globalStore;
	const [tabsList] = useState([
		{
			label: "首页",
			key: "/home"
		}
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
			style={{ background: !themeConfig.isDarkMode ? "#fff" : undefined }}
		/>
	);
});

export default LayoutTabs;
