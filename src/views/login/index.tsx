import "./index.less";
import LoginForm from "./components/LoginForm";
import logo from "@/assets/images/logo.png";

const Login = () => {
	return (
		<div className="login-container">
			<div className="login-box">
				<div className="login-form">
					<div className="login-logo">
						<img className="login-icon" src={logo} alt="logo" />
						<span className="logo-text">React-Console</span>
					</div>
					<LoginForm />
				</div>
			</div>
		</div>
	);
};

export default Login;
