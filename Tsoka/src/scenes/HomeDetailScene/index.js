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
  ScrollView
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
  img: {
    width: AppConfig.windowWidth * 0.4,
    height: (AppConfig.windowWidth * 0.4) * 91 / 197,
    marginTop: 30,
  },
  readMoreText: {
    fontSize: 11,
    textAlign: 'center',
    color: 'white'
  },
});

class _HomeDetailScene extends Component {
  static propTypes = {
  };
  
  static navigationOptions = {
    title: "HomeDetailScene",
    header: null,
    gesturesEnabled: Platform.OS !== "ios"
  };
  
  constructor(props, context) {
    super(props, context);
    this.state = {
      isLoading: false,
      showWallet: false,
      showCartModal: false,
    };
    this.ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
  }
  
  componentDidMount() {
    this.props.showSideBar(false);
    this.props.disableSideBar(false);
    this.props.setCurrentScene("HomeDetailScene");
  }
  
  onBack = () => {
    this.props.navigation.goBack();
  };
  
  showCartModal = () => {
    this.setState({ showCartModal: true })
  };
  
  _handleTextReady = () => {};
  
  _renderTruncatedFooter = handlePress => {
    return (
      <TouchableOpacity onPress={handlePress} style={{ backgroundColor: SECONDARY_COLOR, width: 90, height: 20, borderRadius: 5, position: 'absolute', bottom: -20, right: 10, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={styles.readMoreText}>Read More...</Text>
      </TouchableOpacity>
    );
  };
  
  _renderRevealedFooter = handlePress => {
    return (
      <TouchableOpacity onPress={handlePress} style={{ backgroundColor: SECONDARY_COLOR, width: 90, height: 20, borderRadius: 5, position: 'absolute', bottom: -20, right: 10, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={styles.readMoreText}>Less...</Text>
      </TouchableOpacity>
    );
  };
  
  onCancelCart = () => {
    this.setState({ showCartModal: false });
  };
  
  onSubmitCart = () => {
    this.props.navigation.navigate("Cart");
    this.setState({ showCartModal: false });
  };
  
  render() {
    const { showCartModal } = this.state;
    
    const cardArray_acc = [];
    for (let i = 0; i < 10; i++) {
      let cardKey = "cardKey" + i;
      cardArray_acc.push(
        <TouchableOpacity key={cardKey} style={{ width: 150, height: 200, marginLeft: 15, borderWidth: 0 }} onPress={this.showCartModal}>
          <Image source={require('img/img_home_detail_cardimg.png')} style={{ width: 150, height: 131, resizeMode: 'contain', borderWidth: 0, borderTopRightRadius: 8, borderTopLeftRadius: 8 }} />
          <View style={{ width: 150, height: 69, borderWidth: 1, borderBottomRightRadius: 8, borderBottomLeftRadius: 8, borderTopWidth: 0, borderColor: SECONDARY_COLOR, justifyContent: 'center', paddingHorizontal: 5 }}>
            <Text style={{ color: SECONDARY_COLOR, fontSize: 13 }}>Name: Gorge Swing</Text>
            <Text style={{ color: 'white', fontSize: 13, marginTop: 5 }}>Cost: $95.00</Text>
          </View>
        </TouchableOpacity>
      );
    }
    cardArray_acc.push(
      <View key="cardKeyLast" style={{ width: 10}} />
    );
  
    const cardArray_act = [];
    for (let i = 0; i < 10; i++) {
      let cardKey = "cardKey" + i;
      cardArray_act.push(
        <TouchableOpacity key={cardKey} style={{ width: 150, height: 200, marginLeft: 15, borderWidth: 0 }} onPress={this.showCartModal}>
          <Image source={require('img/img_home_detail_cardimg.png')} style={{ width: 150, height: 131, resizeMode: 'contain', borderWidth: 0, borderTopRightRadius: 8, borderTopLeftRadius: 8 }} />
          <View style={{ width: 150, height: 69, borderWidth: 1, borderBottomRightRadius: 8, borderBottomLeftRadius: 8, borderTopWidth: 0, borderColor: SECONDARY_COLOR, justifyContent: 'center', paddingHorizontal: 5 }}>
            <Text style={{ color: SECONDARY_COLOR, fontSize: 13 }}>Name: Gorge Swing</Text>
            <Text style={{ color: SECONDARY_COLOR, fontSize: 11 }} >Offered By: Wild Horizon</Text>
            <Text style={{ color: 'white', fontSize: 13 }}>Cost: $95.00</Text>
          </View>
        </TouchableOpacity>
      );
    }
    cardArray_act.push(
      <View key="cardKeyLast" style={{ width: 10}} />
    );
  
    const cardArray_tra = [];
    for (let i = 0; i < 10; i++) {
      let cardKey = "cardKey" + i;
      cardArray_tra.push(
        <TouchableOpacity key={cardKey} style={{ width: 150, height: 200, marginLeft: 15, borderWidth: 0 }} onPress={this.showCartModal}>
          <Image source={require('img/img_home_detail_cardimg.png')} style={{ width: 150, height: 131, resizeMode: 'contain', borderWidth: 0, borderTopRightRadius: 8, borderTopLeftRadius: 8 }} />
          <View style={{ width: 150, height: 69, borderWidth: 1, borderBottomRightRadius: 8, borderBottomLeftRadius: 8, borderTopWidth: 0, borderColor: SECONDARY_COLOR, justifyContent: 'center', paddingHorizontal: 5 }}>
            <Text style={{ color: SECONDARY_COLOR, fontSize: 13 }}>Name: Gorge Swing</Text>
            <Text style={{ color: 'white', fontSize: 13, marginTop: 5 }}>Cost: $95.00</Text>
          </View>
        </TouchableOpacity>
      );
    }
    cardArray_tra.push(
      <View key="cardKeyLast" style={{ width: 10}} />
    );
  
    const cardArray_eve = [];
    for (let i = 0; i < 10; i++) {
      let cardKey = "cardKey" + i;
      cardArray_eve.push(
        <TouchableOpacity key={cardKey} style={{ width: 150, height: 200, marginLeft: 15, borderWidth: 0 }} onPress={this.showCartModal}>
          <Image source={require('img/img_home_detail_cardimg.png')} style={{ width: 150, height: 131, resizeMode: 'contain', borderWidth: 0, borderTopRightRadius: 8, borderTopLeftRadius: 8 }} />
          <View style={{ width: 150, height: 69, borderWidth: 1, borderBottomRightRadius: 8, borderBottomLeftRadius: 8, borderTopWidth: 0, borderColor: SECONDARY_COLOR, justifyContent: 'center', paddingHorizontal: 5 }}>
            <Text style={{ color: SECONDARY_COLOR, fontSize: 13 }}>Name: Gorge Swing</Text>
            <Text style={{ color: 'white', fontSize: 13, marginTop: 5 }}>Cost: $95.00</Text>
          </View>
        </TouchableOpacity>
      );
    }
    cardArray_eve.push(
      <View key="cardKeyLast" style={{ width: 10}} />
    );
    
    return (
      <View style={styles.container}>
        <HeaderBar cenTitle="Victoria Falls" back={this.onBack}/>
        <KeyboardAwareScrollView>
          <View>
            <View style={{ backgroundColor: '#C7A249', paddingBottom: 30, paddingTop: 10, paddingHorizontal: 18, alignItems: 'center', marginTop: 16 }}>
              <Text style={{ color: SECONDARY_COLOR, fontSize: 18 }}>About Victoria Falls</Text>
              <View style={{ marginTop: 10 }}>
                <ReadMore
                  numberOfLines={4}
                  onReady={this._handleTextReady}
                  renderTruncatedFooter={this._renderTruncatedFooter}
                  renderRevealedFooter={this._renderRevealedFooter}
                >
                  <Text style={{ color: 'white', fontSize: 16 }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis varius eu ligula in faucibus. Curabitur vel facilisis sapien, non varius magna. Sed porttitor, ligula in mollis luctus, risus massa molestie mi, hendrerit tempor metus lectus quis diam. euismod ultrices, tortor neque. Duis varius eu ligula in faucibus. Curabitur vel facilisis sapien, non varius magna. Sed porttitor, ligula in mollis luctus, risus massa molestie mi, hendrerit tempor metus lectus quis diam. euismod ultrices, tortor neque.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis varius eu ligula in faucibus. Curabitur vel facilisis sapien, non varius magna. Sed porttitor, ligula in mollis luctus, risus massa molestie mi, hendrerit tempor metus lectus quis diam. euismod ultrices, tortor neque. Duis varius eu ligula in faucibus. 
                  </Text>
                </ReadMore>
              </View>
            </View>
            <View style={{ backgroundColor: '#C7A249', height: 250, paddingTop: 10, alignItems: 'center', marginTop: 16 }}>
              <Text style={{ color: SECONDARY_COLOR, fontSize: 18 }}>ACCOMMODATION</Text>
              <View style={{ marginTop: 10 }}>
                <ScrollView
                  style={{}}
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                >
                  {cardArray_acc}
                </ScrollView>
              </View>
            </View>
            <View style={{ backgroundColor: '#C7A249', height: 250, paddingTop: 10, alignItems: 'center', marginTop: 16 }}>
              <Text style={{ color: SECONDARY_COLOR, fontSize: 18 }}>ACTIVITIES</Text>
              <View style={{ marginTop: 10 }}>
                <ScrollView
                  style={{}}
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                >
                  {cardArray_act}
                </ScrollView>
              </View>
            </View>
            
            <View style={{ backgroundColor: '#C7A249', height: 250, paddingTop: 10, alignItems: 'center', marginTop: 16 }}>
              <Text style={{ color: SECONDARY_COLOR, fontSize: 18 }}>TRANSPORT</Text>
              <View style={{ marginTop: 10 }}>
                <ScrollView
                  style={{}}
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                >
                  {cardArray_tra}
                </ScrollView>
              </View>
            </View>
  
            <View style={{ backgroundColor: '#C7A249', height: 250, paddingTop: 10, alignItems: 'center', marginTop: 16 }}>
              <Text style={{ color: SECONDARY_COLOR, fontSize: 18 }}>EVENTS</Text>
              <View style={{ marginTop: 10 }}>
                <ScrollView
                  style={{}}
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                >
                  {cardArray_eve}
                </ScrollView>
              </View>
            </View>
            
          </View>
        </KeyboardAwareScrollView>
        {
          showCartModal &&
            <View style={{
              position: 'absolute',
              width: AppConfig.windowWidth,
              height: AppConfig.windowHeight,
            }}>
              <View style={{
                position: 'absolute',
                width: AppConfig.windowWidth,
                height: AppConfig.windowHeight,
                backgroundColor: 'black',
                opacity: 0.7,
              }}/>
              <View style={{
                width: AppConfig.windowWidth,
                height: 360,
                backgroundColor: 'white',
                marginTop: 150,
                alignItems: 'center',
              }}>
                <Image style={{ width: AppConfig.windowWidth - 10, height: (AppConfig.windowWidth - 20) * 19 / 36, marginTop: 5, resizeMode: 'cover' }} source={require('img/img_home_detail_cart.png')} />
                <View style={{ flex: 1, flexDirection: 'row' }}>
                  <View style={{ width: AppConfig.windowWidth / 2, justifyContent: 'center', alignItems: 'center' }}>
                    <View style={{ width: AppConfig.windowWidth / 2 - 50, height: 50, backgroundColor: SECONDARY_COLOR, justifyContent: 'center', borderRadius: 8, paddingHorizontal: 10 }}>
                      <Text style={{ color: 'white', fontSize: 14 }}>Check-Out</Text>
                      <Text style={{ color: 'white', fontSize: 13 }}>dd-mm-yy</Text>
                      <Image source={require('img/img_home_detail_cart_cal.png')} style={{ width: 20, height: 20, position: 'absolute', right: 10 }}/>
                    </View>
                    <View style={{ width: AppConfig.windowWidth / 2 - 50, height: 50, backgroundColor: SECONDARY_COLOR, marginTop: 10, justifyContent: 'center', borderRadius: 8, paddingHorizontal: 10 }}>
                      <Text style={{ color: 'white', fontSize: 14 }}>No. Of People</Text>
                      <Text style={{ color: 'white', fontSize: 13 }}>    5</Text>
                      <Image source={require('img/img_home_detail_cart_dropdown.png')} style={{ width: 20, height: 10, position: 'absolute', right: 10, bottom: 10 }}/>
                    </View>
                  </View>
                  <View style={{ width: AppConfig.windowWidth / 2, justifyContent: 'center', alignItems: 'center' }}>
                    <View style={{ width: AppConfig.windowWidth / 2 - 50, height: 50, backgroundColor: SECONDARY_COLOR, justifyContent: 'center', borderRadius: 8, paddingHorizontal: 10 }}>
                      <Text style={{ color: 'white', fontSize: 14 }}>Check-In</Text>
                      <Text style={{ color: 'white', fontSize: 13 }}>dd-mm-yy</Text>
                      <Image source={require('img/img_home_detail_cart_cal.png')} style={{ width: 20, height: 20, position: 'absolute', right: 10 }}/>
                    </View>
                    <View style={{ width: AppConfig.windowWidth / 2 - 50, height: 50, backgroundColor: SECONDARY_COLOR, marginTop: 10, justifyContent: 'center', borderRadius: 8, paddingHorizontal: 10 }}>
                      <Text style={{ color: 'white', fontSize: 14 }}>No. Of Rooms</Text>
                      <Text style={{ color: 'white', fontSize: 13 }}>    2</Text>
                      <Image source={require('img/img_home_detail_cart_dropdown.png')} style={{ width: 20, height: 10, position: 'absolute', right: 10, bottom: 10 }}/>
                    </View>
                  </View>
                </View>
                <View style={{ height: 40, borderTopWidth: 1, borderTopColor: SECONDARY_COLOR, flexDirection: 'row' }}>
                  <TouchableOpacity style={{ flex: 1, justifyContent: 'center', alignItems: 'center', borderLeftWidth: 1, borderLeftColor: SECONDARY_COLOR, }} onPress={this.onCancelCart}>
                    <Text style={{ color: SECONDARY_COLOR }}>Cancel</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={{ flex: 1, justifyContent: 'center', alignItems: 'center', borderLeftWidth: 1, borderLeftColor: SECONDARY_COLOR, }} onPress={this.onSubmitCart}>
                    <Text style={{ color: SECONDARY_COLOR }}>Add To Cart</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
        }
      </View>
    );
  }
}

import { sideBarContainer } from "ReduxContainers";
const HomeDetailScene = sideBarContainer(_HomeDetailScene);
export default HomeDetailScene;
