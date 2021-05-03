//import * as React from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Button, ScrollView,FlatList } from "react-native";
import React, {useState} from 'react';
import "../../../assets/fonts/Mulish-Regular.ttf";
import AppMenuScreen from '../AppMenuScreen';
import axios from 'axios';
import LinearGradient from 'react-native-linear-gradient';



export default class LoginScreen extends React.Component {
  constructor(props) {
    super(props);
    //this.setState({username:props.route.params.username});
    this.state={
      username:'',
      email:'',
      password:'',
      name:'',
      surname:'',
      height:'',
      weight:'',
      gender:'',
/*      email:props.route.params.email,
      password:props.route.params.username,
      name:props.route.params.password,
      surname:props.route.params.surname,
      height:props.route.params.height,
      weight:props.route.params.weight,
      gender:props.route.params.gender,*/
      nameList: [],
      //age: new Date(),
    }

  }

  /*
  async componentDidMount(){
    try{
      await fetch('https://webhook.site/70c62502-d5d5-4ce7-8cce-119694571a31',{
        method: 'post',
        mode: 'no-cors',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username: username,
          password: password
        })
      });

    }catch(e){
      console.log(e);
    }
  }*/

  /*componentDidMount() {
    axios.get('http://jsonplaceholder.typicode.com/posts')
      .then(res => {
        const nameList = res.data;
        this.setState({ nameList });
      })
  }*/
   getData(){
    console.log("IN HERE");
        try{
          fetch('https://noble-feat-310319.nw.r.appspot.com/graphql',{
          method: 'get',
          mode: 'no-cors',
          headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username: this.state.username,
          //TO DO
          password: this.state.password
        })
      });
    }catch(e){
      console.log(e);
    }
  }

  render() {
    //let username = this.props.navigation.getParam('username', null);
    console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"+this.state.username);
    return (
      <View style={styles.container}>
        <LinearGradient colors={['#cdda7e', '#8aa07c', '#47657a']} style={styles.gradient}>
        <View style={styles.centeredView}>
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
              <TouchableOpacity>
                <Text style={styles.forgotPassword}>Forgot password?</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.loginButton}
                //onPress={() => this.props.navigation.navigate('AppMenuScreen')}>
                onPress={() => { this.getData(); this.props.navigation.navigate('AppMenuScreen')}}>
                <Text style={styles.loginButtonText}>LOGIN</Text>
              </TouchableOpacity>
            </ScrollView>
            </View>
        </LinearGradient>
          </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#CDDA7E',
    //paddingLeft: 30,
    //paddingRight: 30,
    //alignItems: 'center',
  },
  gradient: {
    flex: 1,
    paddingTop: 150,
    backgroundColor: '#cdda7e',
    paddingLeft: 30,
    paddingRight: 30,
  },
  header: {
    fontSize: 48,
    fontFamily:'Mulish-Regular',
    fontWeight:"bold",
    color:'#222b14',
    paddingBottom: 10,
    marginTop: 30,
    marginBottom: 20,
    paddingLeft: 30,
    borderBottomColor: '#222b14',
    //borderBottomColor: '#199187',
    //borderBottomWidth: 1,
  },
  inputView:{
    fontFamily:'Mulish-Regular',
    width:300,
    backgroundColor:'rgba(0,0,0,0.09)',
    borderRadius:25,
    height:30,
    marginBottom:20,
    marginLeft:30,
    justifyContent:"center",
    paddingLeft:30,
    padding:20,
    fontWeight: 'bold',
  },
  inputText:{
    fontFamily:'Mulish-Regular',
    height:50,
    color:"white"
  },
  buttonText: {
    fontFamily:'Mulish-Regular',
    color: "#222b14",
    fontWeight: 'bold',
  },
  loginButton:{
    width:100,
    backgroundColor:"#ffcc33",
    borderRadius:25,
    height:35,
    alignItems:"center",
    justifyContent:"center",
    marginLeft:230,
    marginTop:15,
    //marginBottom:10
  },
  loginButtonText:{
    fontFamily:'Mulish-Regular',
    color: "#222b14",
    fontSize: 20,
    fontWeight: 'bold',
  },
  forgotPassword:{
    fontFamily:'Mulish-Regular',
    color:'rgba(0,0,0,0.6)',
    marginLeft:220,
    paddingTop: 10,
  },
  centeredView: {
    //flex: 1,
    justifyContent: "center",
    marginTop: 22
  },
});
