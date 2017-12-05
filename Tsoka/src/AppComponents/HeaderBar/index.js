import React, { Component, PropTypes } from "react";
import {
	View,
	Image,
	Platform,
	StyleSheet,
	Text,
	TouchableOpacity,
} from "react-native";
import AppConfig from "AppConfig";
import { GlobalStorage } from "AppUtilities";
import { SECONDARY_COLOR } from "AppColors";

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		width: AppConfig.windowWidth,
		height: 64,
		paddingTop: 20,
		backgroundColor: SECONDARY_COLOR,
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	cenTitle: {
		color: 'white',
		fontSize: 17,
	},
	menuImg: {
		width: 25,
		height: 21,
	},
	addImg: {
		width: 21,
		height: 21,
	},
	backImg: {
		width: 13,
		height: 22,
	},
  cartfilter: {
    width: 20,
    height: 20,
  },
  backImgRight: {
    width: 33,
    height: 22,
  }
});

export class HeaderBar extends Component {
	static propTypes = {
		cenTitle: PropTypes.string,
		back: PropTypes.func,
    onCartFilter: PropTypes.func,
	};

	constructor(props, context) {
		super(props, context);
		this.state = {
		};
	}

	onBack = () => {
		this.props.back();
	};
  
  onCartFilter = () => {
    this.props.onCartFilter();
  };

	render() {
	  const { cenTitle } = this.props;
	  if (cenTitle === "Cart") {
	    return (
        <View style={styles.container}>
          <TouchableOpacity
            onPress={this.onBack}
            style={{padding: 10}}
          >
            <Image
              source={require('img/icon_back.png')}
              style={styles.backImg}
            />
          </TouchableOpacity>
          <Text style={styles.cenTitle}>{ cenTitle }</Text>
          <TouchableOpacity
            onPress={this.onCartFilter}
            style={{padding: 10}}
          >
            <Image
              source={require('img/img_cart_filter.png')}
              style={styles.cartfilter}
            />
          </TouchableOpacity>
        </View>
      )
    }
    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={this.onBack}
          style={{padding: 10}}
        >
          <Image
            source={require('img/icon_back.png')}
            style={styles.backImg}
          />
        </TouchableOpacity>
        <Text style={styles.cenTitle}>{ cenTitle }</Text>
        <View style={styles.backImgRight}/>
      </View>
    );
  }
}
