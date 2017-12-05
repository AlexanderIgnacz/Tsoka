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
import ReadMore from "react-native-read-more-text";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: PRIMARY_COLOR
  },
});

class _CartScene extends Component {
  static propTypes = {
  };
  
  static navigationOptions = {
    title: "CartScene",
    header: null,
    gesturesEnabled: Platform.OS !== "ios"
  };
  
  constructor(props, context) {
    super(props, context);
    this.state = {
      left: new Animated.Value(AppConfig.windowWidth),
    }
  }
  
  componentDidMount() {
    this.props.showSideBar(false);
    this.props.disableSideBar(false);
    this.props.setCurrentScene("CartScene");
  }
  
  onBack = () => {
    this.props.setCurrentScene("");
    this.props.navigation.goBack();
  };
  
  onCartFilter = () => {
    Animated.timing(
      this.state.left,
      {
        toValue: 0,
        duration: 300,
      }
    ).start();
  };
  
  closeFilter = () => {
    Animated.timing(
      this.state.left,
      {
        toValue: AppConfig.windowWidth,
        duration: 200,
      }
    ).start();
  };
  
  onFilter = i => {
    this.closeFilter();
  };
  
  render() {
    return (
      <View style={styles.container}>
        <HeaderBar cenTitle="Cart" back={this.onBack} onCartFilter={this.onCartFilter}/>
        <KeyboardAwareScrollView>
          <View style={{ paddingHorizontal: 10, marginTop: 22, backgroundColor: '#C7A249', paddingBottom: 10, paddingTop: 10 }}>
            
            <Text style={{ color: SECONDARY_COLOR, fontSize: 16 }}>ACCOMMODATION:</Text>
            <View style={{ marginTop: 10, flexDirection: 'row' }}>
              <View style={{ flex: 80, justifyContent: 'center', alignItems: 'center', }}>
                <Text style={{ fontSize: 12, color: SECONDARY_COLOR }}>SL. No:</Text>
              </View>
              <View style={{ flex: 100, justifyContent: 'center', alignItems: 'center', }}>
                <Text style={{ fontSize: 12, color: SECONDARY_COLOR }}>Hotel Name:</Text>
              </View>
              <View style={{ flex: 70, justifyContent: 'center', alignItems: 'center', }}>
                <Text style={{ fontSize: 12, color: SECONDARY_COLOR }}>Nights:</Text>
              </View>
              <View style={{ flex: 70, justifyContent: 'center', alignItems: 'center', }}>
                <Text style={{ fontSize: 12, color: SECONDARY_COLOR }}>Rooms</Text>
              </View>
              <View style={{ flex: 70, justifyContent: 'center', alignItems: 'center', }}>
                <Text style={{ fontSize: 12, color: SECONDARY_COLOR }}>Cost</Text>
              </View>
              <View style={{ flex: 80, justifyContent: 'center', alignItems: 'center', }}>
                <Text style={{ fontSize: 12, color: SECONDARY_COLOR }}>Action</Text>
              </View>
            </View>
            <View style={{ marginTop: 5, flexDirection: 'row', borderRadius: 5, borderColor: SECONDARY_COLOR, borderWidth: 1, paddingVertical: 3 }}>
              <View style={{ flex: 80, justifyContent: 'center', alignItems: 'center', }}>
                <Text style={{ fontSize: 12, color: SECONDARY_COLOR }}>00134</Text>
              </View>
              <View style={{ flex: 100, justifyContent: 'center', alignItems: 'center', }}>
                <Text style={{ fontSize: 12, color: SECONDARY_COLOR }}>Gertie's</Text>
              </View>
              <View style={{ flex: 70, justifyContent: 'center', alignItems: 'center', }}>
                <Text style={{ fontSize: 12, color: SECONDARY_COLOR }}>4</Text>
              </View>
              <View style={{ flex: 70, justifyContent: 'center', alignItems: 'center', }}>
                <Text style={{ fontSize: 12, color: SECONDARY_COLOR }}>2</Text>
              </View>
              <View style={{ flex: 70, justifyContent: 'center', alignItems: 'center', }}>
                <Text style={{ fontSize: 12, color: SECONDARY_COLOR }}>70</Text>
              </View>
              <View style={{ flex: 80, justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
                <Image source={require('img/img_cart_action_minus.png')} style={{ width: 12, height: 12 }}/>
                <Text style={{ color: SECONDARY_COLOR }}>/</Text>
                <Image source={require('img/img_cart_action_plus.png')} style={{ width: 12, height: 12 }}/>
              </View>
            </View>
  
            <Text style={{ color: SECONDARY_COLOR, fontSize: 16, marginTop: 30 }}>ACTIVITIES:</Text>
            <View style={{ marginTop: 10, flexDirection: 'row' }}>
              <View style={{ flex: 80, justifyContent: 'center', alignItems: 'center', }}>
                <Text style={{ fontSize: 12, color: SECONDARY_COLOR }}>SL. No:</Text>
              </View>
              <View style={{ flex: 100, justifyContent: 'center', alignItems: 'center', }}>
                <Text style={{ fontSize: 12, color: SECONDARY_COLOR }}>Activity Name:</Text>
              </View>
              <View style={{ flex: 100, justifyContent: 'center', alignItems: 'center', }}>
                <Text style={{ fontSize: 12, color: SECONDARY_COLOR }}>Participants:</Text>
              </View>
              <View style={{ flex: 70, justifyContent: 'center', alignItems: 'center', }}>
                <Text style={{ fontSize: 12, color: SECONDARY_COLOR }}>Cost</Text>
              </View>
              <View style={{ flex: 80, justifyContent: 'center', alignItems: 'center', }}>
                <Text style={{ fontSize: 12, color: SECONDARY_COLOR }}>Action</Text>
              </View>
            </View>
            <View style={{ marginTop: 5, flexDirection: 'row', borderRadius: 5, borderColor: SECONDARY_COLOR, borderWidth: 1, paddingVertical: 3 }}>
              <View style={{ flex: 80, justifyContent: 'center', alignItems: 'center', }}>
                <Text style={{ fontSize: 12, color: SECONDARY_COLOR }}>00134</Text>
              </View>
              <View style={{ flex: 100, justifyContent: 'center', alignItems: 'center', }}>
                <Text style={{ fontSize: 12, color: SECONDARY_COLOR }}>Gertie's</Text>
              </View>
              <View style={{ flex: 100, justifyContent: 'center', alignItems: 'center', }}>
                <Text style={{ fontSize: 12, color: SECONDARY_COLOR }}>4</Text>
              </View>
              <View style={{ flex: 70, justifyContent: 'center', alignItems: 'center', }}>
                <Text style={{ fontSize: 12, color: SECONDARY_COLOR }}>70</Text>
              </View>
              <View style={{ flex: 80, justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
                <Image source={require('img/img_cart_action_minus.png')} style={{ width: 12, height: 12 }}/>
                <Text style={{ color: SECONDARY_COLOR }}>/</Text>
                <Image source={require('img/img_cart_action_plus.png')} style={{ width: 12, height: 12 }}/>
              </View>
            </View>
  
  
            <Text style={{ color: SECONDARY_COLOR, fontSize: 16, marginTop: 30 }}>EVENTS:</Text>
            <View style={{ marginTop: 10, flexDirection: 'row' }}>
              <View style={{ flex: 80, justifyContent: 'center', alignItems: 'center', }}>
                <Text style={{ fontSize: 12, color: SECONDARY_COLOR }}>SL. No:</Text>
              </View>
              <View style={{ flex: 100, justifyContent: 'center', alignItems: 'center', }}>
                <Text style={{ fontSize: 12, color: SECONDARY_COLOR }}>Activity Name:</Text>
              </View>
              <View style={{ flex: 100, justifyContent: 'center', alignItems: 'center', }}>
                <Text style={{ fontSize: 12, color: SECONDARY_COLOR }}>Tickets:</Text>
              </View>
              <View style={{ flex: 70, justifyContent: 'center', alignItems: 'center', }}>
                <Text style={{ fontSize: 12, color: SECONDARY_COLOR }}>Cost</Text>
              </View>
              <View style={{ flex: 80, justifyContent: 'center', alignItems: 'center', }}>
                <Text style={{ fontSize: 12, color: SECONDARY_COLOR }}>Action</Text>
              </View>
            </View>
            <View style={{ marginTop: 5, flexDirection: 'row', borderRadius: 5, borderColor: SECONDARY_COLOR, borderWidth: 1, paddingVertical: 3 }}>
              <View style={{ flex: 80, justifyContent: 'center', alignItems: 'center', }}>
                <Text style={{ fontSize: 12, color: SECONDARY_COLOR }}>00134</Text>
              </View>
              <View style={{ flex: 100, justifyContent: 'center', alignItems: 'center', }}>
                <Text style={{ fontSize: 12, color: SECONDARY_COLOR }}>Gertie's</Text>
              </View>
              <View style={{ flex: 100, justifyContent: 'center', alignItems: 'center', }}>
                <Text style={{ fontSize: 12, color: SECONDARY_COLOR }}>4</Text>
              </View>
              <View style={{ flex: 70, justifyContent: 'center', alignItems: 'center', }}>
                <Text style={{ fontSize: 12, color: SECONDARY_COLOR }}>70</Text>
              </View>
              <View style={{ flex: 80, justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
                <Image source={require('img/img_cart_action_minus.png')} style={{ width: 12, height: 12 }}/>
                <Text style={{ color: SECONDARY_COLOR }}>/</Text>
                <Image source={require('img/img_cart_action_plus.png')} style={{ width: 12, height: 12 }}/>
              </View>
            </View>
  
  
            <Text style={{ color: SECONDARY_COLOR, fontSize: 16, marginTop: 30 }}>TRANSPORT:</Text>
            <View style={{ marginTop: 10, flexDirection: 'row' }}>
              <View style={{ flex: 80, justifyContent: 'center', alignItems: 'center', }}>
                <Text style={{ fontSize: 12, color: SECONDARY_COLOR }}>SL. No:</Text>
              </View>
              <View style={{ flex: 100, justifyContent: 'center', alignItems: 'center', }}>
                <Text style={{ fontSize: 12, color: SECONDARY_COLOR }}>Route Name:</Text>
              </View>
              <View style={{ flex: 100, justifyContent: 'center', alignItems: 'center', }}>
                <Text style={{ fontSize: 12, color: SECONDARY_COLOR }}>People:</Text>
              </View>
              <View style={{ flex: 70, justifyContent: 'center', alignItems: 'center', }}>
                <Text style={{ fontSize: 12, color: SECONDARY_COLOR }}>Cost</Text>
              </View>
              <View style={{ flex: 80, justifyContent: 'center', alignItems: 'center', }}>
                <Text style={{ fontSize: 12, color: SECONDARY_COLOR }}>Action</Text>
              </View>
            </View>
            <View style={{ marginTop: 5, flexDirection: 'row', borderRadius: 5, borderColor: SECONDARY_COLOR, borderWidth: 1, paddingVertical: 3 }}>
              <View style={{ flex: 80, justifyContent: 'center', alignItems: 'center', }}>
                <Text style={{ fontSize: 12, color: SECONDARY_COLOR }}>00134</Text>
              </View>
              <View style={{ flex: 100, justifyContent: 'center', alignItems: 'center', }}>
                <Text style={{ fontSize: 12, color: SECONDARY_COLOR }}>Gertie's</Text>
              </View>
              <View style={{ flex: 100, justifyContent: 'center', alignItems: 'center', }}>
                <Text style={{ fontSize: 12, color: SECONDARY_COLOR }}>4</Text>
              </View>
              <View style={{ flex: 70, justifyContent: 'center', alignItems: 'center', }}>
                <Text style={{ fontSize: 12, color: SECONDARY_COLOR }}>70</Text>
              </View>
              <View style={{ flex: 80, justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
                <Image source={require('img/img_cart_action_minus.png')} style={{ width: 12, height: 12 }}/>
                <Text style={{ color: SECONDARY_COLOR }}>/</Text>
                <Image source={require('img/img_cart_action_plus.png')} style={{ width: 12, height: 12 }}/>
              </View>
            </View>
          </View>
        </KeyboardAwareScrollView>
  
        <Animated.View
          style={{
            ...this.props.style,
            left: this.state.left,
            position: 'absolute',
            width: AppConfig.windowWidth,
            top: 0,
            height: AppConfig.windowHeight,
          }}
        >
          <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity style={{ width: AppConfig.windowWidth * 154 / 375, height: AppConfig.windowHeight }} onPress={this.closeFilter}>
  
            </TouchableOpacity>
            <View style={{ width: AppConfig.windowWidth * 221 / 375, height: AppConfig.windowHeight, backgroundColor: SECONDARY_COLOR, }}>
              <View style={{ alignItems: 'center' }}>
                <Text style={{ color: 'white', fontSize: 18, marginTop: 50 }}>Filters</Text>
              </View>
              <Text style={{ color: 'white', fontSize: 18, marginTop: 40, marginLeft: 35 }}>Type of Cart</Text>
              <TouchableOpacity style={{ justifyContent: 'center', padding:15, marginTop: 10 }} onPress={() => {this.onFilter(1);}}>
                <Text style={{ color: 'white', fontSize: 18 }}>All</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{ justifyContent: 'center', padding:15 }} onPress={() => {this.onFilter(2);}}>
                <Text style={{ color: 'white', fontSize: 18 }}>Accommodation</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{ justifyContent: 'center', padding:15 }} onPress={() => {this.onFilter(3);}}>
                <Text style={{ color: 'white', fontSize: 18 }}>Activities</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{ justifyContent: 'center', padding:15 }} onPress={() => {this.onFilter(4);}}>
                <Text style={{ color: 'white', fontSize: 18 }}>Events</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{ justifyContent: 'center', padding:15 }} onPress={() => {this.onFilter(5);}}>
                <Text style={{ color: 'white', fontSize: 18 }}>Transport</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Animated.View>
      </View>
    );
  }
}

import { sideBarContainer } from "ReduxContainers";
const CartScene = sideBarContainer(_CartScene);
export default CartScene;
