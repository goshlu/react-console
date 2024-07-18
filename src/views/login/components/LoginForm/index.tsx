import { Button, Form, Input } from "antd";
import { observer } from "mobx-react";
import { UserOutlined, LockOutlined, CloseCircleOutlined } from "@ant-design/icons";

const LoginForm = observer(() => {
	const [form] = Form.useForm();

	// login
	const onFinish = () => {};
	// 提交失败的情况
	const onFinishFailed = (errorInfo: any) => {
		console.log("Failed:", errorInfo);
	};

	return (
		<Form
			form={form}
			name="basic"
			labelCol={{ span: 5 }}
			initialValues={{ remember: true }}
			onFinish={onFinish}
			onFinishFailed={onFinishFailed}
			size="large"
			autoComplete="off"
		>
			<Form.Item name="username" rules={[{ required: true, message: "请输入用户名" }]}>
				<Input placeholder="请输入用户名" prefix={<UserOutlined />} />
			</Form.Item>
			<Form.Item name="password" rules={[{ required: true, message: "请输入密码" }]}>
				<Input.Password autoComplete="new-password" placeholder="请输入用户名" prefix={<LockOutlined />} />
			</Form.Item>
			<Form.Item className="login-btn">
				<Button
					onClick={() => {
						form.resetFields();
					}}
					icon={<CloseCircleOutlined />}
				>
					重置
				</Button>
				<Button type="primary" htmlType="submit" icon={<UserOutlined />}>
					登录
				</Button>
			</Form.Item>
		</Form>
	);
});

export default LoginForm;
