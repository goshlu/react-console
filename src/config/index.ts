// 全局不动配置项 只做导出不做修改
// 首页地址（默认）
export const HOME_URL: string = "/home/index";
// 权限id对应路由
export const AUTH_ROUTER: Record<string, string> = {
	"/home/index": "100",
	"/proTable": "200",
	"/proTable/useHooks1": "201",
	"/proTable/useHooks2": "202"
};