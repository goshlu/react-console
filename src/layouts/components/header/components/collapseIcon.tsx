import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";
import { globalStore } from "@/stores";
import { observer } from "mobx-react";

const CollapseIcon = observer(() => {
	const { isCollapse } = globalStore;

	return (
		<div
			className="collapsed"
			onClick={() => {
				globalStore.setIsCollapse(!isCollapse);
			}}
		>
			{isCollapse ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
		</div>
	);
});
export default CollapseIcon;
