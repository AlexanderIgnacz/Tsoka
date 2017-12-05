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

class _BlogScene extends Component {
  static propTypes = {
  };
  
  static navigationOptions = {
    title: "BlogScene",
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
    this.props.setCurrentScene("BlogScene");
  }
  
  onBack = () => {
    this.props.setCurrentScene("");
    this.props.navigation.goBack();
  };
  
  render() {
    return (
      <View style={styles.container}>
        <HeaderBar cenTitle="Blog" back={this.onBack}/>
        <KeyboardAwareScrollView>
        </KeyboardAwareScrollView>
      </View>
    );
  }
}

import { sideBarContainer } from "ReduxContainers";
const BlogScene = sideBarContainer(_BlogScene);
export default BlogScene;
