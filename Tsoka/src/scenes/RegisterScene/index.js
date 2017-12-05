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
    backgroundColor: PRIMARY_COLOR,
  },
  subcontainer2: {
    alignItems: 'center',
    paddingTop: 56,
    paddingBottom: 25,
  },
  emailInputContainer: {
    width: AppConfig.windowWidth * 0.8,
    height: 40,
    marginTop: 10,
  },
  emailInput: {
    width: AppConfig.windowWidth * 0.8,
    height: 40,
    borderRadius: 20,
    borderColor: SECONDARY_COLOR,
    borderWidth: 1,
    paddingLeft: 10,
    color: SECONDARY_COLOR,
    fontSize: 16
  },
  loginButton: {
    width: AppConfig.windowWidth * 0.8 - 30,
    height: 40,
    backgroundColor: THIRD_COLOR,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    marginTop: 51,
  },
  fbButton: {
    width: AppConfig.windowWidth * 0.8 - 30,
    height: 40,
    backgroundColor: FOURTH_COLOR,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    flexDirection: 'row',
    marginTop: 60,
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
    marginTop: 44
  },
  rememberMeContainer: {
    width: AppConfig.windowWidth * 0.8,
    height: 22,
    flexDirection: 'row',
    marginTop: 5,
  },
  rememberMeText: {
    textAlign: 'center',
    fontSize: 12,
    marginTop: 4,
    marginLeft: 5,
    color: SECONDARY_COLOR,
    fontFamily: "Helvetica Neue"
  },
});

class _RegisterScene extends Component {
  static propTypes = {
  };
  
  static navigationOptions = {
    title: "RegisterScene",
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
  
  componentDidMount() {
    this.props.showSideBar(false);
    this.props.disableSideBar(true);
    this.props.setCurrentScene("RegisterScene");
  }
  
  onLogin = () => {
    const { navigation } = this.props;
    const resetAction = NavigationActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({ routeName: 'Login' })],
    });
    navigation.dispatch(resetAction);
  };
  
  onSignup = () => {
    const { navigation } = this.props;
    const resetAction = NavigationActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({ routeName: 'Confirmation' })],
    });
    navigation.dispatch(resetAction);
  };
  
  render() {
    return (
      <KeyboardAwareScrollView style={{ backgroundColor: PRIMARY_COLOR }}>
        <View style={styles.container}>
          
          <View style={styles.subcontainer2}>
            
            <Text style={{ color: SECONDARY_COLOR, fontSize: 18 }}>Please fill your information</Text>
            
            <View style={{ width: AppConfig.windowWidth * 0.8, height: 40, justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row', marginTop: 48 }}>
              <TextInput style={{ width: AppConfig.windowWidth * 0.4 - 5, height: 40, borderRadius: 20, borderColor: SECONDARY_COLOR, color: SECONDARY_COLOR, borderWidth: 1, fontSize: 16, paddingLeft: 10 }} placeholder="First Name"/>
              <TextInput style={{ width: AppConfig.windowWidth * 0.4 - 5, height: 40, borderRadius: 20, borderColor: SECONDARY_COLOR, color: SECONDARY_COLOR, borderWidth: 1, fontSize: 16, paddingLeft: 10 }} placeholder="Last Name"/>
            </View>
            
            <View style={styles.emailInputContainer}>
              <TextInput style={styles.emailInput} placeholder="Username"/>
            </View>
            <View style={styles.emailInputContainer}>
              <TextInput style={styles.emailInput} placeholder="Phone/Email"/>
            </View>
            <View style={styles.emailInputContainer}>
              <TextInput style={styles.emailInput} placeholder="Password"/>
            </View>
            <View style={styles.emailInputContainer}>
              <TextInput style={styles.emailInput} placeholder="Confirm Password"/>
            </View>
            
            <TouchableOpacity style={styles.loginButton} onPress={this.onSignup}>
              <Text style={{ color: 'white', fontSize: 18 }}>Sign up</Text>
            </TouchableOpacity>
            <View style={styles.rememberMeContainer}>
              <TouchableOpacity>
                <Image style={{ width: 18, height: 18, marginTop: 2 }} source={require('img/img_login_checkoff.png')}/>
              </TouchableOpacity>
              <Text style={styles.rememberMeText}>I agree to the terms of service and privacy policy.</Text>
            </View>
            
            <TouchableOpacity style={styles.fbButton}>
              <Image style={styles.fb} source={require('img/img_login_fb.png')} />
              <Text style={{ color: 'white', marginLeft: 10, fontSize: 16 }}>Continue with Facebook</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.signup} onPress={this.onLogin}>
              <Text style={{ color: SECONDARY_COLOR, fontSize: 16 }}>Already have an account? Sign in</Text>
            </TouchableOpacity>
            
          </View>
        </View>
      </KeyboardAwareScrollView>
    );
  }
}

import { sideBarContainer } from "ReduxContainers";
const RegisterScene = sideBarContainer(_RegisterScene);
export default RegisterScene;
