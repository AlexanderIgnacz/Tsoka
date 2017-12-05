import React, { Component, PropTypes } from "react";
import {
	View,
	StyleSheet,
	Image,
	TouchableOpacity,
	ListView,
	NativeModules,
	ActivityIndicator,
	Text,
} from "react-native";
import AppConfig from "AppConfig";
import {
	ORANGE_COLOR,
	DARK_COLOR,
	DARKBLACK_COLOR,
	YELLOW_COLOR,
  PRIMARY_COLOR,
  SECONDARY_COLOR,
} from "AppColors";
import { GlobalStorage, RequestApi } from "AppUtilities";

const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	headerContainer: {
		height: 150,
		paddingTop: 10,
		backgroundColor: SECONDARY_COLOR,
		flexDirection: "row",
    justifyContent: 'center',
		alignItems: "center",
	},
	boldText: {
		fontWeight: "bold",
		lineHeight: 20,
    color: "white",
    fontSize: 13,
    marginLeft: 10
	},
	headerSubContainer: {
		marginTop: 5,
		flexDirection: "row",
		alignItems: "center"
	},
	italicText: {
		fontStyle: "italic"
	},
	space: {
		flex: 1
	},
	downIcon: {
		width: 12,
		height: 9,
		resizeMode: "stretch"
	},
	downContainer: {
		width: 30,
		height: 30,
		alignItems: "flex-end",
		justifyContent: "center"
	},
	contentContainer: {
		flex: 1,
		backgroundColor: SECONDARY_COLOR,
		paddingTop: 15,
	},
	sportsContainer: {
		height: 60,
		backgroundColor: DARKBLACK_COLOR,
		paddingHorizontal: 5,
		flexDirection: "row",
		alignItems: "center"
	},
	logoImg: {
		width: 145,
		height: 25,
		resizeMode: "stretch"
	},
	smallSpace: {
		width: 15
	},
	launchContainer: {
		marginTop: 5
	},
	itemContainer: {
		height: 50,
		paddingHorizontal: 15,
		flexDirection: 'row',
	},
	avatarImg: {
		width: 40,
		height: 40,
		borderRadius: 20
	},
	nameContainer: {
		marginLeft: 15
	},
	loadingScene: {
		position: "absolute",
		width: AppConfig.windowWidth,
		height: AppConfig.windowHeight,
		alignSelf: "stretch",
		backgroundColor: "rgba(0,0,0,0.5)",
		alignItems: "center",
		justifyContent: "center"
	},
});

export class Menu extends Component {
	static propTypes = {
		routeScene: PropTypes.any.isRequired,
		showSideBar: PropTypes.func.isRequired,
		disableSideBar: PropTypes.func.isRequired,
		setCurrentScene: PropTypes.func.isRequired,
		currentScene: PropTypes.any.isRequired,
		isOpen: React.PropTypes.bool,
		user: PropTypes.object,
		sidebar: PropTypes.object,
	};
	static defaultProps = {
		isOpen: false
	};

	constructor(props, context) {
		super(props, context);
		this.state = {
			isShowSortsContainer: false,
			MENU_ITEMS: [
				{ index: 1, title: "Chat" },
				{ index: 2, title: "Cart" },
				{ index: 3, title: "Settings" },
				{ index: 4, title: "Payments" },
				{ index: 5, title: "Blog" },
				{ index: 6, title: "About Us" },
				{ index: 7, title: "Log Out" }
			],
			isLoading: false,
		};
		this.dataSource = new ListView.DataSource({
			rowHasChanged: (r1, r2) => r1 !== r2
		});
	}

	componentWillReceiveProps(nextProps) {
		this.setState({ isShowSortsContainer: false, MENU_ITEMS: [
      { index: 1, title: "Chat" },
      { index: 2, title: "Cart" },
      { index: 3, title: "Settings" },
      { index: 4, title: "Payments" },
      { index: 5, title: "Blog" },
      { index: 6, title: "About Us" },
      { index: 7, title: "Log Out" }
		], });
	}

	componentDidMount() {
	}

  onShowHome = () => {
		this.props.routeScene(0);
		this.props.showSideBar(false);
	};

	onShowMenu = item => {
		this.props.routeScene(item.index);
		this.props.showSideBar(false);
	};

	renderHeader = () => {
		return (
			<View style={styles.headerContainer}>
				<TouchableOpacity
					onPress={this.onShowHome}
				>
          <Image source={require('img/img_splash_icon.png')} style={{ width: AppConfig.windowWidth * 0.4, height: AppConfig.windowWidth * 0.4 * 91 / 197, resizeMode: 'cover' }} />
				</TouchableOpacity>
			</View>
		);
	};

	renderMenuItem = menuItem => {
	  let render_image = [];

	  if (menuItem.title === "Chat") {
      render_image.push(
        <Image key="render_image_home" source={require('img/img_sidemenu_chat.png')} style={{ width: 20, height: 19, resizeMode: 'cover'}} />
      );
    }
    
    if (menuItem.title === "Cart") {
      render_image.push(
        <Image key="render_image_cart" source={require('img/img_sidemenu_cart.png')} style={{ width: 20, height: 20, resizeMode: 'cover'}} />
      );
    }
    
    if (menuItem.title === "Settings") {
      render_image.push(
        <Image key="render_image_settings" source={require('img/img_sidemenu_settings.png')} style={{ width: 20, height: 20, resizeMode: 'cover'}} />
      );
    }
    
    if (menuItem.title === "Payments") {
      render_image.push(
        <Image key="render_image_payments" source={require('img/img_sidemenu_payments.png')} style={{ width: 20, height: 16, resizeMode: 'cover', marginTop: 2}} />
      );
    }
    
    if (menuItem.title === "Blog") {
      render_image.push(
        <Image key="render_image_blog" source={require('img/img_sidemenu_blog.png')} style={{ width: 20, height: 20, resizeMode: 'cover'}} />
      );
    }
    
    if (menuItem.title === "About Us") {
      render_image.push(
        <Image key="render_image_aboutus" source={require('img/img_sidemenu_info.png')} style={{ width: 20, height: 20, resizeMode: 'cover'}} />
      );
    }
    
    if (menuItem.title === "Log Out") {
      render_image.push(
        <Image key="render_image_logout" source={require('img/img_sidemenu_logout.png')} style={{ width: 20, height: 20, resizeMode: 'cover'}} />
      );
    }
    
		return (
			<TouchableOpacity
				style={styles.itemContainer}
				onPress={() => this.onShowMenu(menuItem)}
			>
        { render_image }
				<Text style={styles.boldText}>
					{menuItem.title}
				</Text>
				{
					menuItem.title === "News Update" &&
						<View style={{width: 20, height: 20, borderRadius: 10, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center', marginLeft: 20, }}>
							<Text>1</Text>
						</View>
				}
			</TouchableOpacity>
		);
	};

	renderContent = () => {
		const { MENU_ITEMS } = this.state;
		const dataSource = this.dataSource.cloneWithRows(MENU_ITEMS);
		return (
			<View style={styles.contentContainer}>
				<ListView
					dataSource={dataSource}
					enableEmptySections={true}
					renderRow={this.renderMenuItem}
				/>
			</View>
		);
	};

	render() {
		const { isLoading } = this.state;
		return (
			<View style={styles.container}>
				{this.renderHeader()}
				{this.renderContent()}
				{
					isLoading &&
					<View style={styles.loadingScene}>
						<ActivityIndicator animating={true} size="small" color="white" />
					</View>
				}
			</View>
		);
	}
}
