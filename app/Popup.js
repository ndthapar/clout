import React, {Component} from 'react';
import {
    Dimensions,
    View
} from 'react-native';
import * as Animatable from 'react-native-animatable'

const {width, height} = Dimensions.get('window');

export class Popup extends Component{
    
    render(){
        return(
            <Animatable.View animation= "zoomInUp" duration = {100} easing = "linear" style = {{height: (height/2), width: width, flex: 1, backgroundColor: "white"}}>
                </Animatable.View>
        )
    }
}