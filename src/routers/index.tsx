import { RouteObject } from "@/routers/interface";
import { Navigate, useRoutes } from "react-router-dom";
import lazyLoad from "@/components/lazyLoad/index";
import { lazy } from "react";
// import LayoutIndex from "@/layouts";

// 导入所有router
// const metaRouters = import.meta.glob("./modules/*.tsx", { eager: true });
const metaRouters: Record<string, any> = import.meta.glob("./modules/*.tsx", { eager: true });

// * 处理路由
export const routerArray: RouteObject[] = [];
Object.keys(metaRouters).forEach((item: any) => {
	// @ts-ignore
	Object.keys(metaRouters[item]).forEach((key: any) => {
		// @ts-ignore
		routerArray.push(...metaRouters[item][key]);
	});
});
console.log("routerArray", routerArray);

export const rootRouter: RouteObject[] = [
	{
		path: "/",
		// element: <Navigate to="/home" />
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
	//
	...routerArray,
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
