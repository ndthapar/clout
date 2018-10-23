import React, {Component} from 'react';
import {
  Animated,
  Easing,
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';

class LoadingAnimation extends Component{


constructor(){
    super()
    this.spinValue = new Animated.Value(0)
};

componentDidMount(){
    this.spin()
};

spin(){
    this.spinValue.setValue(0)
    Animated.timing(
        this.spinValue, {
            toValue: 1,
            duration: 4000,
            easing: Easing.linear
        }
    ).start(() => this.spin())
};

render(){
    return(
    <Animated.Image source={require('./assets/spinner_circle.jpg')} style={styles.loadingAnimationStyle}/>  
    )
    }
};


export default LoadingAnimation;