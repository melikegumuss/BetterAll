import React,{Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
//#region Public class
//#endregion
export default class App extends Component{

  //#region Program starts
  //#endregion
  render(){
    return(
      <View style={style.welcome_area}>
        <Text style={style.welcome_text}>aaaLorem Ipsum is simply dummy text of the printing and typesetting industry.</Text>
      </View>
    );
  }
}

const style = StyleSheet.create({
  welcome_area: {paddingTop:150,backgroundColor:'red'},
  welcome_text: {color:'blue', fontSize:20, fontFamily: 'Mulish-Regular'}
});