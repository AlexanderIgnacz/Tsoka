import React, { Component, PropTypes } from "react";
import { StatusBar, StyleSheet, View } from "react-native";
import { SideMenu } from "AppComponents";
import { Routing } from "./routing";
import { NavigationActions } from "react-navigation";
import { BLACK_COLOR } from "AppColors";

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: BLACK_COLOR
	}
});

class _MainPage extends Component {
	static propTypes = {
		sidebar: PropTypes.any,
		showSideBar: PropTypes.func,
		disableSideBar: PropTypes.func,
		setCurrentScene: PropTypes.func,
		user: PropTypes.object,
	};

	constructor(props) {
		super(props);
		this.state = {};
		this.routingRef = null;
		StatusBar.setBarStyle("light-content", true);
	}

	componentDidMount() {
	}

	routingScene = sceneIndex => {
		const { sidebar } = this.props;
		switch (sceneIndex) {
			case 0:
				if (sidebar.currentScene === "HomeScene" || sidebar.currentScene === "HomeDetailScene") {
					return;
				} else {
					const genNavigateAction = NavigationActions.reset({
						index: 0,
						actions: [NavigationActions.navigate({ routeName: "Home" })]
					});
					this.routingRef.dispatch(genNavigateAction);
				}
				break;
			case 1:
				if (sidebar.currentScene === "ChatScene") {
					return;
				} else {
					const genNavigateAction = NavigationActions.reset({
						index: 0,
						actions: [NavigationActions.navigate({ routeName: "Chat" })]
					});
					this.routingRef.dispatch(genNavigateAction);
				}
				break;
      case 2:
        if (sidebar.currentScene === "CartScene") {
          return;
        } else {
          const genNavigateAction = NavigationActions.reset({
            index: 0,
            actions: [NavigationActions.navigate({ routeName: "Cart" })]
          });
          this.routingRef.dispatch(genNavigateAction);
        }
        break;
			case 3:
				if (sidebar.currentScene === "SettingsScene") {
					return;
				} else {
					const editNavigateAction = NavigationActions.reset({
						index: 0,
						actions: [NavigationActions.navigate({ routeName: "Settings" })]
					});
					this.routingRef.dispatch(editNavigateAction);
				}
				break;
			case 4:
				if (sidebar.currentScene === "PaymentsScene") {
					return;
				} else {
					const editNavigateAction = NavigationActions.reset({
						index: 0,
						actions: [
							NavigationActions.navigate({ routeName: "Payments" })
						]
					});
					this.routingRef.dispatch(editNavigateAction);
				}
				break;
			case 5:
				if (sidebar.currentScene === "BlogScene") {
					return;
				} else {
					const editNavigateAction = NavigationActions.reset({
						index: 0,
						actions: [NavigationActions.navigate({ routeName: "Blog" })]
					});
					this.routingRef.dispatch(editNavigateAction);
				}
				break;
			case 6:
				if (sidebar.currentScene === "AboutUsScene") {
					return;
				} else {
					const editNavigateAction = NavigationActions.reset({
						index: 0,
						actions: [
							NavigationActions.navigate({ routeName: "AboutUs" })
						]
					});
					this.routingRef.dispatch(editNavigateAction);
				}
				break;
			case 7:
        const resetAction = NavigationActions.reset({
          index: 0,
          actions: [NavigationActions.navigate({ routeName: 'Login' })],
        });
        this.routingRef.dispatch(resetAction);
				break;
			default:
				break;
		}
	};

	setCurrentScene = scene => {
		this.props.setCurrentScene(scene);
	};

	showSideBar = bFlag => {
		this.props.showSideBar(bFlag);
	};

	disableSideBar = bFlag => {
		this.props.disableSideBar(bFlag);
	};

	render() {
		const { sidebar, user } = this.props;
		let containerStyle = styles.container;
		if (sidebar.currentScene === "LoginScene") {
			containerStyle = [styles.container, { paddingTop: 0 }];
		}
		return (
			<View style={containerStyle}>
				<SideMenu
					isOpen={sidebar.showSidebar}
					disable={sidebar.disableSidebar}
					routeScene={this.routingScene}
					setCurrentScene={this.setCurrentScene}
					currentScene={sidebar.currentScene}
					showSideBar={this.showSideBar}
					disableSideBar={this.disableSideBar}
					user={user}
					sidebar={this.props.sidebar}
				>
					<Routing ref={ref => (this.routingRef = ref)} />
				</SideMenu>
			</View>
		);
	}
}

import { sideBarContainer, userContainer } from "ReduxContainers";
const MainPage1 = sideBarContainer(_MainPage);
const MainPage = userContainer(MainPage1);
export default MainPage;
