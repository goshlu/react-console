import { makeAutoObservable } from "mobx";
class Global {
	// permissions: any[] = ["/home", "/home/index", "/proTable", "/proTable/useHooks1", "/proTable/useHooks2"];

	permissions: any[] = ["/home", "/home/index", "/proTable", "/proTable/useHooks1", "/proTable/useHooks2"]; // 权限列表
	isCollapse: boolean = false; // 侧边栏是否折叠

	constructor() {
		makeAutoObservable(this);
	}

	setIsCollapse(isCollapse: boolean) {
		this.isCollapse = isCollapse;
	}
}

export default new Global();
