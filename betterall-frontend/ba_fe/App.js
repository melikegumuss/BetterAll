import React,{Component} from 'react';
import {View, Text} from 'react-native';
import styles from './Styles/style'
//#region Public class
//#endregion
export default class App extends Component{

  //#region Program starts
  //#endregion
  render(){
    return(
      <View style={styles.welcome_area}>
        <View style={{backgroundColor: 'green'}}/> 
        <Text style={styles.welcome_text}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Text>
        <View style={{paddingTop: 100, backgroundColor: 'green'}}/> 
        <View style={{paddingTop: 100, backgroundColor: 'blue'}}/> 
        <View style={{paddingTop: 100, backgroundColor: 'black'}}/> 
      </View>
    );
  }
}