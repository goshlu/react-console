import { useState } from "react";
import { Tooltip, Drawer, Row, Col, Divider, Button } from "antd";
import { SettingOutlined, FireOutlined } from "@ant-design/icons";
import type { DrawerProps, ButtonProps } from "antd";
import { DarkModeToggle, WeakModeSwitch, GrayModeSwitch } from "../themeModeSwitch";
import { ThemeColorSelect } from "../themeColors";
import "./index.less";

export default function LocalSettingsHeaderButton() {
	const [isOpen, setOpen] = useState(false);
	return (
		<>
			<LocalSettingsBtn onClick={() => setOpen(true)} />
			<LocalSettingsDrawer open={isOpen} onClose={() => setOpen(false)} />
		</>
	);
}

function LocalSettingsBtn({ onClick }: ButtonProps) {
	return (
		<Tooltip placement="bottomRight" title="本地设置" arrowPointAtCenter>
			<Button
				shape="circle"
				block
				style={{ border: "none", backgroundColor: "transparent", fontSize: 14 }}
				icon={<SettingOutlined />}
				onClick={onClick}
			/>
		</Tooltip>
	);
}

function LocalSettingsDrawer(props: DrawerProps) {
	return (
		<Drawer title="系统本地设置" placement="right" {...props}>
			<Row align="top" justify="center">
				<Col span={24}>
					<Divider className="divider">
						<FireOutlined />
						整体风格
					</Divider>
				</Col>
				<Col span={24}>
					<Row justify="space-between" className="currentTheme">
						<Col>
							<span>暗黑模式</span>
						</Col>
						<Col>
							<DarkModeToggle />
						</Col>
					</Row>
				</Col>
				<Col span={24}>
					<Row justify="space-between" className="currentTheme">
						<Col>
							<span>灰色模式</span>
						</Col>
						<Col>
							<GrayModeSwitch />
						</Col>
					</Row>
				</Col>
				<Col span={24}>
					<Row justify="space-between" className="currentTheme">
						<Col>
							<span>色弱模式</span>
						</Col>
						<Col>
							<WeakModeSwitch />
						</Col>
					</Row>
				</Col>
				<Col span={24}>
					<Divider className="divider">
						<FireOutlined />
						主题色
					</Divider>
				</Col>
				<Col>
					<ThemeColorSelect />
				</Col>
			</Row>
		</Drawer>
	);
}
