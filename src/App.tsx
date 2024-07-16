// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
// import "./App.less";
import Router from "./routers";
import AuthRouter from "./routers/authRouter";

function App() {
	// const [count, setCount] = useState(0);

	return (
		<AuthRouter>
			<Router />
		</AuthRouter>
	);
}

export default App;
