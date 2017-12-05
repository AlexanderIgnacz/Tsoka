import React, { Component, PropTypes } from "react";
import {
	View,
	Image,
	Platform,
	StyleSheet,
	Text,
	TextInput,
	TouchableOpacity,
	StatusBar,
	ActivityIndicator,
} from "react-native";
import { NavigationActions } from 'react-navigation';
import AppConfig from "AppConfig";
import { RequestApi, GlobalStorage } from "AppUtilities";
import { PRIMARY_COLOR, SECONDARY_COLOR, THIRD_COLOR, FOURTH_COLOR } from "AppColors";
import { ToggleButton } from "AppComponents";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const styles = StyleSheet.create({
	container: {
		flex: 1,
    width: AppConfig.windowWidth,
    height: AppConfig.windowHeight,
		backgroundColor: PRIMARY_COLOR,
	},
  subcontainer1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  subcontainer2: {
    flex: 1.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  subcontainer3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  img: {
    width: AppConfig.windowWidth * 0.4,
    height: (AppConfig.windowWidth * 0.4) * 91 / 197,
    marginTop: 30,
  },
  emailInputContainer: {
    width: AppConfig.windowWidth * 0.8,
    height: 40,
    marginBottom: 30,
  },
  passInputContainer: {
    width: AppConfig.windowWidth * 0.8,
    height: 40,
    marginBottom: 10,
  },
  rememberMeContainer: {
    width: AppConfig.windowWidth * 0.8,
    height: 22,
    flexDirection: 'row',
    paddingHorizontal: 15,
    marginBottom: 40,
  },
  emailInput: {
    width: AppConfig.windowWidth * 0.8,
    height: 40,
    borderRadius: 20,
    borderColor: SECONDARY_COLOR,
    borderWidth: 1,
    paddingLeft: 45,
    fontSize: 16,
    color: SECONDARY_COLOR
  },
  emailInputIcon: {
	  position: 'absolute',
	  width: 23,
    height: 16,
    resizeMode: 'contain',
    marginTop: 12,
    marginLeft: 15,
  },
  passInputIcon: {
    position: 'absolute',
    width: 16,
    height: 22,
    resizeMode: 'contain',
    marginTop: 9,
    marginLeft: 20,
  },
  rememberMeText: {
	  textAlign: 'center',
    fontSize: 16,
    marginTop: 2,
    marginLeft: 10,
    color: SECONDARY_COLOR,
    fontFamily: "Helvetica Neue"
	},
  loginButton: {
    width: AppConfig.windowWidth * 0.8 - 30,
    height: 40,
    backgroundColor: THIRD_COLOR,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  fbButton: {
    width: AppConfig.windowWidth * 0.8 - 30,
    height: 40,
    backgroundColor: FOURTH_COLOR,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    flexDirection: 'row'
  },
  fb: {
	  width: 8,
    height: 18,
  },
  signup: {
    width: AppConfig.windowWidth * 0.8,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    flexDirection: 'row',
    marginTop: 20
  }
});

class _LoginScene extends Component {
	static propTypes = {
	};

	static navigationOptions = {
		title: "LoginScene",
		header: null,
		gesturesEnabled: Platform.OS !== "ios"
	};

	constructor(props, context) {
		super(props, context);
		this.state = {
			isLoading: false,
      remember: false,
		};
	}

  onRegister = () => {
    const { navigation } = this.props;
    const resetAction = NavigationActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({ routeName: 'Register' })],
    });
    navigation.dispatch(resetAction);
  };

	componentDidMount() {
		this.props.showSideBar(false);
		this.props.disableSideBar(true);
		this.props.setCurrentScene("LoginScene");
	}
  
  onChangeRemember = () => {
	  this.setState({ remember: !this.state.remember })
  };
  

	render() {
	  const { remember } = this.state;
		return (
      <KeyboardAwareScrollView style={{ backgroundColor: PRIMARY_COLOR }}>
  			<View style={styles.container}>
          <View style={styles.subcontainer1}>
            <Image style={styles.img} source={require('img/img_splash_icon.png')} />
          </View>
          <View style={styles.subcontainer2}>
            <View style={styles.emailInputContainer}>
              <TextInput style={styles.emailInput} placeholder="Email"/>
              <Image style={styles.emailInputIcon} source={require('img/img_login_email.png')}/>
            </View>
            <View style={styles.passInputContainer}>
              <TextInput style={styles.emailInput} placeholder="Password"/>
              <Image style={styles.passInputIcon} source={require('img/img_login_pass.png')}/>
            </View>
            <View style={styles.rememberMeContainer}>
              <ToggleButton isEnabled={remember} onChange={this.onChangeRemember}/>
              <Text style={styles.rememberMeText}>Remember Me</Text>
            </View>
            <TouchableOpacity style={styles.loginButton}>
              <Text style={{ color: 'white', fontSize: 18 }}>Sign In</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.subcontainer3}>
            <TouchableOpacity style={styles.fbButton}>
              <Image style={styles.fb} source={require('img/img_login_fb.png')} />
              <Text style={{ color: 'white', marginLeft: 10, fontSize: 16 }}>Continue with Facebook</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.signup} onPress={this.onRegister}>
              <Text style={{ color: SECONDARY_COLOR, fontSize: 16 }}>Don't have an account? Sign up</Text>
            </TouchableOpacity>
          </View>
  			</View>
      </KeyboardAwareScrollView>
		);
	}
}

import { sideBarContainer } from "ReduxContainers";
const LoginScene = sideBarContainer(_LoginScene);
export default LoginScene;
