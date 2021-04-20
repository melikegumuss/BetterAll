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
//import "fontsource-muli";
import AppMenuScreen from '../AppMenuScreen';
import * as ImagePicker from "react-native-image-picker";
import {Colors} from "react-native/Libraries/NewAppScreen";

export default class CalculateBodyFatRatioScreen extends React.Component {
  //constructor() {
  //  super();
  //}
  constructor(props) {
    super(props)
    this.state = {
      filepath: {
        data: '',
        uri: ''
      },
      fileData: '',
      fileUri: '',
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
  }

  /*state={
    username:"",
    email:"",
    password:"",
    name:"",
    surname:"",
    height:"",
    weight:"",
    gender:"",
    //age: new Date(),
  }*/

  launchImageLibrary = () => {
    let options = {
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    ImagePicker.launchImageLibrary(options, (response) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        const source = { uri: response.uri };
        console.log('uri::::::::', response.uri);
        console.log('response', JSON.stringify(response));
        this.setState({
          filePath: response,
          fileData: response.data,
          fileUri: response.uri
        });
      }
    });

  }
  renderFileUri() {
    if (this.state.fileUri) {
      console.log('ben burDSAKDNSKFF', this.state.fileUri);
      return <Image
          source={{ uri: this.state.fileUri }}
          style={styles.images}
      />
    } else {
      return <Image
         source={require('../../../assets/images/pescatarian.png')}
          //source={{uri:"file:///data/user/0/com.ba_fe/cache/rn_image_picker_lib_temp_b995d74e-0224-4bb6-b95b-d5a253d487b0.jpg"}}
          style={styles.images}
      />
    }
  }
  renderFileData() {
    if (this.state.fileData) {
      return <Image source={{ uri: 'data:image/jpeg;base64,' + this.state.fileData }}
                    style={styles.images}
      />
    } else {
      return <Image source={require('../../../assets/images/vegetarian.png')}
                    style={styles.images}
      />
    }
  }
  render() {
    return (
          <View style={{ backgroundColor: '#CDDA7E'}} >
            <ScrollView>
              <SafeAreaView>
                <View>
                  <Text style={{paddingBottom:270}}>***Manually insert the data***</Text>
                </View>

                <View>
                  <Text style={{fontSize:20,paddingBottom:20,paddingLeft:10}}>Pick Images from Gallery</Text>
                  <View>
                    <TouchableOpacity onPress={this.launchImageLibrary} style={{
                      width: 185,
                      height: 50,
                      backgroundColor: 'white',
                      marginBottom:10,
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginLeft: 100,
                      }}  >
                      <Text style={{textAlign: 'center'}}>Pick From Gallery</Text>
                    </TouchableOpacity>
                  </View>


                  <View>
                    <View>
                      {this.renderFileUri()}
                      <Text style={{textAlign:'center'}}>Selected Images will be there</Text>
                    </View>
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
    borderWidth: 1,
    marginHorizontal: 3
  },


});
