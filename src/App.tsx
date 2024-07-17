// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
// import "./App.less";
import Router from "./routers";
import AuthRouter from "./routers/authRouter";
import { globalStore } from "./stores";
import { observer } from "mobx-react";
import { ThemeColorConfigProvider } from "@/components/themeColors";
import { DarkModeConfigProvider } from "@/components/themeModeSwitch";

const App = observer(() => {
	// const [count, setCount] = useState(0);
	const {
		themeConfig: { isGrayMode, isWeakMode }
	} = globalStore;
	// * 使用灰色模式和色弱模式
	const initTheme = () => {
		const body = document.documentElement as HTMLElement;
		if (!isGrayMode && !isWeakMode) body.setAttribute("style", "");
		if (isWeakMode) body.setAttribute("style", "filter: invert(80%)");
		if (isGrayMode) body.setAttribute("style", "filter: grayscale(1)");
	};
	initTheme();
	console.log("执行了");

	return (
		<AuthRouter>
			<DarkModeConfigProvider>
				<ThemeColorConfigProvider>
					<Router />
				</ThemeColorConfigProvider>
			</DarkModeConfigProvider>
		</AuthRouter>
	);
});

export default App;
