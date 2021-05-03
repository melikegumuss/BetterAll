//import * as React from 'react';
import { LogBox } from 'react-native';
LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs();//Ignore all log notifications
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
  NativeModules, Alert, Modal, Picker
} from "react-native";
import React, {useState} from 'react';
import AppMenuScreen from '../AppMenuScreen';
import * as ImagePicker from "react-native-image-picker";
import {Colors} from "react-native/Libraries/NewAppScreen";
import Unavailable from "../../../assets/images/unavailable-photo.png"
import LinearGradient from "react-native-linear-gradient";
import NumericInput from 'react-native-numeric-input';

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
      waist: 80,
      chest:90,
      hip:100,
      bodyFat: '',
      neck: 30,
      abdomen: 75,
      modalVisible: false,
      maleBodyFat: 0,
      femaleBodyFat: 0,
      height:170,
    }
  }

  showAlertFunc(abc){
    Alert.alert("Your body fat is " + abc + "%");
  }



  calculateFemaleBodyFatManually(){
    let val=(163.205*Math.log10(this.state.waist+this.state.hip-this.state.neck))-(97.684*Math.log10(68))-78.387
    let percentFatFemale = (163.205 * Math.log10((((this.state.waist*0.3937007874)  + (0.3937007874*this.state.hip)) - (this.state.neck*0.3937007874)))) - (97.684 * Math.log10((this.state.height*0.3937007874))) - 78.387
    //this.showAlertFunc(this.state.femaleBodyFat);
    this.showAlertFunc(Math.round(percentFatFemale));
    this.setState({femaleBodyFat:Math.round(percentFatFemale)});
    //Alert.alert("Female body fat %" + this.state.femaleBodyFat);
  }
  calculateMaleBodyFatManually(){
    let percentFatMale = (86.01 * Math.log10(((this.state.waist*0.3937007874) - (this.state.neck*0.3937007874)))) - (70.041 * Math.log10((this.state.height*0.3937007874))) + 36.76
    this.showAlertFunc(Math.round(percentFatMale));
    this.setState({maleBodyFat:Math.round(percentFatMale)});
  }
  setModalVisible = (visible) => {
    this.setState({modalVisible: visible});
  }
  calculateBodyFat(photos){
    try{
      fetch('http://www.fitimage.io/api/api_fat_predict/',{
        method: 'post',
        mode: 'no-cors',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(
            { "token": "8a5f54df04aa9a49ca59480ba0a98e78ba6d1a7b",
              "gender": "female",
              "image": photos
            }
        )
      }).then(response=>response.json()).then(data=>{

        if(data.api_data.success == true){
          this.setState({bodyFat: data.api_data.predictions[0].fat})
          console.log("Fonk ici:" + data.api_data.predictions[0].fat)
        }
        if(data.api_data.success == false){
          Alert.alert("Your image is not valid!");
          this.setState({bodyFat: ""})
        }
        //if(data.api_data.prediction.message){

        //}
        /*if(data == undefined){
          Alert.Alert("OLDU AQ")
        }else{
          this.setState({bodyFat: data.api_data.predictions[0].fat})
          console.log("Fonk ici:" + data.api_data.predictions[0].fat)
        }*/
        //console.log(data.api_data.success)
        //console.log(data.api_data.success) -- bu doğru result
        console.log(data.api_data.success)
        //this.setState({bodyFat: data.api_data.predictions[0].fat})
        //console.log("Fonk ici:" + data.api_data.predictions[0].fat)
      }).catch(err=>console.error("..."));
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
    this.calculateBodyFat(this.state.base64);
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
        this.convertImageToBase64.bind(this);
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
        this.convertImageToBase64.bind(this);
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
    const {modalVisible} = this.state;
    return (
        <LinearGradient colors={['#cdda7e', '#8aa07c', '#47657a']} style={styles.gradient}>
            <ScrollView >
              <SafeAreaView>
                <View>
                  <View style={{alignItems: 'center'}}>
                    {this.withURI()}
                  </View>
                </View>
                <View>
                  <Text style={styles.yourFatText}>Your body fat ratio is % {Math.round(((this.state.bodyFat+Number.EPSILON)*100)/100)}</Text>
                </View>
                <View style={{flexDirection:"column",alignItems: 'center', justifyContent:'center'}}>
                  <View>
                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={modalVisible}
                        onRequestClose={() => {
                          //Alert.alert("Your meal plan is added to the queue.");
                          this.setModalVisible(!modalVisible);
                        }}
                    >
                      <View style={styles.modalView}>


                    <Text style={styles.bodyPartText}>Neck</Text>
                    <NumericInput
                        value={this.state.neck}
                        onChange={value => this.setState({neck:value})}
                        onLimitReached={(isMax,msg) => console.log(isMax,msg)}
                        totalWidth={300}
                        borderColor={"#222b14"}
                        totalHeight={55}
                        iconSize={25}
                        step={1}
                        valueType='real'
                        rounded
                        textColor='#ffcc33'
                        iconStyle={{ color: '#222b14' }}
                        rightButtonBackgroundColor='#ffcc33'
                        leftButtonBackgroundColor='#ffcc33'/>


                    <Text style={styles.bodyPartText}>Waist / Abdomen</Text>
                    <NumericInput
                        value={this.state.waist}
                        onChange={value => this.setState({waist:value})}
                        onLimitReached={(isMax,msg) => console.log(isMax,msg)}
                        totalWidth={300}
                        borderColor={"#222b14"}
                        totalHeight={55}
                        iconSize={25}
                        step={1}
                        valueType='real'
                        rounded
                        textColor='#ffcc33'
                        iconStyle={{ color: '#222b14' }}
                        rightButtonBackgroundColor='#ffcc33'
                        leftButtonBackgroundColor='#ffcc33'/>
                    <Text style={styles.bodyPartText}>Hip</Text>
                    <NumericInput
                        value={this.state.hip}
                        onChange={value => this.setState({hip:value})}
                        onLimitReached={(isMax,msg) => console.log(isMax,msg)}
                        totalWidth={300}
                        borderColor={"#222b14"}
                        totalHeight={55}
                        iconSize={25}
                        step={1}
                        valueType='real'
                        rounded
                        textColor='#ffcc33'
                        iconStyle={{ color: '#222b14' }}
                        rightButtonBackgroundColor='#ffcc33'
                        leftButtonBackgroundColor='#ffcc33'/>
                        <Text style={styles.bodyPartText}>Height</Text>
                        <NumericInput
                            value={this.state.height}
                            onChange={value => this.setState({height:value})}
                            onLimitReached={(isMax,msg) => console.log(isMax,msg)}
                            totalWidth={300}
                            borderColor={"#222b14"}
                            totalHeight={55}
                            iconSize={25}
                            step={1}
                            valueType='real'
                            rounded
                            textColor='#ffcc33'
                            iconStyle={{ color: '#222b14' }}
                            rightButtonBackgroundColor='#ffcc33'
                            leftButtonBackgroundColor='#ffcc33'/>
                      </View>
                      <View style={styles.buttonClose}>
                      <TouchableOpacity
                          style={styles.buttonModalCalculate}
                          onPress={() => {
                            this.setModalVisible(!modalVisible),
                                this.calculateFemaleBodyFatManually()
                          }
                          }
                      >
                        <Text style={styles.buttonText}>Female</Text>
                      </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.buttonModalCalculate}
                            onPress={() => {
                              this.setModalVisible(!modalVisible),
                                  this.calculateMaleBodyFatManually()
                            }
                            }
                        >
                          <Text style={styles.buttonText}>Male</Text>
                        </TouchableOpacity>
                        </View>
                    </Modal>
                  </View>

                  <View style={{paddingBottom:20}}>
                    <TouchableOpacity
                        onPress={this.imageLibrary}
                        style={styles.buttonYellow}>
                      <Text style={styles.buttonText}>Pick from gallery</Text>
                    </TouchableOpacity>
                  </View>

                  <View>
                      <TouchableOpacity style={styles.buttonYellowCamera}
                         onPress={this.openCamera}>
                        <Text style={styles.buttonText}>Open camera</Text>
                      </TouchableOpacity>
                  </View>
                  <View>
                      <TouchableOpacity style={styles.buttonYellowCalculate}
                         onPress={()=>{this.convertImageToBase64()}}
                      disabled={false}>
                        <Text style={styles.buttonText}>Calculate My Body Fat</Text>
                      </TouchableOpacity>
                  </View>
                  <View>
                    <TouchableOpacity
                        style={styles.buttonYellowCalculate}
                        onPress={() => {
                          this.setModalVisible(!modalVisible)
                        }
                        }>
                      <Text style={styles.buttonText}>Calculate Manually</Text>
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
    resizeMode: 'contain'
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
  buttonYellowCalculateManually:{
    width: 300,
    backgroundColor:"#ffcc33",
    borderRadius:25,
    height:55,
    alignItems:"center",
    justifyContent:"center",
    alignSelf: 'center',
    marginBottom: 30
  },
  buttonModalCalculate:{
    width: 150,
    backgroundColor:"#CDDA7E",
    marginLeft: 30,
    borderRadius:25,
    height:55,
    alignItems:"center",
    justifyContent:"center",
    alignSelf: 'center',
    //marginBottom: 30
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
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems:"center",
    //fontWeight: 'bold',
  },
  bodyPartText:{
    fontFamily:'Mulish-Regular',
    color: "#CDDA7E",
    fontSize: 30,
    paddingTop: 15,
    alignSelf:'center',
    //fontWeight: 'bold',
  },
  fitImage:{
    aspectRatio: 1,
    height: undefined,
    width: '100%',
    alignItems: 'center'
  },
  yourFatText:{
    fontFamily:'Mulish-Regular',
    color: "#222b14",
    fontSize: 24,
    paddingLeft: 30,
    paddingTop: 50,
  },
  modalView: {
    margin: 30,
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
  button: {
    borderRadius: 20,
    padding: 20,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#ffcc33",
  },
  buttonClose: {
    backgroundColor: "white",
    borderRadius: 20,
    padding: 55,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    paddingLeft: 30,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 120,
    marginLeft: 30,
    marginRight: 30,
  },
});
