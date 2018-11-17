
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
      modalVisible: false,
      currentModalIndex: 0
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
            shoeList.map((shoe, index) => {
                return(
                <TouchableOpacity key = {index} onPress = {() => {this.setState({currentModalIndex: index}); this.setState({modalVisible: true})}}>
                <View key = {index} style = {{padding: 10}}>
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
                </TouchableOpacity>
                )
            })
          }
          </ScrollView>
          <View style = {{flex: 1}}>
          <Modal visible = {this.state.modalVisible}>
              <View style = {{flex: 0.25, resizeMode: "contain", alignItems: "center", flexDirection: "row"}}>
                <View style = {{flex: 0.25, height: 50, width: width/4, backgroundColor: "white"}}>
                    <TouchableOpacity onPress = {() => this.setState({modalVisible: false})}>
                    <Image source = {require("./assets/backButton.png")} style = {{resizeMode: "cover", marginTop: 40, marginLeft: 10}}/>
                    </TouchableOpacity>
                  </View>
                <Text style = {{fontSize: 20, fontWeight: '500', fontFamily: 'AppleSDGothicNeo-UltraLight', textAlign: "center",  marginTop: 50,marginLeft: 40, marginRight: 20}}>{shoeList[this.state.currentModalIndex].title}</Text>
                <View style = {{flex: 0.25, height: 50, width: width/4 , backgroundColor: "white", alignContent: "flex-end"}}>
                  </View>
              </View>

              <Animatable.View animation= "zoomInUp" duration = {1000} easing = "linear" style = {{height: height, width: width, flex: 1, backgroundColor: "white"}}>
                <Image source = {shoeList[this.state.currentModalIndex].image} style = {{height: null, width: null, resizeMode: 'contain', flex: 1, borderRadius: 20}}>
                </Image>
              </Animatable.View>
              
                <View style = {{flex: 0.25, backgroundColor: "white", flexDirection: "row"}}>
                  <Text style = {{fontSize: 25, fontWeight: "600" , fontFamily: 'AppleSDGothicNeo-UltraLight', textAlign: "center"}}>{"Release Date "}</Text>
                  <Text style = {{fontSize: 25, fontFamily: 'AppleSDGothicNeo-UltraLight', textAlign: "center", resizeMode: "contain"}}>{"  "}{shoeList[this.state.currentModalIndex].releaseDate}</Text>
                </View>
                
              
              
                <View style = {{flex: 0.25,  backgroundColor: "white", flexDirection: "row"}}>
                  <Text style = {{fontSize: 25, fontWeight: "600" , fontFamily: 'AppleSDGothicNeo-UltraLight', textAlign: "center"}}>{"Retail Price "}</Text>
                  <Text style = {{fontSize: 25, fontFamily: 'AppleSDGothicNeo-UltraLight', textAlign: "center", resizeMode: "contain"}}>{"  "}{shoeList[this.state.currentModalIndex].retailPrice}</Text>
                </View>
               
         
              
                <View style = {{flex: 0.25, backgroundColor: "white", flexDirection: "row"}}>
                  <Text style = {{fontSize: 25, fontWeight: "600" , fontFamily: 'AppleSDGothicNeo-UltraLight', textAlign: "center"}}>{"Current Price "}</Text>
                  <Text style = {{fontSize: 25, fontFamily: 'AppleSDGothicNeo-UltraLight', textAlign: "center", resizeMode: "contain"}}>{"  "}{shoeList[this.state.currentModalIndex].currentPrice}</Text>
                </View>
              
          </Modal>
          </View>
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