import { Breadcrumb } from "antd";
import type { Location } from "react-router-dom";
import { ROUTER_CONFIG } from "@/config/index";
import useLocationListen from "@/hooks/useLocationListen";
import { useState } from "react";

const BreadcrumbNav = () => {
	const [breadcrumbList, setBreadcrumbList] = useState<
		{
			id: string;
			info: string;
		}[]
	>([]);

	// 过滤面包屑
	useLocationListen((location: Location) => {
		const { pathname } = location;
		let temp = pathname.split("/").filter(item => item);
		let temp2 = temp.map(item => {
			return {
				id: item,
				info: ROUTER_CONFIG[item]
			};
		});
		console.log("temp2", temp2);
		setBreadcrumbList(temp2);
	});

	return (
		<Breadcrumb>
			{breadcrumbList.map(item => {
				return <Breadcrumb.Item key={item.id}>{item.info}</Breadcrumb.Item>;
			})}
		</Breadcrumb>
	);
};

export default BreadcrumbNav;
