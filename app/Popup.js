import React, {Component} from 'react';
import {
    Dimensions,
    View,
    Text,
    Image
} from 'react-native';
import * as Animatable from 'react-native-animatable'
import {shoeList} from './data.js';

const {width, height} = Dimensions.get('window');

export class Popup extends Component{
    
    render(){
        return(
            <Animatable.View animation= "zoomInUp" duration = {1000} easing = "linear" style = {{height: (height/2), width: width, flex: 1, backgroundColor: "white"}}>
                  <Image source = {shoeList.image} style = {{height: null, width: null, resizeMode: 'contain', flex: 1, borderRadius: 20}}>
                  </Image>
            </Animatable.View>
        )
    }
}