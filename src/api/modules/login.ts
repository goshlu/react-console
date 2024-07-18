import request from "@/utils/request";

// 登录
export const login = async (params: Expand<API.LoginParams>) =>
	request.post<any, ExpandRecursively<API.LoginData>>("/User/Login", params);
