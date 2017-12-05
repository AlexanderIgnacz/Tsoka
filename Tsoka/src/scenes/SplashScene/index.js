import React, { PropTypes, Component } from "react";
import {
	View,
	StatusBar,
	Platform,
	StyleSheet,
	Animated,
	Image
} from "react-native";
import { GlobalStorage, RequestApi, MakeCancelable } from "AppUtilities";
import { NavigationActions } from 'react-navigation';
import AppConfig from "AppConfig";
import { PRIMARY_COLOR } from "AppColors";

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: PRIMARY_COLOR
	},
  img: {
		position: 'absolute',
		width: AppConfig.windowWidth * 0.53,
		height: (AppConfig.windowWidth * 0.53) * 91 / 197,
    left: AppConfig.windowWidth * 0.47 / 2,
		top: (AppConfig.windowHeight - (AppConfig.windowWidth * 0.53) * 91 / 197) / 2 - 30,
		resizeMode: 'contain'
	}
});

class SplashScene extends Component {
	static propTypes = {
	};
	static navigationOptions = {
		title: "SplashScene",
		header: null,
		gesturesEnabled: Platform.OS !== "ios"
	};

	constructor(props, context) {
		super(props, context);
		this.state = {
		};
		this.state = {
			fadeAnim: new Animated.Value(0)
		};

		this.apiPromise = null;
	}

	async componentDidMount() {
		const { navigation } = this.props;
		const isFirst = await GlobalStorage.getItem(AppConfig.stor_isFirst);
		setTimeout(() => {
			// if (isFirst === "true") {
			// 	const resetAction = NavigationActions.reset({
			// 		index: 0,
			// 		actions: [NavigationActions.navigate({ routeName: 'Main' })],
			// 	});
			// 	navigation.dispatch(resetAction);
			// } else {
				const resetAction = NavigationActions.reset({
					index: 0,
					actions: [NavigationActions.navigate({ routeName: 'Home' })],
				});
				navigation.dispatch(resetAction);
			// }
		}, 500);
	}

	render() {
		return (
			<View style={styles.container}>
				<Image style={styles.img} source={require('img/img_splash_icon.png')}/>
			</View>
		);
	}
}

export default SplashScene;
