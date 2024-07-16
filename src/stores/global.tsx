import { makeAutoObservable } from "mobx";
class Global {
	permissions: any[] = ["/home", "/home/index", "/proTable", "/proTable/useHooks1", "/proTable/useHooks2"];

	constructor() {
		makeAutoObservable(this);
	}
}

export default new Global();
