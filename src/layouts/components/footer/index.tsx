import "./index.less";
import { GithubOutlined } from "@ant-design/icons";
import { DefaultFooter } from "@ant-design/pro-components";

const LayoutFooter = () => {
	return (
		<DefaultFooter
			className="site-footer"
			copyright={false}
			links={[
				{
					key: "source-code",
					title: "Source Code",
					href: "https://baidu.com",
					blankTarget: true
				},
				{
					key: "github",
					title: <GithubOutlined />,
					href: "https://google.com",
					blankTarget: true
				},
				{
					key: "Preview",
					title: "Preview",
					href: "https://taobao.com",
					blankTarget: true
				}
			]}
		/>
	);
};

export default LayoutFooter;
