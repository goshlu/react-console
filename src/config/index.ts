// 全局不动配置项 只做导出不做修改
// 首页地址（默认）
export const HOME_URL: string = "/home/index";
// 权限id对应路由
// export const AUTH_ROUTER: Record<string, string> = {
// 	"/home/index": "100",
// 	"/proTable": "200",
// 	"/proTable/useHooks1": "201",
// 	"/proTable/useHooks2": "202"
// };
// 路由路径对应的中文名称
export const ROUTER_CONFIG: Record<string, string> = {
	home: "首页",
	proTable: "超级表格",
	useHooks1: "使用 Hooks1",
	useHooks2: "使用 Hooks2"
};

// 应用相关
export const ThemeColors = ["#1677ff", "#ee3f4d", "#c08eaf", "#95509f", "#722ed1", "#00b96b", "#7cb305", "#13c2c2", "#d6a01d"];
// 请求相关
export const ApiBaseUrl = "https://www.fastmock.site/mock/d6f0134049a0e22b01d7aae6fafc9045/api";
export const ApiTimeout = 30000;
export const ApiSessionKey = "token";
export type HttpStatusCode = keyof typeof HttpStatus;
export const HttpStatus = {
	// 与后台约定可能返回的状态码（不是http的响应状态码）
	200: "请求成功",
	401: "未授权，请重新登录",
	403: "拒绝访问",
	404: "请求错误，未找到该资源",
	408: "请求超时",
	500: "服务器发生错误",
	501: "服务未实现",
	502: "网络错误",
	503: "服务不可用",
	504: "网络超时",
	505: "HTTP版本不受支持"
};
export interface DTO<ResDataType = any> {
	Code: HttpStatusCode;
	Data: ResDataType;
	Message: string | undefined;
	Success: boolean;
}
