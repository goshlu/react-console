import { RouteObject } from "@/routers/interface";
import { Navigate, useRoutes } from "react-router-dom";
import lazyLoad from "@/components/lazyLoad/lazyLoad";
import { lazy } from "react";

export const rootRouter: RouteObject[] = [
	{
		path: "/",
		element: <Navigate to="/login" />
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
