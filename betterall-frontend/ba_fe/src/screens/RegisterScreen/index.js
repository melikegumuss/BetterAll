//import * as React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Button,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import React, {useState} from 'react';
//import DateTimePicker from '@react-native-community/datetimepicker';
import {Component} from 'react';
import LoginScreen from '../LoginScreen';
import "../../../assets/fonts/Mulish-Regular.ttf";
import LinearGradient from "react-native-linear-gradient";


export default class RegisterScreen extends Component {
  constructor() {
    super();
  }
  state = {
    username: null,
    email: null,
    password: null,
    name: null,
    surname: null,
    height: 0,
    starting_weight: 0,
    gender: true,
    //age: new Date(),
  };

  async function1(){
    console.log("IN HERE");
    console.log(`mutation {
                      createUser(user: {username: "${this.state.username}", name: "${this.state.name}", 
                      email: "${this.state.email}", name: "${this.state.name} ${this.state.surname}",
                      height: ${this.state.height}, starting_weight: ${this.state.weight}, gender: true}) {
                        user_id
                        username
                        name
                        email
                      }
                    }`);
    try{
      fetch('https://noble-feat-310319.nw.r.appspot.com/graphql',{
        method: 'post',
        mode: 'no-cors',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            query: `mutation {
                      createUser(user: {username: "${this.state.username}", 
                      email: "${this.state.email}", name: "${this.state.name} ${this.state.surname}",
                      height: ${this.state.height}, starting_weight: ${this.state.starting_weight}, gender: true}) {
                        user_id
                        username
                        name
                        email
                      }
                    }`,
        })
      }).then(response=>response.json()).then(data=>{console.log(data);

      }).catch(err=>console.error(err));
      /*console.log(response.data);
      const responseData = (await response).json();
      console.log("Response: " , responseData);*/
    }catch(e){
      console.log(e);
    }
  }


  render() {
    return (
        <LinearGradient colors={['#cdda7e', '#8aa07c', '#47657a']} style={styles.gradient}>
        <View style={styles.centeredView}>
        <Text style={styles.header}>New to BetterAll ?</Text>
          <ScrollView>
            <View style={styles.inputView}>
              <TextInput
                style={styles.inputText}
                placeholder="Username"
                placeholderTextColor="rgba(0,0,0,0.35)"
                onChangeText={(text) => this.setState({username: text})}
              />
            </View>
            <View style={styles.inputView}>
              <TextInput
                style={styles.inputText}
                placeholder="betterall@email.com"
                placeholderTextColor="rgba(0,0,0,0.35)"
                onChangeText={(text) => this.setState({email: text})}
              />
            </View>
            <View style={styles.inputView}>
              <TextInput
                secureTextEntry
                style={styles.inputText}
                placeholder="Password..."
                placeholderTextColor="rgba(0,0,0,0.35)"
                onChangeText={(text) => this.setState({password: text})}
              />
            </View>
            <View style={styles.inputView}>
              <TextInput
                style={styles.inputText}
                placeholder="Name"
                placeholderTextColor="rgba(0,0,0,0.35)"
                onChangeText={(text) => this.setState({name: text})}
              />
            </View>
            <View style={styles.inputView}>
              <TextInput
                style={styles.inputText}
                placeholder="Surname"
                placeholderTextColor="rgba(0,0,0,0.35)"
                onChangeText={(text) => this.setState({surname: text})}
              />
            </View>

            <View style={styles.inputView}>
              <TextInput
                style={styles.inputText}
                placeholder="Height"
                placeholderTextColor="rgba(0,0,0,0.35)"
                onChangeText={(text) => this.setState({height: text})}
              />
            </View>
            <View style={styles.inputView}>
              <TextInput
                style={styles.inputText}
                placeholder="Weight"
                placeholderTextColor="rgba(0,0,0,0.35)"
                onChangeText={(text) => this.setState({weight: text})}
              />
            </View>
            <View style={styles.inputView}>
              <TextInput
                style={styles.inputText}
                placeholder="Gender"
                placeholderTextColor="rgba(0,0,0,0.35)"
                onChangeText={(text) => this.setState({gender: text})}
              />
            </View>
            <TouchableOpacity
              style={styles.signupButton}
              onPress={() => {this.function1(); this.props.navigation.navigate('AppMenuScreen')}}>
              <Text style={styles.signupButtonText}>JOIN US!</Text>
            </TouchableOpacity>
          </ScrollView>
          </View>
        </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: '#CDDA7E',
    alignItems: 'center',
    //paddingLeft: 100,
  },
  gradient: {
    flex: 1,
    paddingLeft: 30,
    paddingRight: 30,
    backgroundColor: '#cdda7e',
    //paddingLeft: 50,
    //paddingRight: 200,
  },
  header: {
    fontSize: 48,
    fontFamily:'Mulish-Regular',
    color: '#222b14',
    paddingBottom: 10,
    marginTop: 30,
    marginBottom: 20,
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
    //borderBottomColor: '#222b14',
    //borderBottomColor: '#199187',
    //borderBottomWidth: 1,
  },
  inputView: {
    flex: 1,
    fontFamily:'Mulish-Regular',
    width: '100%',
    backgroundColor: 'rgba(0,0,0,0.09)',
    borderRadius: 25,
    height: 30,
    marginBottom: 20,
    justifyContent: 'center',
    padding: 20,
  },
  inputText: {
    fontFamily:'Mulish-Regular',
    height: 50,
    color: 'white',
    fontWeight: 'bold',
  },
  buttonText: {
    fontFamily:'Mulish-Regular',
    color: '#fff',
    fontWeight: 'bold',
  },
  signupButton: {
    width: '100%',
    backgroundColor: '#ffcc33',
    borderRadius: 25,
    height: 50,
    //alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15,
    marginBottom: 10,
  },
  signupButtonText: {
    fontFamily:'Mulish-Regular',
    color: "#222b14",
    fontSize: 20,
    fontWeight: 'bold',
    justifyContent: 'center',
    textAlign: 'center',
  },
  centeredView: {
    //flex: 1,
    //justifyContent: "center",
    marginTop: 22
  },
});
