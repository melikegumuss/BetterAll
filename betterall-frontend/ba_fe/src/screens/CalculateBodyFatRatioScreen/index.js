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

  IncrementWaist = () => {
    this.setState({ waist: this.state.waist + 1 });
  }
  DecreaseWaist = () => {
    this.setState({ waist: this.state.waist - 1 });
  }
  IncrementChest = () => {
    this.setState({ chest: this.state.chest + 1 });
  }
  DecreaseChest = () => {
    this.setState({ chest: this.state.chest - 1 });
  }
  IncrementHip = () => {
    this.setState({ hip: this.state.hip + 1 });
  }
  DecreaseHip = () => {
    this.setState({ hip: this.state.hip - 1 });
  }

  render() {

    return (
          <View style={{ backgroundColor: '#CDDA7E',flex: 1,
            paddingLeft: 30,
            paddingRight: 30,}} >

            <ScrollView >
              <SafeAreaView>
                <View>
                  <Text>***Manually insert the data***</Text>
                  <Text style={{textAlign:'center',marginTop: 8, fontSize:13}}>Waist </Text>

                  <View style={{ flexDirection:"row", marginTop: 10 , justifyContent: 'center',}}>

                    <View  style={{width: 35, height: 40}}>
                      <Button onPress={this.IncrementWaist} title="+" ></Button>
                    </View>

                    <Text style={{textAlign:'center',marginTop: 8,marginLeft: 8,marginRight: 8}}>
                      {this.state.waist}</Text>

                    <View  style={{width: 35,height: 40}} >
                      <Button onPress={this.DecreaseWaist} title="-"></Button>
                    </View>

                  </View>

                  <Text style={{textAlign:'center',marginTop: 8, fontSize:13}}>Chest </Text>
                  <View style={{ flexDirection:"row", marginTop: 10 , justifyContent: 'center',}}>

                    <View  style={{width: 35, height: 50}}>
                      <Button onPress={this.IncrementChest} title="+" ></Button>
                    </View>

                    <Text style={{textAlign:'center',marginTop: 8,marginLeft: 8,marginRight: 8}}>
                      {this.state.chest}</Text>

                    <View  style={{width: 35,height: 50}} >
                      <Button onPress={this.DecreaseChest} title="-"></Button>
                    </View>

                  </View>

                  <Text style={{textAlign:'center',marginTop: 8, fontSize:13}}>Hip </Text>
                  <View style={{ flexDirection:"row", marginTop: 10 , justifyContent: 'center',}}>

                    <View  style={{width: 35, height: 50}}>
                      <Button onPress={this.IncrementHip} title="+" ></Button>
                    </View>

                    <Text style={{textAlign:'center',marginTop: 8,marginLeft: 8,marginRight: 8}}>
                      {this.state.hip}</Text>

                    <View  style={{width: 35,height: 50}} >
                      <Button onPress={this.DecreaseHip} title="-"></Button>
                    </View>

                  </View>

                </View>

                <View>
                  <View style={{alignItems: 'center'}}>
                    <Text style={{textAlign:'center'}}>Selected Images will be there</Text>
                    {this.withURI()}
                  </View>
                </View>

                <View style={{flexDirection:"column",alignItems: 'center', justifyContent:'center'}}>
                  <View>
                    <Text style={{fontSize:20,paddingBottom:20,textAlign: 'center'}}>Pick Images</Text>
                      <View style={{paddingBottom:20}} >
                        <TouchableOpacity onPress={this.imageLibrary} style={{
                          width: 185,
                          height: 40,
                          backgroundColor: 'whitesmoke',
                          justifyContent: 'center'
                          //marginBottom:10,
                          //alignItems: 'center',
                          //marginLeft: 100,
                          }}  >
                          <Text style={{textAlign: 'center'}}>Pick From Gallery</Text>
                        </TouchableOpacity>
                      </View>
                  </View>

                  <View>
                      <TouchableOpacity onPress={this.openCamera} style={{
                        width: 185,
                        height: 40,
                        backgroundColor: 'white',
                        justifyContent: 'center'
                        //marginBottom:10,
                        //alignItems: 'center',
                        //marginLeft: 100,
                      }}  >
                        <Text style={{textAlign: 'center'}}>Open camera</Text>
                      </TouchableOpacity>
                  </View>

                </View>





              </SafeAreaView>

            </ScrollView>
          </View>
    );
  }
}

const styles = StyleSheet.create({

  images: {
    width: 150,
    height: 150,
    borderColor: 'black',
    borderWidth: 2,
    marginHorizontal: 3,
  },


});
