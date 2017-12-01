import React, { Component } from 'react';
import { Text, View, Platform, NetInfo } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Provider } from 'react-redux';

import SplashScene from './scenes/SplashScene';

Text.defaultProps = {
  allowFontScaling: false,
};


const AppNavigator = StackNavigator({
  initialRouteName: { screen: SplashScene },
  SplashScene: { screen: SplashScene },
}, {
  headerMode: 'none',
});

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  
  async componentDidMount() {
  }
  
  render() {
    return (
      <Provider>
        <View style={{ flex: 1, backgroundColor: 'gray' }}>
          <AppNavigator />
        </View>
      </Provider>
    );
  }
}
