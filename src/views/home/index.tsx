import "./index.less";
import { observer } from "mobx-react";
import welcome from "@/assets/images/welcome.png";

const Home = observer(() => {
	return (
		<div className="home">
			<img src={welcome} alt="" />
		</div>
	);
});

export default Home;
