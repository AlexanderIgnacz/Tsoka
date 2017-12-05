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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: PRIMARY_COLOR,
  },
  subcontainer2: {
    alignItems: 'center',
    marginTop: 50,
    paddingHorizontal: 25,
  },
});

class _ConfirmationScene extends Component {
  static propTypes = {
  };
  
  static navigationOptions = {
    title: "ConfirmationScene",
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
    this.props.setCurrentScene("ConfirmationScene");
  }
  
  onDone = () => {
    const { navigation } = this.props;
    const resetAction = NavigationActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({ routeName: 'Home' })],
    });
    navigation.dispatch(resetAction);
  };
  
  render() {
    return (
      <View style={styles.container}>
    
        <View style={styles.subcontainer2}>
      
          <Text style={{ color: SECONDARY_COLOR, fontSize: 18 }}>Confirmation</Text>
          <Text style={{ color: SECONDARY_COLOR, fontSize: 16, textAlign: 'center', marginTop: 31 }}>Enter confirmation code. A verification is sent to provided contact number/Email, please enter that code here</Text>
          <View style={{ height: 50, justifyContent: 'center', alignItems: 'center', marginTop: 24, flexDirection: 'row' }}>
            <TextInput style={{ width: 50, height: 50, borderRadius: 25, borderWidth: 1, borderColor: SECONDARY_COLOR, textAlign: 'center', color: SECONDARY_COLOR, fontSize: 24, marginHorizontal: 8 }} />
            <TextInput style={{ width: 50, height: 50, borderRadius: 25, borderWidth: 1, borderColor: SECONDARY_COLOR, textAlign: 'center', color: SECONDARY_COLOR, fontSize: 24, marginHorizontal: 8 }} />
            <TextInput style={{ width: 50, height: 50, borderRadius: 25, borderWidth: 1, borderColor: SECONDARY_COLOR, textAlign: 'center', color: SECONDARY_COLOR, fontSize: 24, marginHorizontal: 8 }} />
            <TextInput style={{ width: 50, height: 50, borderRadius: 25, borderWidth: 1, borderColor: SECONDARY_COLOR, textAlign: 'center', color: SECONDARY_COLOR, fontSize: 24, marginHorizontal: 8 }} />
          </View>
          
          <TouchableOpacity style={{ padding: 20, marginTop: 10 }}>
            <Text style={{ color: SECONDARY_COLOR, fontSize: 14 }}>Didn’t recive code? Send again</Text>
          </TouchableOpacity>
          
          <TouchableOpacity
            style={{ backgroundColor: THIRD_COLOR, justifyContent: 'center', alignItems: 'center', width: AppConfig.windowWidth * 0.73, height: 40, borderRadius: 20, marginTop: 30 }}
            onPress={this.onDone}
          >
            <Text style={{ color: 'white', fontSize: 18 }}>Done</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

import { sideBarContainer } from "ReduxContainers";
const ConfirmationScene = sideBarContainer(_ConfirmationScene);
export default ConfirmationScene;
