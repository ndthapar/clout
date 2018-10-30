import React, {Component} from 'react';
import {Modal, Button, ScrollView, Title, Image, ImageBackground, AppRegistry, Text, View, StyleSheet, Dimensions, TouchableOpacity} from 'react-native';
import * as Animatable from 'react-native-animatable';
import {createStackNavigator} from 'react-navigation';
import {shoeList} from './data.js';
import {Popup} from "./Popup.js";

const {height, width} = Dimensions.get("window");

class HomeScreen extends Component{
  render(){
    return(
      <ImageBackground source= {require('./assets/clout_landing_base.jpg')} style={styles.backgroundImage}>  
          <View style = {styles.container}>
          <Animatable.Image style= {styles.logo} source={require('./assets/clout_logo.png')} animation= 'pulse' 
          iterationCount = {1} iterationDelay = {100} duration = {1000} onAnimationEnd = {() => this.props.navigation.navigate('First')}>
          </Animatable.Image>
          </View>
      </ImageBackground>
    )
  }
}

class PageOne extends Component{
 
  constructor(props){
    super(props);
    this.state = {
      modalVisible: false
    }
  }

  sneakerDetails = () => {
    this.setState({modalVisible: true})
    }

  returnModal = () => {
    return(
      <Modal visible = {this.state.modalVisible} style = {{height: 200, width: width, flex:1}}>
        <Text> TESTING MODAL </Text>
        </Modal>
    )
  }
  


  render(){
    return( 
      <View style = {{backgroundColor: 'white', flex: 1}}>
          
        <View style = {{flex: 1, top: 20, backgroundColor: "black"}}>
          <Image source = {require("./assets/resize_black_white.png")} style = {{height: 100, width: width, resizeMode: "contain", flex: 1}}/>
        </View>
        <View style = {{flex: 5, top: 20}}>
        <ScrollView contentContainerStyle = {{flexDirection: 'row', flexWrap: 'wrap', paddingLeft: 20}}>
          {
            shoeList.map(shoe => {
                return(
                <TouchableOpacity onPress = {this.sneakerDetails}>
                <View style = {{padding: 10}}>
                    <View style = {{height: 100, width: 150}}>
                        <Image source = {shoe.image} style = {{height: null, width: null, resizeMode: 'cover', flex: 1, borderRadius: 20}}>
                        </Image>
                    </View>
                    <View vertical = {true} style = {{height: 100, width: 150}}>
                      <Text  style = {{fontSize: 20, fontWeight: '300', textAlign: "center", paddingTop: 5, fontFamily:'AppleSDGothicNeo-UltraLight', flex: 1}}> 
                        {shoe.title}
                      </Text>
                    </View>
                </View>
                <Modal visible = {this.state.modalVisible}>
                  <Animatable.View animation= "zoomInUp" duration = {1000} easing = "linear" style = {{height: height, width: width, flex: 1, backgroundColor: "white"}}>
                    <Image source = {shoe.image} style = {{height: null, width: null, resizeMode: 'contain', flex: 1, borderRadius: 20}}>
                    </Image>
                  </Animatable.View>
                </Modal>
                </TouchableOpacity>
                )
            })
          }
          </ScrollView>
          </View>
      </View>
    )
  }
}

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    First: PageOne
  },
  {
    initialRouteName: 'Home',
    headerMode: 'none'
  }
);

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}




const styles = StyleSheet.create({
  backgroundImage:{
    flex:1,
    width: '100%',
    height: '100%',
  },
  container:{
    flexDirection: 'column',
    justifyContent: 'center',
    height: '100%',
    width: '100%',
    flex:1,
    alignItems: 'center'
  },
  logo:{
    flex:1,
    height:100,
    width: 350,
    resizeMode: 'contain',
    flexDirection: 'row', 
  }
});

