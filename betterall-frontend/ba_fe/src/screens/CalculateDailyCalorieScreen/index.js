//import * as React from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Button, ScrollView } from "react-native";
import React, {useState} from 'react';
//import "fontsource-muli";
import AppMenuScreen from '../AppMenuScreen';

export default class RegisterScreen extends React.Component {
  constructor() {
    super();
  }
  state={
    username:"",
    email:"",
    password:"",
    name:"",
    surname:"",
    height:"",
    weight:"",
    gender:"",
    //age: new Date(),
  }


  render() {
    return (
          <View style={styles.container}>
            <Text style={styles.header}>Welcome back!</Text>
            <ScrollView>
              <View style={styles.inputView} >
                <TextInput
                    style={styles.inputText}
                    placeholder="Username"
                    placeholderTextColor="rgba(0,0,0,0.35)"
                    onChangeText={text => this.setState({username:text})}/>
              </View>
              <View style={styles.inputView}>
                <TextInput
                    secureTextEntry
                    style={styles.inputText}
                    placeholder="Password..."
                    placeholderTextColor="rgba(0,0,0,0.35)"
                    onChangeText={text => this.setState({password:text})}/>
              </View>
              <TouchableOpacity style={styles.forgotPassword}>
                <Text style={styles.forgotPassword}>Forgot password?</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.loginButton}
                onPress={() => this.props.navigation.navigate('AppMenuScreen')}>
                <Text style={styles.loginButtonText}>LOGIN</Text>
              </TouchableOpacity>
            </ScrollView>
          </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#CDDA7E',
    paddingLeft: 30,
    paddingRight: 30,
  },
  header: {
    fontSize: 48,
    fontFamily:'Mulish-Regular',
    color:'#7B8235',
    paddingBottom: 10,
    marginTop: 30,
    marginBottom: 40,
    borderBottomColor: '#7B8235',
    //borderBottomColor: '#199187',
    borderBottomWidth: 1,
  },
  inputView:{
    fontFamily:'Mulish-Regular',
    width:"100%",
    backgroundColor:'rgba(0,0,0,0.09)',
    borderRadius:25,
    height:30,
    marginBottom:20,
    justifyContent:"center",
    padding:20,
  },
  inputText:{
    fontFamily:'Mulish-Regular',
    height:50,
    color:"white"
  },
  buttonText: {
    fontFamily:'Mulish-Regular',
    color: '#fff',
    fontWeight: 'bold',
  },
  loginButton:{
    width:"30%",
    backgroundColor:"#ffcc33",
    borderRadius:25,
    height:35,
    alignItems:"center",
    justifyContent:"center",
    marginLeft:240,
    marginTop:15,
    //marginBottom:10
  },
  loginButtonText:{
    fontFamily:'Mulish-Regular',
    color:'rgba(0,0,0,0.6)',
  },
  forgotPassword:{
    fontFamily:'Mulish-Regular',
    color:'rgba(0,0,0,0.6)',
    marginLeft:120,
  },
  datePickerStyle: {
    width: 200,
    marginTop: 20,
  },
});
