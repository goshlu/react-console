import LayoutIndex from "@/layouts";
import lazyLoad from "../../components/lazyLoad";
import { lazy } from "react";
import { HomeOutlined } from "@ant-design/icons";

const homeRouter = [
	{
		element: <LayoutIndex />,
		path: "/home",
		meta: {
			title: "首页",
			id: "100",
			icon: <HomeOutlined />
		},
		children: [
			{
				path: "/home/index",
				element: lazyLoad(lazy(() => import("@/views/home")))
			}
		]
	}
];

export default homeRouter;
