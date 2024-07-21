import { makeAutoObservable } from "mobx";
import { makePersistable } from "mobx-persist-store";

interface IThemeConfig {
	themeColor: string; // 主题色
	isDarkMode: boolean; // 是否是暗黑模式
	isWeakMode: boolean; // 是否是弱光模式
	isGrayMode: boolean; // 是否是灰色模式
}

class Global {
	// permissions: any[] = ["/home", "/home/index", "/proTable", "/proTable/useHooks1", "/proTable/useHooks2"];

	permissions: any[] = ["/home", "/home/index", "/proTable", "/proTable/useHooks1", "/proTable/useHooks2"]; // 权限列表
	userInfo: any = {};
	isCollapse: boolean = false; // 侧边栏是否折叠
	themeConfig: IThemeConfig = {
		themeColor: "#1677ff",
		isDarkMode: false,
		isWeakMode: false,
		isGrayMode: false
	};

	constructor() {
		makeAutoObservable(this);
		makePersistable(this, {
			name: "global",
			properties: ["permissions", "userInfo", "themeConfig", "tabsList", "menuList"],
			storage: window.localStorage
		});
	}

	setIsCollapse(isCollapse: boolean) {
		this.isCollapse = isCollapse;
	}

	setIsDarkMode(isDarkMode: boolean) {
		this.themeConfig.isDarkMode = isDarkMode;
	}
	setThemeConfig(themeConfig: IThemeConfig) {
		this.themeConfig = themeConfig;
	}
}

export default new Global();
