import { RouteObject } from "@/routers/interface";
import { Navigate, useRoutes } from "react-router-dom";
import lazyLoad from "@/components/lazyLoad/lazyLoad";
import { lazy } from "react";
import LayoutIndex from "@/layouts";

export const rootRouter: RouteObject[] = [
	{
		path: "/",
		element: <Navigate to="/home" />
	},
	{
		path: "/login",
		element: lazyLoad(lazy(() => import("@/views/login"))),
		meta: {
			requiresAuth: false,
			title: "登录页",
			key: "login"
		}
	},
	{
		element: <LayoutIndex name="我是参数" />,
		children: [
			{
				path: "/home",
				element: lazyLoad(lazy(() => import("@/views/home")))
			}
		]
	},
	{
		path: "/404",
		element: lazyLoad(lazy(() => import("@/views/notFound")))
	},
	{
		path: "*",
		element: <Navigate to="/404" />
	}
];

const Router = () => {
	return useRoutes(rootRouter as any);
};

export default Router;
