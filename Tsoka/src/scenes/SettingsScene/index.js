import React, { Component, PropTypes } from "react";
import {
  View,
  Image,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  ListView,
  ScrollView,
  Animated
} from "react-native";
import AppConfig from "AppConfig";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { PRIMARY_COLOR, SECONDARY_COLOR, THIRD_COLOR, FOURTH_COLOR } from "AppColors";
import { HeaderBar } from "AppComponents";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: PRIMARY_COLOR
  },
});

class _SettingsScene extends Component {
  static propTypes = {
  };
  
  static navigationOptions = {
    title: "SettingsScene",
    header: null,
    gesturesEnabled: Platform.OS !== "ios"
  };
  
  constructor(props, context) {
    super(props, context);
    this.state = {
    }
  }
  
  componentDidMount() {
    this.props.showSideBar(false);
    this.props.disableSideBar(false);
    this.props.setCurrentScene("SettingsScene");
  }
  
  onBack = () => {
    this.props.setCurrentScene("");
    this.props.navigation.goBack();
  };
  
  render() {
    return (
      <View style={styles.container}>
        <HeaderBar cenTitle="Settings" back={this.onBack}/>
        <KeyboardAwareScrollView>
        </KeyboardAwareScrollView>
      </View>
    );
  }
}

import { sideBarContainer } from "ReduxContainers";
const SettingsScene = sideBarContainer(_SettingsScene);
export default SettingsScene;
