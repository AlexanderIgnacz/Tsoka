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

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

class _TanovaSubmitScene extends Component {
  static propTypes = {
  };
  
  static navigationOptions = {
    title: "TanovaSubmitScene",
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
    this.props.setCurrentScene("TanovaSubmitScene");
  }
  
  onBack = () => {
    this.props.setCurrentScene("");
    this.props.navigation.goBack();
  };
  
  render() {
    return (
      <View style={styles.container}>
        <Image source={require('img/img_tanova_back.png')} style={{ width: AppConfig.windowWidth, height: AppConfig.windowHeight, position: 'absolute' }}/>
        <Image
          source={require('img/icon_back.png')}
          style={{ width: 13, height: 22, marginLeft: 10, marginTop: 35 }}
        />
        <View style={{ alignItems: 'center' }}>
          <Text style={{ color: 'white', fontSize: 24, backgroundColor: 'transparent' }}>WELCOME TO,</Text>
          <Text style={{ color: 'white', fontSize: 24, backgroundColor: 'transparent' }}>TANOVA</Text>
        </View>
        <KeyboardAwareScrollView>
          <View style={{ alignItems: 'center', marginTop: 30, height: 90 }}>
            <View style={{ width: AppConfig.windowWidth - 50, height: 44, backgroundColor: '#F4B44C', opacity: 0.5, position: 'absolute', borderTopLeftRadius: 8, borderTopRightRadius: 8 }}/>
            <TextInput style={{ width: AppConfig.windowWidth - 50, height: 44, position: 'absolute', color: 'white', paddingHorizontal: 15, fontSize: 18 }}/>
            <View style={{ width: AppConfig.windowWidth - 50, paddingHorizontal: 10, height: 44, backgroundColor: '#F4B44C', opacity: 0.5, marginTop: 45, position: 'absolute', borderBottomLeftRadius: 8, borderBottomRightRadius: 8 }}/>
            <TextInput style={{ width: AppConfig.windowWidth - 50, height: 44, position: 'absolute', color: 'white', marginTop: 45, paddingHorizontal: 15, fontSize: 18 }}/>
          </View>
          
          <Text style={{ color: 'white', fontSize: 18, marginTop: 15, backgroundColor: 'transparent', marginLeft: 15 }}>SELECT TRAVEL DATES:</Text>
          
          <View style={{ marginTop: 15, height: 45, width: AppConfig.windowWidth }}>
            <View style={{ position: 'absolute', height: 45, width: AppConfig.windowWidth, justifyContent: 'space-between', flexDirection: 'row', paddingHorizontal: 15 }}>
              <View style={{ width: 130, height: 45, backgroundColor: '#F4B44C', opacity: 0.5, borderRadius: 8, paddingLeft: 10 }}/>
              <View style={{ width: 130, height: 45, backgroundColor: '#F4B44C', opacity: 0.5, borderRadius: 8 }}/>
            </View>
            <View style={{ position: 'absolute', height: 45, width: AppConfig.windowWidth, justifyContent: 'space-between', flexDirection: 'row', paddingHorizontal: 15 }}>
              <View style={{ width: 130, height: 45, borderRadius: 8, justifyContent: 'center', paddingLeft: 10 }}>
                <Text style={{ backgroundColor: 'transparent', color: 'white', fontSize: 14 }}>Check-Out</Text>
                <Text style={{ backgroundColor: 'transparent', color: 'white', fontSize: 13 }}>dd-mm-yy</Text>
                <Image source={require('img/img_home_detail_cart_cal.png')} style={{ width: 20, height: 20, position: 'absolute', right: 10 }}/>
              </View>
              <View style={{ width: 130, height: 45, borderRadius: 8, justifyContent: 'center', paddingLeft: 10 }}>
                <Text style={{ backgroundColor: 'transparent', color: 'white', fontSize: 14 }}>Check-In</Text>
                <Text style={{ backgroundColor: 'transparent', color: 'white', fontSize: 13 }}>dd-mm-yy</Text>
                <Image source={require('img/img_home_detail_cart_cal.png')} style={{ width: 20, height: 20, position: 'absolute', right: 10 }}/>
              </View>
            </View>
          </View>
  
          <Text style={{ color: 'white', fontSize: 18, marginTop: 30, backgroundColor: 'transparent', marginLeft: 15 }}>SELECT NO OF PEOPLE:</Text>
  
          <View style={{ marginTop: 15, height: 45, width: AppConfig.windowWidth }}>
            <View style={{ position: 'absolute', height: 45, width: AppConfig.windowWidth, paddingHorizontal: 15 }}>
              <View style={{ width: 130, height: 45, backgroundColor: '#F4B44C', opacity: 0.5, borderRadius: 8, paddingLeft: 10 }}/>
            </View>
            <View style={{ position: 'absolute', height: 45, width: AppConfig.windowWidth, justifyContent: 'center'}}>
              <Text style={{ backgroundColor: 'transparent', color: 'white', fontSize: 14, left: 25, }}>No. Of People</Text>
              <Text style={{ backgroundColor: 'transparent', color: 'white', fontSize: 13, left: 25, }}>    5</Text>
              <Image source={require('img/img_home_detail_cart_dropdown.png')} style={{ width: 20, height: 10, position: 'absolute', left: 115, bottom: 10 }}/>
            </View>
          </View>
  
          <Text style={{ color: 'white', fontSize: 18, marginTop: 30, backgroundColor: 'transparent', marginLeft: 15 }}>ENTER YOUR BUDGET:</Text>
  
          <View style={{ marginTop: 15, height: 45, width: AppConfig.windowWidth }}>
            <View style={{ position: 'absolute', height: 45, width: AppConfig.windowWidth, paddingHorizontal: 15 }}>
              <View style={{ width: 130, height: 45, backgroundColor: '#F4B44C', opacity: 0.5, borderRadius: 8, paddingLeft: 10 }}/>
            </View>
            <View style={{ position: 'absolute', height: 45, width: 130, flexDirection: 'row', marginLeft: 15 }}>
              <View style={{ width: 30, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ color: 'white', backgroundColor: 'transparent', fontSize: 20 }}>$</Text>
              </View>
              <View style={{ width: 1, backgroundColor: 'white' }}>
  
              </View>
              <View style={{ flex: 1, padding: 8 }}>
                <TextInput style={{ flex: 1, backgroundColor: 'white', borderRadius: 5, color: SECONDARY_COLOR, textAlign: 'center', paddingHorizontal: 5 }}/>
              </View>
            </View>
          </View>
          
          <View style={{ alignItems: 'center', marginTop: 30, paddingBottom: 50 }}>
            <TouchableOpacity style={{ width: AppConfig.windowWidth - 100, height: 40, backgroundColor: '#A2763D', justifyContent: 'center', alignItems: 'center', borderRadius: 20 }}>
              <Text style={{ color: 'white', fontSize: 18 }}>Submit</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAwareScrollView>
      </View>
    );
  }
}

import { sideBarContainer } from "ReduxContainers";
const TanovaSubmitScene = sideBarContainer(_TanovaSubmitScene);
export default TanovaSubmitScene;
