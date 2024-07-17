// import { Layout } from "antd";
// import AvatarIcon from "./components/avatarIcon";
import { Layout, Row, Col, Space } from "antd";
import { globalStore } from "@/stores";
import { observer } from "mobx-react";
import PersonalCenter from "./components/personalCenter";
import CollapseIcon from "./components/collapseIcon";
import BreadcrumbNav from "./components/breadcrumbNav";
import LocalSettingsHeaderButton from "@/components/localSetting";
import "./index.less";

const { Header } = Layout;

const LayoutHeader = observer(() => {
	const { themeConfig } = globalStore;
	return (
		// <Header>
		// 	<div className="header-lf">
		// 		<CollapseIcon />
		// 		<BreadcrumbNav />
		// 	</div>
		// 	<div className="header-ri">
		// 		<AvatarIcon />
		// 	</div>
		// </Header>
		<Header
			style={{
				height: 64,
				lineHeight: "64px",
				padding: "0 12px",
				backgroundColor: !themeConfig.isDarkMode ? "#fff" : undefined,
				position: "sticky",
				top: 0,
				zIndex: 100
			}}
		>
			<Row justify="space-between" align="middle">
				<Col>
					<Space>
						<CollapseIcon />
						<BreadcrumbNav />
					</Space>
				</Col>
				<Col>
					<Space>
						<PersonalCenter />
						<LocalSettingsHeaderButton />
					</Space>
				</Col>
			</Row>
		</Header>
	);
});

export default LayoutHeader;
