import { Avatar, Modal, Dropdown, message, type MenuProps } from "antd";
import { ExclamationCircleOutlined, FormOutlined, PoweroffOutlined, IdcardOutlined, DownOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import avatar from "@/assets/images/avatar.png";

const enum PersonalCenterMenuKeys {
	MyInfo = "MYINFO",
	ModifyPassword = "MODIFYPASSWORD",
	Logout = "LOGOUT"
}
const PersonalCenter = () => {
	const navigate = useNavigate();

	const items: MenuProps["items"] = [
		{
			key: PersonalCenterMenuKeys.MyInfo,
			label: "我的信息",
			icon: <IdcardOutlined />
		},
		{
			key: PersonalCenterMenuKeys.ModifyPassword,
			label: "修改密码",
			icon: <FormOutlined />
		},
		{ type: "divider" },
		{
			key: PersonalCenterMenuKeys.Logout,
			danger: true,
			label: "退出登录",
			icon: <PoweroffOutlined />
		}
	];
	// 退出登录
	const logout = () => {
		Modal.confirm({
			title: "温馨提示 🧡",
			icon: <ExclamationCircleOutlined />,
			content: "是否确认退出登录？",
			okText: "确认",
			cancelText: "取消",
			onOk: () => {
				message.success("退出登录成功！");
				navigate("/login");
			}
		});
	};

	return (
		<>
			<Dropdown
				menu={{
					items,
					style: { width: 110 },
					onClick: e => {
						switch (e.key) {
							case PersonalCenterMenuKeys.MyInfo:
								break;
							case PersonalCenterMenuKeys.ModifyPassword:
								break;
							case PersonalCenterMenuKeys.Logout:
								// 清除数据（如：localStorage）中的所有数据
								logout();
								break;
						}
					}
				}}
				placement="bottom"
				arrow
				trigger={["hover"]}
			>
				<div
					style={{
						display: "flex",
						alignItems: "center",
						cursor: "pointer"
					}}
				>
					<Avatar size="large" src={avatar} />
					<span
						style={{
							margin: "0 10px"
						}}
						className="username"
					>
						Hooks
					</span>
					<DownOutlined />
				</div>
			</Dropdown>
		</>
	);
};

export default PersonalCenter;
