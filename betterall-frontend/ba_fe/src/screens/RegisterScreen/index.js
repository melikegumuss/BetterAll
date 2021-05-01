//import * as React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Button,
  Modal,
  Dimensions,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import React, {useState} from 'react';
//import DateTimePicker from '@react-native-community/datetimepicker';
import {Component} from 'react';
import LoginScreen from '../LoginScreen';
import "../../../assets/fonts/Mulish-Regular.ttf";
import LinearGradient from "react-native-linear-gradient";

const isCloseToBottom = ({layoutMeasurement, contentOffset, contentSize}) => {
  const paddingToBottom = 20;
  return layoutMeasurement.height + contentOffset.y >=
    contentSize.height - paddingToBottom;
};


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
    modalVisible: false,
    accepted: false
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

  setModalVisible = (visible) => {
    this.setState({modalVisible: visible});
}

  render() {
    const {modalVisible} = this.state;
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
            <View>
            <TouchableOpacity
                        onPress={() => this.setModalVisible(true)}>
                        <Text style={styles.termsText}>Accept Terms and Conditions before joining BetterAll!</Text>
                      </TouchableOpacity>
            </View>
            <TouchableOpacity
              disabled={ !this.state.accepted }
              style={this.state.accepted ? styles.signupButton : styles.buttonDisabled }
              onPress={() => {this.function1(); this.props.navigation.navigate('AppMenuScreen')}}>
              <Text style={styles.signupButtonText}>JOIN US!</Text>
            </TouchableOpacity>
          </ScrollView>
          </View>
          <View>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
          >
            <View style={styles.centeredView2}>
              <View style={styles.modalView}>
                <ScrollView
                  style={styles.tcContainer}
                  onScroll={({nativeEvent}) => {
                    if (isCloseToBottom(nativeEvent)) {
                      this.setState({
                        accepted: true
                      })
                    }
                  }}>
                    <Text style={styles.title}>Terms and Conditions</Text>
                    <Text style={styles.tcP}>Welcome to BetterAll! If you continue to browse and use this application, you are agreeing to comply with and be bound by the following terms and conditions of use, which together with our privacy policy govern BetterAll’s relationship with you in relation to this application. If you disagree with any part of these terms and conditions, please do not use our application.</Text>
                    <Text style={styles.tcP}>The term ‘BetterAll’ or ‘us’ or ‘we’ refers to the owner of the application whose registered office is [address]. Our company registration number is [company registration number and place of registration]. The term ‘you’ refers to the user or viewer of our application.</Text>
                    <Text style={styles.tcL}>{'\u2022'} The content of the pages of this application is for your general information and use only. It is subject to change without notice.</Text>
                    <Text style={styles.tcL}>{'\u2022'} Neither we nor any third parties provide any warranty or guarantee as to the accuracy, timeliness, performance, completeness or suitability of the information and materials found or offered on this application for any particular purpose. You acknowledge that such information and materials may contain inaccuracies or errors and we expressly exclude liability for any such inaccuracies or errors to the fullest extent permitted by law.</Text>
                    <Text style={styles.tcL}>{'\u2022'} Your use of any information or materials on this application is entirely at your own risk, for which we shall not be liable. It shall be your own responsibility to ensure that any products, services or information available through this application meet your specific requirements.</Text>
                    <Text style={styles.tcL}>{'\u2022'} This application contains material which is owned by or licensed to us. This material includes, but is not limited to, the design, layout, look, appearance and graphics. Reproduction is prohibited other than in accordance with the copyright notice, which forms part of these terms and conditions.</Text>
                    <Text style={styles.tcL}>{'\u2022'} All trademarks reproduced in this application, which are not the property of, or licensed to the operator, are acknowledged on the application. Unauthorised use of this application may give rise to a claim for damages and/or be a criminal offence.</Text>
                    <Text style={styles.tcL}>{'\u2022'} From time to time, this application may also include links to other applications. These links are provided for your convenience to provide further information. They do not signify that we endorse the application(s). We have no responsibility for the content of the linked application(s).</Text>
                    <Text style={styles.tcL}>{'\u2022'} Your use of this application and any dispute arising out of such use of the application is subject to the laws of Turkey.</Text>
                    <Text style={styles.tcP}>The use of this application is subject to the following terms of use</Text>
                </ScrollView>
                        <TouchableOpacity disabled={ !this.state.accepted } onPress={ ()=>this.setModalVisible(!modalVisible) } style={ this.state.accepted ? styles.button : styles.buttonDisabled }><Text style={styles.signupButtonText}>Accept</Text></TouchableOpacity>
                      </View>
                      </View>
                      </Modal>
            </View>
        </LinearGradient>
    );
  }
}

const { width , height } = Dimensions.get('window');

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
  centeredView2: {
    //flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
    //backgroundColor: "red",
},
modalView: {
    margin: 10,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 55,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
},
tcP: {
  marginTop: 10,
  marginBottom: 10,
  fontSize: 16
},
tcL:{
  //marginLeft: 10,
  marginTop: 10,
  marginBottom: 10,
  fontSize: 16
},
tcContainer: {
  marginTop: 15,
  marginBottom: 15,
  height: height * .7
},
title: {
  fontSize: 22,
  alignSelf: 'center'
},
button:{
  backgroundColor: '#ffcc33',
  borderRadius: 5,
  padding: 10
},

buttonDisabled:{
backgroundColor: '#999',
borderRadius: 5,
padding: 10
},

buttonLabel:{
  fontSize: 14,
  color: '#FFF',
  alignSelf: 'center'
},

termsText:{
    fontFamily:'Mulish-Regular',
    color: "#222b14",
    fontSize: 14,
    fontWeight: 'bold',
    justifyContent: 'center',
    textAlign: 'center',
},
});
