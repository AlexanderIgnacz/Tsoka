import React, { Component, PropTypes } from "react";
import { View, StyleSheet, Animated, TouchableOpacity } from "react-native";
import { GRAY_COLOR, PRIMARY_COLOR, SECONDARY_COLOR, THIRD_COLOR } from "AppColors";

const styles = StyleSheet.create({
  toggleContainer: {
    width: 40,
    height: 22,
    borderRadius: 11,
    justifyContent: "center",
    borderWidth: 1,
    borderColor: GRAY_COLOR
  },
  toggleSubContainer: {
    width: 21,
    height: 21,
    backgroundColor: THIRD_COLOR,
    borderRadius: 10.5,
    borderWidth: 1,
    borderColor: GRAY_COLOR
  }
});

export class ToggleButton extends Component {
  static propTypes = {
    isEnabled: PropTypes.bool,
    onChange: PropTypes.func
  };
  
  constructor(props) {
    super(props);
    this.state = {
      leftAnimatedValue: props.isEnabled
        ? new Animated.Value(18)
        : new Animated.Value(0),
      isEnabled: props.isEnabled || false
    };
  }
  
  onToggle = () => {
    const { leftAnimatedValue, isEnabled } = this.state;
    if (isEnabled) {
      Animated.timing(leftAnimatedValue, {
        toValue: 0,
        duration: 200
      }).start(this.changeDisableStyle);
    } else {
      Animated.timing(leftAnimatedValue, {
        toValue: 18,
        duration: 200
      }).start(this.changeEnableStyle);
    }
  };
  
  changeEnableStyle = () => {
    this.setState({ isEnabled: true });
    this.props.onChange(true);
  };
  
  changeDisableStyle = () => {
    this.setState({ isEnabled: false });
    this.props.onChange(false);
  };
  
  render() {
    const { leftAnimatedValue, isEnabled } = this.state;
    const toggleContainer = isEnabled
      ? [
        styles.toggleContainer,
        { borderColor: SECONDARY_COLOR, backgroundColor: SECONDARY_COLOR }
      ]
      : styles.toggleContainer;
    const toggleSubContainer = isEnabled
      ? [styles.toggleSubContainer, { borderColor: SECONDARY_COLOR }]
      : styles.toggleSubContainer;
    return (
      <TouchableOpacity
        style={toggleContainer}
        onPress={this.onToggle}
        activeOpacity={1}
      >
        <Animated.View
          style={[toggleSubContainer, { left: leftAnimatedValue }]}
        />
      </TouchableOpacity>
    );
  }
}
