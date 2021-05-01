//import * as React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Button,
  Image,
  ScrollView,
  SafeAreaView,
  Dimensions,
  ImageEditor,
  NativeModules
} from "react-native";
import React, {useState} from 'react';
import AppMenuScreen from '../AppMenuScreen';
import * as ImagePicker from "react-native-image-picker";
import {Colors} from "react-native/Libraries/NewAppScreen";
import Unavailable from "../../../assets/images/unavailable-photo.png"
import LinearGradient from "react-native-linear-gradient";
var RNFS = require('react-native-fs')
export default class CalculateBodyFatRatioScreen extends React.Component {
  //constructor() {
  //  super();
  //}
  constructor(props) {
    super(props)
    this.state = {
      path: {
        uri: ''
      },
      photoURI: '',
      base64: '',
      waist: 50,
      chest:50,
      hip:50,
      bodyFat: ''
    }
  }

  componentDidMount(){
    //this.calculateBodyFat();
  }

  calculateBodyFat(){
    try{
      fetch('http://www.fitimage.io/api/api_fat_predict/',{
        method: 'post',
        mode: 'no-cors',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(
          { "token": "367682e0b6cc177fd992a3255f5983579dc9c64e",
            "gender": "female",
            "image": this.state.base64
          }
        )
      }).then(response=>response.json()).then(data=>{
        this.setState({bodyFat: data.api_data.predictions[0].fat})
        console.log("Fonk ici:" + data.api_data.predictions[0].fat)
      }).catch(err=>console.error(err));
    }catch(e){
      console.log(e);
    }
  }

  convertImageToBase64 = async() => {
    const base64data = await RNFS.readFile(this.state.path.uri, 'base64').then();
    //console.log(base64data);
    this.setState({
      base64: base64data
    });
    console.log(this.state.base64);
  }

  imageLibrary = () => {
    let options = {
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    ImagePicker.launchImageLibrary(options, (response) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('Image picker module is cancelled by the user.');
      } else {
        const source = { uri: response.uri };
        this.setState({
          path: response,
          photoURI: response.uri,
        });
      }
    });
    this.convertImageToBase64.bind(this);
  }

  openCamera = () => {
    let options = {
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    ImagePicker.launchCamera(options, (response) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('Image picker module is cancelled by the user.');
      } else {
        this.setState({
          path: response,
          photoURI: response.uri
        });
      }
    });
    this.convertImageToBase64();
  }

  withURI() {
    if (this.state.photoURI) {
      return <Image
          source={{ uri: this.state.photoURI }}
          style={styles.images}
      />
    } else {
      return <Image
         source={Unavailable}
         style={styles.images}
      />
    }
  }

  render() {

    return (
        <LinearGradient colors={['#cdda7e', '#8aa07c', '#47657a']} style={styles.gradient}>

            <ScrollView >
              <SafeAreaView>
                <View>
                  <View style={{alignItems: 'center'}}>
                    {this.withURI()}
                  </View>
                </View>

                <View style={{flexDirection:"column",alignItems: 'center', justifyContent:'center'}}>
                  <View>
                      <View style={{paddingBottom:20}}>
                        <TouchableOpacity
                            onPress={this.imageLibrary}
                            style={styles.buttonYellow}>
                          <Text style={styles.buttonText}>Pick from gallery</Text>
                        </TouchableOpacity>
                      </View>
                  </View>
                  <View>
                      <TouchableOpacity style={styles.buttonYellowCamera}
                         onPress={this.openCamera}>
                        <Text style={styles.buttonText}>Open camera</Text>
                      </TouchableOpacity>
                  </View>
                  <View>
                      <TouchableOpacity style={styles.buttonYellowCalculate}
                         onPress={this.convertImageToBase64}>
                        <Text style={styles.buttonText}>Calculate My Body Fat</Text>
                      </TouchableOpacity>
                  </View>
                  <View>
                      <TouchableOpacity style={styles.buttonYellowCalculate}
                         onPress={this.calculateBodyFat.bind(this)}>
                        <Text style={styles.buttonText}>AAAAAAAAAAAAAAAAAAAAAAAA</Text>
                      </TouchableOpacity>
                  </View>
                </View>
              </SafeAreaView>
            </ScrollView>
        </LinearGradient>
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
  images: {
    marginTop:80,
    width: 300,
    height: 300,
    marginHorizontal: 3,
  },
  buttonYellow:{
    width: 300,
    backgroundColor:"#ffcc33",
    borderRadius:25,
    height:55,
    alignItems:"center",
    justifyContent:"center",
    //marginLeft:240,
    marginTop:120,
    marginBottom:10
  },
  buttonYellowCamera:{
    width: 300,
    backgroundColor:"#ffcc33",
    borderRadius:25,
    height:55,
    alignItems:"center",
    justifyContent:"center",
    //marginLeft:240,
    marginBottom: 30
  },
  buttonYellowCalculate:{
    width: 300,
    backgroundColor:"#ffcc33",
    borderRadius:25,
    height:55,
    alignItems:"center",
    justifyContent:"center",
    //marginLeft:240,
    marginBottom: 90
  },
  buttonText:{
    fontFamily:'Mulish-Regular',
    color: "#222b14",
    fontSize: 24,
    fontWeight: 'bold',
  },


});
