import { Layout } from "antd";
import AvatarIcon from "./components/avatarIcon";
import CollapseIcon from "./components/collapseIcon";
import BreadcrumbNav from "./components/breadcrumbNav";
import "./index.less";

const { Header } = Layout;

const LayoutHeader = () => {
	return (
		<Header>
			<div className="header-lf">
				<CollapseIcon />
				<BreadcrumbNav />
			</div>
			<div className="header-ri">
				<AvatarIcon />
			</div>
		</Header>
	);
};

export default LayoutHeader;
