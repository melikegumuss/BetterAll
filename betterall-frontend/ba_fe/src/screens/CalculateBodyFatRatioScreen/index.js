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
  Dimensions
} from "react-native";
import React, {useState} from 'react';
import AppMenuScreen from '../AppMenuScreen';
import * as ImagePicker from "react-native-image-picker";
import {Colors} from "react-native/Libraries/NewAppScreen";
import Unavailable from "../../../assets/images/unavailable-photo.png"
import LinearGradient from "react-native-linear-gradient";

/*import RNFS from 'react-native-fs';

RNFS.readFile(this.state.imagePath, 'base64')
    .then(res =>{
      console.log(res);
    });*/

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
      waist: 50,
      chest:50,
      hip:50,
    }
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
          photoURI: response.uri
        });
      }
    });

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
    marginBottom:100
  },
  buttonText:{
    fontFamily:'Mulish-Regular',
    color: "#222b14",
    fontSize: 24,
    fontWeight: 'bold',
  },


});
