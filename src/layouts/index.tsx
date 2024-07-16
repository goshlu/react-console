import { Outlet } from "react-router-dom";
// import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { Layout } from "antd";
import LayoutMenu from "./components/menu";
import LayoutHeader from "./components/header";
import LayoutTabs from "./components/tabs";
import LayoutFooter from "./components/footer";
import "./index.less";

const { Sider, Content } = Layout;

const LayoutIndex = () => {
	// const { pathname } = useLocation();

	return (
		<Layout>
			<Sider trigger={null} collapsible collapsed={false}>
				<LayoutMenu></LayoutMenu>
			</Sider>
			<Layout>
				<LayoutHeader></LayoutHeader>
				<LayoutTabs></LayoutTabs>
				<Content>
					{/* TransitionGroup 会导致 useEffect 加载两次 && 使用路由懒加载第一次进入没有动画，所以暂时不用过渡动画了 */}
					{/* <TransitionGroup className="container"> */}
					{/* exit：表示退出当前页面的时候是否有动画 */}
					{/* <CSSTransition key={pathname} timeout={200} classNames="fade" exit={false}> */}
					<Outlet></Outlet>
					{/* </CSSTransition> */}
					{/* </TransitionGroup> */}
				</Content>
				<LayoutFooter />
			</Layout>
		</Layout>
	);
};

export default LayoutIndex;
