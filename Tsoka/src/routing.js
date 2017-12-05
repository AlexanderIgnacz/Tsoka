import React from "react";
import { StackNavigator } from "react-navigation";
import { Text, TextInput } from "react-native";
import {
	SplashScene,
	LoginScene,
  RegisterScene,
  ConfirmationScene,
  HomeScene,
  HomeDetailScene,
  CartScene,
  ChatScene,
  SettingsScene,
  PaymentsScene,
  BlogScene,
  AboutUsScene,
  TanovaSubmitScene,
} from "AppScenes";

Text.defaultProps = {
	allowFontScaling: false
};

TextInput.defaultProps = {
	underlineColorAndroid: "transparent"
};

export const Routing = StackNavigator({
	initialRouteName: { screen: SplashScene },
	Splash: { screen: SplashScene },
  Login: { screen: LoginScene },
  Register: { screen: RegisterScene },
  Confirmation: { screen: ConfirmationScene },
  Home: { screen: HomeScene },
  Cart: { screen: CartScene },
  Chat: { screen: ChatScene },
  Settings: { screen: SettingsScene },
  Payments: { screen: PaymentsScene },
  Blog: { screen: BlogScene },
  AboutUs: { screen: AboutUsScene },
  TanovaSubmit: { screen: TanovaSubmitScene },
  HomeDetail: { screen: HomeDetailScene },
});
