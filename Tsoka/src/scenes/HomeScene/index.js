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
} from "react-native";
import AppConfig from "AppConfig";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { PRIMARY_COLOR, SECONDARY_COLOR, THIRD_COLOR, FOURTH_COLOR } from "AppColors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: PRIMARY_COLOR
  },
  img: {
    width: AppConfig.windowWidth * 0.4,
    height: (AppConfig.windowWidth * 0.4) * 91 / 197,
    marginTop: 30,
  },
});

class _HomeScene extends Component {
  static propTypes = {
  };
  
  static navigationOptions = {
    title: "HomeScene",
    header: null,
    gesturesEnabled: Platform.OS !== "ios"
  };
  
  constructor(props, context) {
    super(props, context);
    this.state = {
      isLoading: false,
      showWallet: false,
      listdata: [
        {
          id: 0,
          text: "",
          type: 1,
        },
        {
          id: 1,
          text: "",
          type: 2,
        },
        {
          id: 2,
          text: "",
          type: 3,
        },
        {
          id: 3,
          text: "",
          type: 1,
        },
        {
          id: 4,
          text: "",
          type: 1,
        },
        {
          id: 5,
          text: "",
          type: 1,
        },
        {
          id: 6,
          text: "",
          type: 1,
        },
        {
          id: 7,
          text: "",
          type: 1,
        },
        {
          id: 8,
          text: "",
          type: 1,
        },
        {
          id: 9,
          text: "",
          type: 1,
        },
        {
          id: 10,
          text: "",
          type: 1,
        },
        {
          id: 11,
          text: "",
          type: 1,
        },
        {
          id: 12,
          text: "last",
        },
      ]
    };
    this.ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
  }
  
  componentDidMount() {
    this.props.showSideBar(false);
    this.props.disableSideBar(false);
    this.props.setCurrentScene("HomeScene");
  }
  
  onMenu = () => {
    this.props.showSideBar(true);
  };
  
  onPlus = (rowId) => {
    let listdata = this.state.listdata;
    listdata[rowId].type = 3;
    this.setState({ listdata });
  };
  
  onTanovaClose = (rowId) => {
    let listdata = this.state.listdata;
    listdata[rowId].type = 2;
    this.setState({ listdata });
  };
  
  onTanovaOpen = (rowId) => {
    this.props.navigation.navigate("TanovaSubmit");
  };
  
  onGoDetail = (rowId) => {
    this.props.navigation.navigate("HomeDetail");
  };
  
  renderRow = rowData => {
    if (rowData.text === 'last') {
      return (
        <View style={{ height: 20 }}/>
      )
    }
    return (
      <View style={{ width: AppConfig.windowWidth, marginTop: 20, paddingHorizontal: 20, alignItems: 'center' }}>
        <TouchableOpacity style={{ width: AppConfig.windowWidth - 40, height: (AppConfig.windowWidth - 40) * 10 / 17, backgroundColor: 'white', borderRadius: 8 }} onPress={() => {this.onGoDetail(rowData.id)}}>
          <Image source={require('img/img_home_place.png')} style={{ flex: 1, width: AppConfig.windowWidth - 40, height: (AppConfig.windowWidth - 40) * 10 / 17, resizeMode: 'contain', borderTopLeftRadius: 8, borderTopRightRadius: 8 }}/>
          <View style={{ flex: 1, justifyContent: 'center', paddingLeft: 16 }}>
            <Text style={{ height: 20, fontSize: 18, color: SECONDARY_COLOR }}>Victoria Falls</Text>
            <Text style={{ height: 20, fontSize: 12, marginTop: 10, color: '#F2B34B' }}>36 Things To Do</Text>
            <View style={{ flexDirection: 'row' }}>
              <Text style={{ height: 20, fontSize: 18, color: '#5E7B87' }}>$145</Text>
              <Text style={{ height: 20, fontSize: 14, marginTop: 3, color: '#5E7B87', marginLeft: 5 }}>per person</Text>
            </View>
          </View>
          <View style={{ width: AppConfig.windowWidth - 40, height: (AppConfig.windowWidth - 40) * 5 / 17, position: 'absolute', backgroundColor: '#381E11', opacity: 0.4, borderTopLeftRadius: 8, borderTopRightRadius: 8 }} />
          {
            rowData.type !== 3 &&
              <TouchableOpacity style={{ position: 'absolute', right: 10, marginTop: (AppConfig.windowWidth - 40) * 5 / 17 - 20, width: 40, height: 40, padding: 5 }}>
                <Image style={{ width: 30, height: 30, resizeMode: 'contain', }} source={require('img/img_home_fav.png')} />
              </TouchableOpacity>
          }
          {
            rowData.type === 2 &&
              <TouchableOpacity style={{ position: 'absolute', right: 0, marginTop: (AppConfig.windowWidth - 40) * 10 / 17 - 70, width: 60, height: 60, padding: 5 }} onPress={() => {this.onPlus(rowData.id);}} >
                <Image style={{ width: 50, height: 50, resizeMode: 'contain', }} source={require('img/img_home_flootingbtn.png')}/>
              </TouchableOpacity>
          }
          {
            rowData.type === 3 &&
            <TouchableOpacity style={{ position: 'absolute', right: 0, marginTop: (AppConfig.windowWidth - 40) * 10 / 17 - 70, width: 60, height: 60, padding: 5 }} onPress={() => {this.onTanovaClose(rowData.id);}} >
              <Image style={{ width: 50, height: 50, resizeMode: 'contain', }} source={require('img/img_home_tanovaclose.png')} />
            </TouchableOpacity>
          }
          {
            rowData.type === 3 &&
            <TouchableOpacity style={{ position: 'absolute', right: 5, marginTop: (AppConfig.windowWidth - 40) * 5 / 17 - 25, width: 50, height: 50, padding: 5 }} onPress={() => {this.onTanovaOpen(rowData.id);}}>
              <Image style={{ width: 40, height: 40, resizeMode: 'contain', }} source={require('img/img_home_tanova.png')} />
            </TouchableOpacity>
          }
          {
            rowData.type === 3 &&
            <TouchableOpacity style={{ position: 'absolute', right: 5, marginTop: (AppConfig.windowWidth - 40) * 5 / 17 - 80, width: 50, height: 50, padding: 5 }}>
              <Image style={{ width: 40, height: 40, resizeMode: 'contain', }} source={require('img/img_home_chat.png')} />
            </TouchableOpacity>
          }
        </TouchableOpacity>
      </View>
    );
  };
  
  render() {
    const { listdata } = this.state;
    return (
      <View style={styles.container}>
        <Image
          style={{ width: AppConfig.windowWidth, height: AppConfig.windowWidth * 231 / 375, resizeMode: 'contain', justifyContent: 'center', alignItems: 'center' }}
          source={require('img/img_home_topback.png')}
        >
          <Image style={styles.img} source={require('img/img_splash_icon.png')} />
          <View style={{ width: AppConfig.windowWidth, height: 44, marginTop: 30, paddingHorizontal: 30 }}>
            <TextInput style={{ backgroundColor: '#F4B44C', opacity: 0.5, borderRadius: 8, height: 44, paddingLeft: 10, fontWeight: 'bold', paddingRight: 35, color: SECONDARY_COLOR }} placeholder="Where To?" placeholderTextColor='white'/>
            <Image source={require('img/img_home_searchicon.png')} style={{ width: 24, height: 24, resizeMode: 'contain', position: 'absolute', right: 40, top: 10 }}/>
          </View>
        </Image>
        <TouchableOpacity style={{ position: 'absolute', marginLeft: 10, marginTop: 30, padding: 5, width: 31, height: 27 }} onPress={this.onMenu} >
          <Image
            source={require('img/img_home_menu.png')}
            style={{ width: 21, height: 17, resizeMode: 'contain' }}
          />
        </TouchableOpacity>
        <ListView
          dataSource={this.ds.cloneWithRows(listdata)}
          renderRow={this.renderRow}
          enableEmptySections={true}
        />
      </View>
    );
  }
}

import { sideBarContainer } from "ReduxContainers";
const HomeScene = sideBarContainer(_HomeScene);
export default HomeScene;
